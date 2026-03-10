import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
import { Storage } from '@google-cloud/storage';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const DATA_FILE = path.join(__dirname, 'data', 'apps.json');
const GCS_BUCKET = process.env.GCS_BUCKET_NAME;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Ensure data directory exists for local dev
if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}

const storage = new Storage();

async function getApps() {
    if (GCS_BUCKET) {
        try {
            const bucket = storage.bucket(GCS_BUCKET);
            const file = bucket.file('apps.json');
            const [content] = await file.download();
            return JSON.parse(content.toString());
        } catch (err) {
            console.error('Error reading from GCS, falling back to local:', err.message);
        }
    }

    if (fs.existsSync(DATA_FILE)) {
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }

    // Initial fallback if no data exists yet
    return [];
}

async function saveApps(apps) {
    const content = JSON.stringify(apps, null, 2);

    if (GCS_BUCKET) {
        try {
            const bucket = storage.bucket(GCS_BUCKET);
            const file = bucket.file('apps.json');
            await file.save(content, {
                contentType: 'application/json',
                resumable: false
            });
            console.log('Saved to GCS');
        } catch (err) {
            console.error('Error saving to GCS:', err.message);
        }
    }

    // Always save locally as well for backup/dev
    fs.writeFileSync(DATA_FILE, content);
}

// API Routes
app.get('/api/apps', async (req, res) => {
    try {
        const apps = await getApps();
        res.json(apps);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch apps' });
    }
});

app.post('/api/login', (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
        // In a real app, we'd use a JWT. For this simple case, simple success/fail is okay.
        res.json({ success: true, token: 'simple-admin-token' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid password' });
    }
});

app.post('/api/apps', async (req, res) => {
    const authToken = req.headers['authorization'];
    if (authToken !== 'Bearer simple-admin-token') {
        return res.status(403).json({ error: 'Unauthorized' });
    }

    try {
        const apps = req.body;
        await saveApps(apps);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Failed to save apps' });
    }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// SPA Fallback
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
