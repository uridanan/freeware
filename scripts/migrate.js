import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataTsPath = path.join(__dirname, '..', 'data.ts');
const appsJsonPath = path.join(__dirname, '..', 'data', 'apps.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
}

const dataTsContent = fs.readFileSync(dataTsPath, 'utf-8');

// Find the start of the array
const arrayStart = dataTsContent.indexOf('[');
const arrayEnd = dataTsContent.lastIndexOf(']') + 1;

if (arrayStart === -1 || arrayEnd === 0) {
    console.error('Could not find APP_LIST array in data.ts');
    process.exit(1);
}

const arrayContent = dataTsContent.substring(arrayStart, arrayEnd);

try {
    // Directly write the JSON content
    fs.writeFileSync(appsJsonPath, arrayContent);
    console.log('Successfully migrated data to data/apps.json');
} catch (err) {
    console.error('Error migrating data:', err.message);
}
