import { AppItem } from './types';

export const APP_LIST: AppItem[] = 
[
  {
    "name": "Folder Sizes",
    "url": "https://www.foldersizes.com/",
    "status": "Just In Time",
    "description": "",
    "recommendation": "",
    "category": "Other",
    "id": "863e0903-f953-4874-b430-0ac44b98783a",
    "iconFallback": "FO"
  },
  {
    "name": "ONLYOFFICE",
    "url": "https://www.onlyoffice.com/",
    "status": "Must",
    "description": "",
    "recommendation": "",
    "category": "Office & Productivity",
    "id": "6cadb070-5804-4224-bb4e-4c61563c433d",
    "iconFallback": "ON",
    "alternatives": [
      {
        "id": "40c708b8-90fc-4cb7-99fb-b355859461d0",
        "name": "Office 365",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.office.com/",
        "relatedAppId": "office-365"
      }
    ]
  },
  {
    "name": "Penpot",
    "url": "https://penpot.app/",
    "status": "Just In Time",
    "description": "",
    "recommendation": "",
    "category": "Other",
    "id": "f6b44987-720d-4def-a97b-f3a36617069c",
    "iconFallback": "PE"
  },
  {
    "name": "Windows Notepad",
    "url": "https://apps.microsoft.com/detail/9msmlrh6lzf3?hl=en-US&gl=IL",
    "status": "Must",
    "description": "",
    "recommendation": "",
    "category": "Other",
    "id": "8d04d83c-c252-4f88-918d-94f8ef8470f4",
    "iconFallback": "WI",
    "alternatives": [
      {
        "id": "d5092ba4-a465-4a70-aa8b-50e854982801",
        "name": "Sublime Text 3",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.sublimetext.com/3",
        "relatedAppId": "sublime-text-3"
      },
      {
        "id": "d8bf0807-36db-4f40-9e33-a2488a25685d",
        "name": "Pulsar Edit",
        "reason": "",
        "isPreferred": false,
        "url": "https://pulsar-edit.dev/",
        "relatedAppId": "pulsar-edit"
      }
    ]
  },
  {
    "name": "qbittorrent",
    "url": "https://www.qbittorrent.org/",
    "status": "Must",
    "description": "",
    "recommendation": "",
    "category": "Internet & Social",
    "id": "3eaecea3-a0e0-457f-aaba-f93e6cb5966b",
    "iconFallback": "QB",
    "alternatives": [
      {
        "id": "b3e7d6c9-67a5-4781-8f0f-7e4195fe00cb",
        "name": "uTorrent",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.utorrent.com/",
        "relatedAppId": "utorrent"
      }
    ]
  },
  {
    "name": "Sublime Merge",
    "url": "https://www.sublimemerge.com/download",
    "status": "Just In Time",
    "description": "",
    "recommendation": "",
    "category": "Internet & Social",
    "id": "57f5522e-1938-4df0-9200-7bf1324fdf19",
    "iconFallback": "SU"
  },
  {
    "name": "Slack",
    "url": "https://slack.com/downloads/windows",
    "status": "Just In Time",
    "description": "",
    "recommendation": "",
    "category": "Internet & Social",
    "id": "a40320b8-574a-444a-a05b-08631bbd2a5f",
    "iconFallback": "SL"
  },
  {
    "name": "Adobe Express Photos",
    "url": "https://www.adobe.com/express/",
    "status": "Must",
    "description": "",
    "recommendation": "",
    "category": "Media & Creative",
    "id": "efd6eb9a-55d8-408d-975b-0d113623c162",
    "iconFallback": "AD",
    "alternatives": [
      {
        "id": "09c69fdf-bd7e-4b70-9458-a0b12af892fd",
        "name": "Nomacs Image Lounge",
        "reason": "",
        "isPreferred": false,
        "url": "https://nomacs.org/",
        "relatedAppId": "nomacs-image-lounge"
      },
      {
        "id": "67ecfe33-29f1-461e-90ba-7d7073c69ac4",
        "name": "Screenpresso",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.screenpresso.com/",
        "relatedAppId": "screenpresso"
      }
    ]
  },
  {
    "id": "visual-studio-code",
    "name": "Visual Studio Code",
    "category": "Development",
    "url": "https://code.visualstudio.com/",
    "status": "Must",
    "iconFallback": "VI",
    "alternatives": [
      {
        "id": "78fdbb72-8342-4eef-bff9-c13e55fa9a6d",
        "name": "Eclipse IDE for Java Developers",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.eclipse.org/downloads/",
        "relatedAppId": "eclipse-ide-for-java-developers"
      },
      {
        "id": "b06cff9e-dd63-4b26-ac2d-84ea082e779c",
        "name": "IntelliJ IDEA",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.jetbrains.com/idea/",
        "relatedAppId": "intellij-idea"
      },
      {
        "id": "6d92d9e0-ac5b-4a84-b676-492f119c737d",
        "name": "PyCharm",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.jetbrains.com/pycharm/",
        "relatedAppId": "pycharm"
      },
      {
        "id": "d1c85754-fdb3-4b1e-8823-7297cbcf441e",
        "name": "Google Antigravity",
        "reason": "",
        "isPreferred": false,
        "url": "https://antigravity.google/",
        "relatedAppId": "google-antigravity"
      }
    ]
  },
  {
    "id": "jetbrains-webstorm",
    "name": "JetBrains WebStorm",
    "category": "Development",
    "url": "https://www.jetbrains.com/webstorm/",
    "status": "Just In Time",
    "iconFallback": "JE",
    "alternatives": [
      {
        "id": "dcce9d7a-642d-4109-b354-9f3e8a52aa49",
        "name": "Codepen",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://codepen.io/",
        "relatedAppId": "codepen"
      }
    ]
  },
  {
    "id": "pycharm",
    "name": "PyCharm",
    "category": "Development",
    "url": "https://www.jetbrains.com/pycharm/",
    "status": "Just In Time",
    "iconFallback": "PY",
    "alternatives": [
      {
        "id": "google-colab-alt",
        "name": "Google Colab",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://colab.research.google.com/",
        "relatedAppId": "google-colab"
      },
      {
        "id": "jupyter-alt",
        "name": "Jupyter",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://jupyter.org/",
        "relatedAppId": "jupyter"
      },
      {
        "id": "29bfe34c-1424-46f9-b40d-4da78392b7ad",
        "name": "Visual Studio Code",
        "reason": "",
        "isPreferred": false,
        "url": "https://code.visualstudio.com/",
        "relatedAppId": "visual-studio-code"
      },
      {
        "id": "292c8d2f-52bc-4a1a-969b-3bf6a7068ba7",
        "name": "Google Antigravity",
        "reason": "",
        "isPreferred": false,
        "url": "https://antigravity.google/",
        "relatedAppId": "google-antigravity"
      }
    ]
  },
  {
    "id": "sublime-text-3",
    "name": "Sublime Text 3",
    "category": "Development",
    "url": "https://www.sublimetext.com/3",
    "status": "Must",
    "iconFallback": "SU",
    "alternatives": [
      {
        "id": "notepad---alt",
        "name": "Notepad++",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://notepad-plus-plus.org/",
        "relatedAppId": "notepad--"
      },
      {
        "id": "pspad-alt",
        "name": "PSPad",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "http://www.pspad.com/",
        "relatedAppId": "pspad"
      },
      {
        "id": "atom-alt",
        "name": "Atom",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://github.com/atom/atom",
        "relatedAppId": "atom"
      },
      {
        "id": "kate-alt",
        "name": "Kate",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://kate-editor.org/",
        "relatedAppId": "kate"
      },
      {
        "id": "pulsar-edit-alt",
        "name": "Pulsar Edit",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://pulsar-edit.dev/",
        "relatedAppId": "pulsar-edit"
      },
      {
        "id": "b5abe0fb-645e-4f00-97eb-34b096d31218",
        "name": "Windows Notepad",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://apps.microsoft.com/detail/9msmlrh6lzf3?hl=en-US&gl=IL",
        "relatedAppId": "8d04d83c-c252-4f88-918d-94f8ef8470f4"
      }
    ]
  },
  {
    "id": "eclipse-ide-for-java-developers",
    "name": "Eclipse IDE for Java Developers",
    "category": "Development",
    "url": "https://www.eclipse.org/downloads/",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Vista-eclipse.png",
    "status": "Just In Time",
    "iconFallback": "EC",
    "alternatives": [
      {
        "id": "2f83d6a4-6612-44e2-873a-b4c31225e2c6",
        "name": "Visual Studio Code",
        "reason": "",
        "isPreferred": false,
        "url": "https://code.visualstudio.com/",
        "relatedAppId": "visual-studio-code"
      },
      {
        "id": "ef4076df-6640-4295-91a9-09fb431bedb6",
        "name": "IntelliJ IDEA",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.jetbrains.com/idea/",
        "relatedAppId": "intellij-idea"
      },
      {
        "id": "374de7ac-2f60-4bc0-82ac-2386e8f090fa",
        "name": "Google Antigravity",
        "reason": "",
        "isPreferred": true,
        "url": "https://antigravity.google/",
        "relatedAppId": "google-antigravity"
      }
    ]
  },
  {
    "id": "github-desktop",
    "name": "GitHub Desktop",
    "category": "Development",
    "url": "https://desktop.github.com/",
    "status": "Must",
    "iconFallback": "GI"
  },
  {
    "id": "docker-desktop",
    "name": "Docker Desktop",
    "category": "Development",
    "url": "https://www.docker.com/products/docker-desktop/",
    "status": "Must",
    "iconFallback": "DO"
  },
  {
    "id": "dbeaver",
    "name": "DBeaver",
    "category": "Development",
    "url": "https://dbeaver.io/",
    "status": "Must",
    "iconFallback": "DB"
  },
  {
    "id": "unity-hub",
    "name": "Unity Hub",
    "category": "Development",
    "url": "https://unity.com/download",
    "status": "Just In Time",
    "iconFallback": "UN"
  },
  {
    "id": "python",
    "name": "Python",
    "category": "Development",
    "url": "https://www.python.org/downloads/",
    "status": "Must",
    "iconFallback": "PY"
  },
  {
    "id": "windows-terminal",
    "name": "Windows Terminal",
    "category": "Development",
    "url": "https://github.com/microsoft/terminal",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Windows_Terminal_BLACK.png/640px-Windows_Terminal_BLACK.png",
    "status": "Must",
    "iconFallback": "WI",
    "alternatives": [
      {
        "id": "console-alt",
        "name": "Console",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://sourceforge.net/projects/console/",
        "relatedAppId": "console"
      },
      {
        "id": "a4ed31d7-5801-4665-8578-608c833243d9",
        "name": "Warp",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.warp.dev/",
        "relatedAppId": "warp"
      }
    ]
  },
  {
    "id": "warp",
    "name": "Warp",
    "category": "Development",
    "url": "https://www.warp.dev/",
    "status": "Must",
    "iconFallback": "WA",
    "alternatives": [
      {
        "id": "36bc36b2-7ebd-49b9-ab67-0165d83e651e",
        "name": "Windows Terminal",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://github.com/microsoft/terminal",
        "relatedAppId": "windows-terminal"
      },
      {
        "id": "b8eb6e81-5351-4728-92b8-499a2caf23ec",
        "name": "Console",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://sourceforge.net/projects/console/",
        "relatedAppId": "console"
      }
    ]
  },
  {
    "id": "intellij-idea",
    "name": "IntelliJ IDEA",
    "category": "Development",
    "url": "https://www.jetbrains.com/idea/",
    "status": "Just In Time",
    "iconFallback": "IN",
    "alternatives": [
      {
        "id": "cb039d69-7fcf-4b09-ad46-d07d46180ba4",
        "name": "Visual Studio Code",
        "reason": "",
        "isPreferred": true,
        "url": "https://code.visualstudio.com/",
        "relatedAppId": "visual-studio-code"
      },
      {
        "id": "8592e6f0-7b32-40b1-9427-4a1ea9e19493",
        "name": "Eclipse IDE for Java Developers",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.eclipse.org/downloads/",
        "relatedAppId": "eclipse-ide-for-java-developers"
      }
    ]
  },
  {
    "id": "minimal-adb-and-fastboot",
    "name": "Minimal ADB and Fastboot",
    "category": "Development",
    "url": "https://forum.xda-developers.com/t/tool-minimal-adb-and-fastboot-2-9-18.2317790/",
    "status": "Just In Time",
    "iconFallback": "MI"
  },
  {
    "id": "diffuse",
    "name": "Diffuse",
    "category": "Development",
    "url": "https://diffuse.sourceforge.net/",
    "status": "Just In Time",
    "iconFallback": "DI"
  },
  {
    "id": "google-chrome",
    "name": "Google Chrome",
    "category": "Internet & Social",
    "url": "https://www.google.com/chrome/",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg",
    "status": "Must",
    "iconFallback": "GO",
    "alternatives": [
      {
        "id": "e934699c-bd7f-4257-a617-90ce008ae063",
        "name": "Microsoft Edge",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.microsoft.com/en-us/edge",
        "relatedAppId": "microsoft-edge"
      },
      {
        "id": "ffa2bfd4-0a16-44ba-81d9-35d6a3abca68",
        "name": "Firefox",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.mozilla.org/en-US/firefox/new/",
        "relatedAppId": "firefox"
      }
    ]
  },
  {
    "id": "firefox",
    "name": "Firefox",
    "category": "Internet & Social",
    "url": "https://www.mozilla.org/en-US/firefox/new/",
    "status": "Just In Time",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg",
    "iconFallback": "FI",
    "alternatives": [
      {
        "id": "5098aa89-7434-4eb9-a47f-7941b33ee02d",
        "name": "Google Chrome",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.google.com/chrome/",
        "relatedAppId": "google-chrome"
      },
      {
        "id": "817e9af4-db09-4ae9-9265-98fcbda4b52e",
        "name": "Microsoft Edge",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.microsoft.com/en-us/edge",
        "relatedAppId": "microsoft-edge"
      }
    ]
  },
  {
    "id": "microsoft-edge",
    "name": "Microsoft Edge",
    "category": "Internet & Social",
    "url": "https://www.microsoft.com/en-us/edge",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/960px-Microsoft_Edge_logo_%282019%29.svg.png",
    "status": "Must",
    "iconFallback": "MI",
    "alternatives": [
      {
        "id": "ad41880c-5b75-4dd7-bf42-c5bf6396e404",
        "name": "Google Chrome",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.google.com/chrome/",
        "relatedAppId": "google-chrome"
      },
      {
        "id": "ace294f4-cfea-40df-b6a2-9263d8558f09",
        "name": "Firefox",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.mozilla.org/en-US/firefox/new/",
        "relatedAppId": "firefox"
      }
    ]
  },
  {
    "id": "tor-browser",
    "name": "Tor Browser",
    "category": "Internet & Social",
    "url": "https://www.torproject.org/download/",
    "status": "Just In Time",
    "iconFallback": "TO"
  },
  {
    "id": "utorrent",
    "name": "uTorrent",
    "category": "Internet & Social",
    "url": "https://www.utorrent.com/",
    "status": "Redundant",
    "iconFallback": "UT",
    "alternatives": [
      {
        "id": "55ccfbd5-87bc-41b6-b312-a7065fe860b7",
        "name": "qbittorrent",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.qbittorrent.org/",
        "relatedAppId": "3eaecea3-a0e0-457f-aaba-f93e6cb5966b"
      }
    ]
  },
  {
    "id": "teamviewer",
    "name": "TeamViewer",
    "category": "Internet & Social",
    "url": "https://www.teamviewer.com/",
    "status": "Just In Time",
    "iconFallback": "TE"
  },
  {
    "id": "forticlient-vpn",
    "name": "FortiClient VPN",
    "category": "Internet & Social",
    "url": "https://www.fortinet.com/support/product-downloads",
    "status": "Just In Time",
    "iconFallback": "FO"
  },
  {
    "id": "zoom",
    "name": "Zoom",
    "category": "Internet & Social",
    "url": "https://zoom.us/download",
    "status": "Must",
    "iconFallback": "ZO"
  },
  {
    "id": "whatsapp-desktop",
    "name": "WhatsApp Desktop",
    "category": "Internet & Social",
    "url": "https://www.whatsapp.com/download",
    "status": "Must",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    "iconFallback": "WH"
  },
  {
    "id": "winscp",
    "name": "WinSCP",
    "category": "Internet & Social",
    "url": "https://winscp.net/eng/download.php",
    "status": "Must",
    "iconFallback": "WI"
  },
  {
    "id": "emule",
    "name": "eMule",
    "category": "Internet & Social",
    "url": "https://www.emule-project.net/",
    "status": "Just In Time",
    "iconFallback": "EM"
  },
  {
    "id": "vlc-media-player",
    "name": "VLC Media Player",
    "category": "Media & Creative",
    "url": "https://www.videolan.org/vlc/",
    "status": "Must",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/e/e6/VLC_Icon.svg",
    "alternatives": [
      {
        "id": "gom-player-alt",
        "name": "GOM Player",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.gomlab.com/",
        "relatedAppId": "gom-player"
      }
    ],
    "iconFallback": "VL"
  },
  {
    "id": "audacity",
    "name": "Audacity",
    "category": "Media & Creative",
    "url": "https://www.audacityteam.org/",
    "status": "Just In Time",
    "alternatives": [
      {
        "id": "ocenaudio-alt",
        "name": "Ocenaudio",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.ocenaudio.com/",
        "relatedAppId": "ocenaudio"
      },
      {
        "id": "mp3directcut-alt",
        "name": "mp3DirectCut",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://mpesch3.de/",
        "relatedAppId": "mp3directcut"
      }
    ],
    "iconFallback": "AU"
  },
  {
    "id": "davinci-resolve",
    "name": "DaVinci Resolve",
    "category": "Media & Creative",
    "url": "https://www.blackmagicdesign.com/products/davinciresolve",
    "status": "Redundant",
    "iconFallback": "DA",
    "alternatives": [
      {
        "id": "46648054-002c-4657-95db-ff8da648957c",
        "name": "Shotcut",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.shotcut.org/",
        "relatedAppId": "shotcut"
      },
      {
        "id": "30658250-12b7-4d44-af81-579bf9abb7f8",
        "name": "CapCut",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.capcut.com/",
        "relatedAppId": "capcut"
      },
      {
        "id": "a65a75d5-9615-4363-af95-46b204397830",
        "name": "Windows Movie Maker",
        "reason": "",
        "isPreferred": false,
        "url": "https://support.microsoft.com/en-us/windows/movie-maker-is-not-available-for-download-on-windows-10-86c4767a-d0a4-37f2-1262-bbb55a0b9435",
        "relatedAppId": "windows-movie-maker"
      },
      {
        "id": "a4eb7323-0086-4a02-b0a0-d773731c8b9d",
        "name": "Lightworks",
        "reason": "",
        "isPreferred": false,
        "url": "https://lwks.com/",
        "relatedAppId": "lightworks"
      },
      {
        "id": "93ab91c9-05e6-4110-b347-d85687c13a3f",
        "name": "DVDVideoSoft Free Studio",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.dvdvideosoft.com/",
        "relatedAppId": "dvdvideosoft-free-studio"
      }
    ]
  },
  {
    "id": "shotcut",
    "name": "Shotcut",
    "category": "Media & Creative",
    "url": "https://www.shotcut.org/",
    "status": "Must",
    "alternatives": [
      {
        "id": "dvdvideosoft-free-studio-alt",
        "name": "DVDVideoSoft Free Studio",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.dvdvideosoft.com/",
        "relatedAppId": "dvdvideosoft-free-studio"
      },
      {
        "id": "windows-movie-maker-alt",
        "name": "Windows Movie Maker",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://support.microsoft.com/en-us/windows/movie-maker-is-not-available-for-download-on-windows-10-86c4767a-d0a4-37f2-1262-bbb55a0b9435",
        "relatedAppId": "windows-movie-maker"
      },
      {
        "id": "lightworks-alt",
        "name": "Lightworks",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://lwks.com/",
        "relatedAppId": "lightworks"
      },
      {
        "id": "davinci-resolve-alt",
        "name": "DaVinci Resolve",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.blackmagicdesign.com/products/davinciresolve",
        "relatedAppId": "davinci-resolve"
      },
      {
        "id": "capcut-alt",
        "name": "CapCut",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.capcut.com/",
        "relatedAppId": "capcut"
      },
      {
        "id": "1638ddf8-5997-4248-b8a4-a2106ba84b4f",
        "name": "Freemake Video Converter",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.freemake.com/free_video_converter/",
        "relatedAppId": "freemake-video-converter"
      },
      {
        "id": "c4b7319e-ac5b-4b9d-98d4-d9b38bcc5970",
        "name": "Handbrake",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://handbrake.fr/",
        "relatedAppId": "handbrake"
      },
      {
        "id": "fd3e9f3d-d43b-4526-beed-ee5b8932cbf5",
        "name": "MakeMKV",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.makemkv.com/",
        "relatedAppId": "makemkv"
      }
    ],
    "iconFallback": "SH"
  },
  {
    "id": "handbrake",
    "name": "Handbrake",
    "category": "Media & Creative",
    "url": "https://handbrake.fr/",
    "status": "Just In Time",
    "iconFallback": "HA",
    "alternatives": [
      {
        "id": "ea15b6c6-2348-4212-a09d-71a00a4e5106",
        "name": "Shotcut",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.shotcut.org/",
        "relatedAppId": "shotcut"
      },
      {
        "id": "306ab247-20e6-4dda-a630-bd8252fea805",
        "name": "Freemake Video Converter",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.freemake.com/free_video_converter/",
        "relatedAppId": "freemake-video-converter"
      }
    ]
  },
  {
    "id": "musescore",
    "name": "MuseScore",
    "category": "Media & Creative",
    "url": "https://musescore.org/",
    "status": "Just In Time",
    "iconFallback": "MU"
  },
  {
    "id": "nomacs-image-lounge",
    "name": "Nomacs Image Lounge",
    "category": "Media & Creative",
    "url": "https://nomacs.org/",
    "status": "Must",
    "description": "Features photo comparison and find duplicates.",
    "alternatives": [
      {
        "id": "imageglass-alt",
        "name": "ImageGlass",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://imageglass.org/",
        "relatedAppId": "imageglass"
      },
      {
        "id": "focuson-image-viewer-alt",
        "name": "FocusOn Image Viewer",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "http://www.pintosoft.com/en/foni",
        "relatedAppId": "focuson-image-viewer"
      },
      {
        "id": "adobe-lightroom-alt",
        "name": "Adobe Lightroom",
        "reason": "Pro Photo Manager",
        "isPreferred": false,
        "relatedAppId": "adobe-lightroom"
      },
      {
        "id": "faststone-viewer-alt",
        "name": "FastStone Viewer",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.faststone.org/",
        "relatedAppId": "faststone-viewer"
      },
      {
        "id": "83cbe4e9-f0e8-4974-a0ea-995a3435973c",
        "name": "Adobe Express Photos",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.adobe.com/express/",
        "relatedAppId": "efd6eb9a-55d8-408d-975b-0d113623c162"
      }
    ],
    "iconFallback": "NO"
  },
  {
    "id": "screenpresso",
    "name": "Screenpresso",
    "category": "Media & Creative",
    "url": "https://www.screenpresso.com/",
    "status": "Must",
    "alternatives": [
      {
        "id": "microsoft-snipping-tool-alt",
        "name": "Microsoft Snipping Tool",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://support.microsoft.com/en-us/windows/use-snipping-tool-to-capture-screenshots-00246869-1843-655f-f220-97299b865f6b",
        "relatedAppId": "microsoft-snipping-tool"
      },
      {
        "id": "b4de02e4-a5e3-49ca-ae16-b7be2a0b159c",
        "name": "Adobe Express Photos",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.adobe.com/express/",
        "relatedAppId": "efd6eb9a-55d8-408d-975b-0d113623c162"
      }
    ],
    "iconFallback": "SC"
  },
  {
    "id": "emby",
    "name": "Emby",
    "category": "Media & Creative",
    "url": "https://emby.media/download.html",
    "status": "Must",
    "iconFallback": "EM"
  },
  {
    "id": "spotify",
    "name": "Spotify",
    "category": "Media & Creative",
    "url": "https://www.spotify.com/us/download/windows/",
    "status": "Must",
    "iconFallback": "SP"
  },
  {
    "id": "gimp",
    "name": "GIMP",
    "category": "Media & Creative",
    "url": "https://www.gimp.org/",
    "status": "Just In Time",
    "alternatives": [
      {
        "id": "paint.net-alt",
        "name": "Paint.NET",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.getpaint.net/",
        "relatedAppId": "paint.net"
      },
      {
        "id": "photopea-alt",
        "name": "Photopea",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.photopea.com/",
        "relatedAppId": "photopea"
      },
      {
        "id": "pixlr-alt",
        "name": "Pixlr",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://pixlr.com/",
        "relatedAppId": "pixlr"
      },
      {
        "id": "befunky-alt",
        "name": "BeFunky",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.befunky.com/",
        "relatedAppId": "befunky"
      },
      {
        "id": "2479ee1a-d69e-402b-848d-e981bbb59a7b",
        "name": "Adobe Lightroom",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.adobe.com/products/photoshop-lightroom.html",
        "relatedAppId": "adobe-lightroom"
      }
    ],
    "iconFallback": "GI"
  },
  {
    "id": "freemake-video-converter",
    "name": "Freemake Video Converter",
    "category": "Media & Creative",
    "url": "https://www.freemake.com/free_video_converter/",
    "status": "Just In Time",
    "iconFallback": "FR",
    "alternatives": [
      {
        "id": "ef9c7e3b-9bd1-4d28-9c46-b8fa28cab340",
        "name": "Shotcut",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.shotcut.org/",
        "relatedAppId": "shotcut"
      },
      {
        "id": "d3b05243-7f82-4796-a67e-2cf6837af060",
        "name": "Handbrake",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://handbrake.fr/",
        "relatedAppId": "handbrake"
      }
    ]
  },
  {
    "id": "dvdvideosoft-youtube-downloader",
    "name": "DVDVideoSoft Youtube Downloader",
    "category": "Media & Creative",
    "url": "https://www.dvdvideosoft.com/products/dvd/Free-YouTube-Download.htm",
    "status": "Just In Time",
    "iconFallback": "DV"
  },
  {
    "id": "lame-for-audacity",
    "name": "Lame for Audacity",
    "category": "Media & Creative",
    "url": "https://lame.buanzo.org/",
    "customIcon": "https://lame.sourceforge.io/images/logo.gif",
    "status": "Just In Time",
    "iconFallback": "LA"
  },
  {
    "id": "makemkv",
    "name": "MakeMKV",
    "category": "Media & Creative",
    "url": "https://www.makemkv.com/",
    "customIcon": "https://images.icon-icons.com/1381/PNG/512/makemkv_94419.png",
    "status": "Just In Time",
    "iconFallback": "MA",
    "alternatives": [
      {
        "id": "f608617a-c3dd-46fb-bea3-1215f228366e",
        "name": "Shotcut",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.shotcut.org/",
        "relatedAppId": "shotcut"
      }
    ]
  },
  {
    "id": "mp3tag",
    "name": "MP3Tag",
    "category": "Media & Creative",
    "url": "https://www.mp3tag.de/en/",
    "status": "Just In Time",
    "iconFallback": "MP"
  },
  {
    "id": "musicbrainz-picard",
    "name": "MusicBrainz Picard",
    "category": "Media & Creative",
    "url": "https://picard.musicbrainz.org/",
    "status": "Just In Time",
    "iconFallback": "MU"
  },
  {
    "id": "songbird",
    "name": "Songbird",
    "category": "Media & Creative",
    "url": "https://sourceforge.net/projects/songbird-getsongbird/",
    "status": "Just In Time",
    "iconFallback": "SO"
  },
  {
    "id": "balenaetcher",
    "name": "BalenaEtcher",
    "category": "Utilities & System",
    "url": "https://www.balena.io/etcher/",
    "status": "Just In Time",
    "alternatives": [
      {
        "id": "windows-11-media-creation-tool-alt",
        "name": "Windows 11 Media Creation Tool",
        "reason": "For Windows installs",
        "isPreferred": false,
        "relatedAppId": "windows-11-media-creation-tool"
      }
    ],
    "iconFallback": "BA"
  },
  {
    "id": "peazip",
    "name": "PeaZip",
    "category": "Utilities & System",
    "url": "https://peazip.github.io/",
    "status": "Must",
    "alternatives": [
      {
        "id": "7-zip-alt",
        "name": "7-Zip",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.7-zip.org/",
        "relatedAppId": "7-zip"
      }
    ],
    "iconFallback": "PE"
  },
  {
    "id": "minitool-partition-wizard",
    "name": "MiniTool Partition Wizard",
    "category": "Utilities & System",
    "url": "https://www.partitionwizard.com/free-partition-manager.html",
    "status": "Just In Time",
    "iconFallback": "MI"
  },
  {
    "id": "pdf24-toolbox",
    "name": "PDF24 Toolbox",
    "category": "Utilities & System",
    "url": "https://tools.pdf24.org/en/creator",
    "status": "Must",
    "alternatives": [
      {
        "id": "pdfbinder-alt",
        "name": "PDFBinder",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://code.google.com/archive/p/pdfbinder/",
        "relatedAppId": "pdfbinder"
      }
    ],
    "iconFallback": "PD"
  },
  {
    "id": "hp-scan-and-capture",
    "name": "HP Scan and Capture",
    "category": "Utilities & System",
    "url": "https://apps.microsoft.com/store/detail/hp-scan-and-capture/9WZDNCRFHWL0",
    "customIcon": "https://images.sftcdn.net/images/t_app-icon-s/p/7a2122e6-96d2-11e6-903b-00163ed833e7/3306839134/hp-scan-and-capture-windows-10-icon.jpg",
    "status": "Must",
    "iconFallback": "HP",
    "alternatives": [
      {
        "id": "68f27c81-1a37-411f-a8d0-f02ee3b33f93",
        "name": "Scan (Microsoft scanner utility)",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://apps.microsoft.com/detail/9wzdncrfj3pv",
        "relatedAppId": "scan--microsoft-scanner-utility-"
      },
      {
        "id": "10706cb8-4103-4970-96d5-a3077ab9e4df",
        "name": "HP Smart",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.hpsmart.com/us/en",
        "relatedAppId": "hp-smart"
      }
    ]
  },
  {
    "id": "hp-smart",
    "name": "HP Smart",
    "category": "Utilities & System",
    "url": "https://www.hpsmart.com/us/en",
    "status": "Must",
    "iconFallback": "HP",
    "alternatives": [
      {
        "id": "d8c7487c-5a9b-48f0-bfe9-be960228dab4",
        "name": "HP Scan and Capture",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://apps.microsoft.com/store/detail/hp-scan-and-capture/9WZDNCRFHWL0",
        "relatedAppId": "hp-scan-and-capture"
      },
      {
        "id": "29cd5a0e-1b6a-4ca9-9ce5-2fe5e4e5bfc1",
        "name": "Scan (Microsoft scanner utility)",
        "reason": "",
        "isPreferred": false,
        "url": "https://apps.microsoft.com/detail/9wzdncrfj3pv",
        "relatedAppId": "scan--microsoft-scanner-utility-"
      }
    ]
  },
  {
    "id": "google-drive-for-desktop",
    "name": "Google Drive for Desktop",
    "category": "Utilities & System",
    "url": "https://www.google.com/drive/download/",
    "status": "Must",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
    "iconFallback": "GO"
  },
  {
    "id": "kindle-uploader",
    "name": "Kindle Uploader",
    "category": "Utilities & System",
    "url": "https://www.amazon.com/sendtokindle",
    "status": "Must",
    "iconFallback": "KI"
  },
  {
    "id": "scan--microsoft-scanner-utility-",
    "name": "Scan (Microsoft scanner utility)",
    "category": "Utilities & System",
    "url": "https://apps.microsoft.com/detail/9wzdncrfj3pv",
    "customIcon": "https://www.eightforums.com/attachments/scan-png.70389",
    "status": "Just In Time",
    "iconFallback": "SC",
    "alternatives": [
      {
        "id": "2a3672f0-c3f8-423b-a193-053d3e2d664a",
        "name": "HP Smart",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.hpsmart.com/us/en",
        "relatedAppId": "hp-smart"
      },
      {
        "id": "a9b91002-ceb3-4b94-8467-9b1a5102390b",
        "name": "HP Scan and Capture",
        "reason": "",
        "isPreferred": true,
        "url": "https://apps.microsoft.com/store/detail/hp-scan-and-capture/9WZDNCRFHWL0",
        "relatedAppId": "hp-scan-and-capture"
      }
    ]
  },
  {
    "id": "burnaware-free",
    "name": "Burnaware Free",
    "category": "Utilities & System",
    "url": "https://www.burnaware.com/",
    "status": "Redundant",
    "recommendation": "Use built-in Windows burning",
    "iconFallback": "BU"
  },
  {
    "id": "k-lite-codec-pack",
    "name": "K-Lite Codec Pack",
    "category": "Utilities & System",
    "url": "https://codecguide.com/download_kl.htm",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Media_Player_Classic_logo.png/640px-Media_Player_Classic_logo.png",
    "status": "Just In Time",
    "iconFallback": "K-"
  },
  {
    "id": "wx360",
    "name": "wx360",
    "category": "Utilities & System",
    "url": "https://digiex.net/threads/wx360-xbox-360-iso-extractor.18664/",
    "status": "Just In Time",
    "iconFallback": "WX"
  },
  {
    "id": "xbox360-iso-extract",
    "name": "XBOX360 ISO Extract",
    "category": "Utilities & System",
    "url": "https://digiex.net/threads/xbox-360-iso-extract-utility.9704/",
    "status": "Just In Time",
    "iconFallback": "XB"
  },
  {
    "id": "acrobat-reader",
    "name": "Acrobat Reader",
    "category": "Office & Productivity",
    "url": "https://get.adobe.com/reader/",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/6/60/Adobe_Acrobat_Reader_icon_%282020%29.svg",
    "status": "Must",
    "iconFallback": "AC"
  },
  {
    "id": "calibre",
    "name": "Calibre",
    "category": "Office & Productivity",
    "url": "https://calibre-ebook.com/download",
    "status": "Must",
    "iconFallback": "CA"
  },
  {
    "id": "office-365",
    "name": "Office 365",
    "category": "Office & Productivity",
    "url": "https://www.office.com/",
    "status": "Just In Time",
    "iconFallback": "OF",
    "alternatives": [
      {
        "id": "5851a714-8b8f-459f-bf9f-4fcdc8f230dd",
        "name": "ONLYOFFICE",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.onlyoffice.com/",
        "relatedAppId": "6cadb070-5804-4224-bb4e-4c61563c433d"
      }
    ]
  },
  {
    "id": "steam",
    "name": "Steam",
    "category": "Games & Fun",
    "url": "https://store.steampowered.com/",
    "status": "Just In Time",
    "iconFallback": "ST"
  },
  {
    "id": "google-antigravity",
    "name": "Google Antigravity",
    "category": "Games & Fun",
    "url": "https://antigravity.google/",
    "status": "Must",
    "customIcon": "https://files.brandlogos.net/svg/HNipmYPqfV/Google_Antigravity-logo_brandlogos.net_e23c83.svg",
    "iconFallback": "GO",
    "alternatives": [
      {
        "id": "a2d7cef4-4251-4982-9955-d3c1b5a8a02c",
        "name": "PyCharm",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.jetbrains.com/pycharm/",
        "relatedAppId": "pycharm"
      },
      {
        "id": "fcc9c993-c151-4bab-8423-a0299e91e65c",
        "name": "Visual Studio Code",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://code.visualstudio.com/",
        "relatedAppId": "visual-studio-code"
      },
      {
        "id": "1f61d471-8deb-48f9-86ac-560c88eca04d",
        "name": "Eclipse IDE for Java Developers",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.eclipse.org/downloads/",
        "relatedAppId": "eclipse-ide-for-java-developers"
      }
    ]
  },
  {
    "id": "kodu-game-lab",
    "name": "Kodu Game Lab",
    "category": "Games & Fun",
    "url": "https://www.kodugamelab.com/",
    "status": "Just In Time",
    "customIcon": "https://www.kodugamelab.com/images/Kodu.png",
    "iconFallback": "KO"
  },
  {
    "id": "google-colab",
    "name": "Google Colab",
    "category": "Development",
    "url": "https://colab.research.google.com/",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Colab_pic.png/640px-Google_Colab_pic.png",
    "status": "Just In Time",
    "iconFallback": "GO",
    "alternatives": [
      {
        "id": "fb8743a1-abc3-4742-8c73-dc72906a5452",
        "name": "PyCharm",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.jetbrains.com/pycharm/",
        "relatedAppId": "pycharm"
      },
      {
        "id": "81fa0429-baaa-4816-b927-86172eafd11d",
        "name": "Jupyter",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://jupyter.org/",
        "relatedAppId": "jupyter"
      }
    ]
  },
  {
    "id": "jupyter",
    "name": "Jupyter",
    "category": "Development",
    "url": "https://jupyter.org/",
    "status": "Just In Time",
    "iconFallback": "JU",
    "alternatives": [
      {
        "id": "36942fdd-2294-4a2d-9a9d-a647300bcfe9",
        "name": "PyCharm",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.jetbrains.com/pycharm/",
        "relatedAppId": "pycharm"
      },
      {
        "id": "391b8557-e764-4692-bcab-01b58ca8e047",
        "name": "Google Colab",
        "reason": "",
        "isPreferred": false,
        "url": "https://colab.research.google.com/",
        "relatedAppId": "google-colab"
      }
    ]
  },
  {
    "id": "codepen",
    "name": "Codepen",
    "category": "Development",
    "url": "https://codepen.io/",
    "status": "Just In Time",
    "iconFallback": "CO",
    "alternatives": [
      {
        "id": "31ef3b81-beec-4be3-a1b4-2d8d28303843",
        "name": "JetBrains WebStorm",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.jetbrains.com/webstorm/",
        "relatedAppId": "jetbrains-webstorm"
      }
    ]
  },
  {
    "id": "notepad--",
    "name": "Notepad++",
    "category": "Development",
    "url": "https://notepad-plus-plus.org/",
    "status": "Redundant",
    "iconFallback": "NO",
    "alternatives": [
      {
        "id": "1b2b8334-d7e8-4761-835c-9228dec5d879",
        "name": "Sublime Text 3",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.sublimetext.com/3",
        "relatedAppId": "sublime-text-3"
      },
      {
        "id": "bded96fb-a1dd-47c2-b201-f8727876f810",
        "name": "Pulsar Edit",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://pulsar-edit.dev/",
        "relatedAppId": "pulsar-edit"
      },
      {
        "id": "8a801671-dfdd-489b-992d-316570af4ca0",
        "name": "Atom",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://github.com/atom/atom",
        "relatedAppId": "atom"
      },
      {
        "id": "c13fa6ec-69c7-4069-b666-7820258bd6a5",
        "name": "Kate",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://kate-editor.org/",
        "relatedAppId": "kate"
      },
      {
        "id": "b617e907-97bf-4bc0-a68e-47d3eedf49da",
        "name": "PSPad",
        "reason": "",
        "isPreferred": false,
        "url": "http://www.pspad.com/",
        "relatedAppId": "pspad"
      }
    ]
  },
  {
    "id": "pspad",
    "name": "PSPad",
    "category": "Development",
    "url": "http://www.pspad.com/",
    "status": "Redundant",
    "iconFallback": "PS",
    "alternatives": [
      {
        "id": "a3e5e69f-c500-447a-a1d9-3538d39feb32",
        "name": "Sublime Text 3",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.sublimetext.com/3",
        "relatedAppId": "sublime-text-3"
      },
      {
        "id": "0605d164-0de1-4a53-9c6a-276ac9c964df",
        "name": "Pulsar Edit",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://pulsar-edit.dev/",
        "relatedAppId": "pulsar-edit"
      },
      {
        "id": "58a09afd-1b69-4dbf-8990-c8aafee0aa89",
        "name": "Atom",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://github.com/atom/atom",
        "relatedAppId": "atom"
      },
      {
        "id": "1a874d7c-33de-4b92-a41b-159b44afb453",
        "name": "Kate",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://kate-editor.org/",
        "relatedAppId": "kate"
      },
      {
        "id": "908b4015-7a29-49aa-a83d-3b5ef1df8ce5",
        "name": "Notepad++",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://notepad-plus-plus.org/",
        "relatedAppId": "notepad--"
      }
    ]
  },
  {
    "id": "atom",
    "name": "Atom",
    "category": "Development",
    "url": "https://github.com/atom/atom",
    "customIcon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Atom-Icon_16.png/640px-Atom-Icon_16.png",
    "status": "Redundant",
    "iconFallback": "AT",
    "alternatives": [
      {
        "id": "38f5c4eb-dfe6-41cc-be84-6f056c7050b6",
        "name": "Pulsar Edit",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://pulsar-edit.dev/",
        "relatedAppId": "pulsar-edit"
      },
      {
        "id": "e04be9a4-0603-49a7-9705-f890c9237aeb",
        "name": "Notepad++",
        "reason": "",
        "isPreferred": false,
        "url": "https://notepad-plus-plus.org/",
        "relatedAppId": "notepad--"
      },
      {
        "id": "9cc48b95-9734-4062-b302-f1b767476a97",
        "name": "PSPad",
        "reason": "",
        "isPreferred": false,
        "url": "http://www.pspad.com/",
        "relatedAppId": "pspad"
      },
      {
        "id": "465ab1eb-e911-4cf3-b57b-a4ad246c6555",
        "name": "Kate",
        "reason": "",
        "isPreferred": false,
        "url": "https://kate-editor.org/",
        "relatedAppId": "kate"
      },
      {
        "id": "d85edd37-e038-44f1-af84-9a136e369c1a",
        "name": "Sublime Text 3",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.sublimetext.com/3",
        "relatedAppId": "sublime-text-3"
      }
    ]
  },
  {
    "id": "kate",
    "name": "Kate",
    "category": "Development",
    "url": "https://kate-editor.org/",
    "status": "Redundant",
    "iconFallback": "KA",
    "alternatives": [
      {
        "id": "77158ce1-2d74-4e83-b69f-ef339d834048",
        "name": "Sublime Text 3",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.sublimetext.com/3",
        "relatedAppId": "sublime-text-3"
      },
      {
        "id": "02b48cdb-e0b1-4772-936e-152975c0a5c2",
        "name": "Pulsar Edit",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://pulsar-edit.dev/",
        "relatedAppId": "pulsar-edit"
      },
      {
        "id": "004bae26-4fc1-4c85-b1da-e7d4553bcf23",
        "name": "Atom",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://github.com/atom/atom",
        "relatedAppId": "atom"
      },
      {
        "id": "ccea1454-b1d4-4667-ae7b-83c1f2eb1d32",
        "name": "PSPad",
        "reason": "",
        "isPreferred": false,
        "url": "http://www.pspad.com/",
        "relatedAppId": "pspad"
      },
      {
        "id": "55024927-b07d-46c9-8637-95501fbc027e",
        "name": "Notepad++",
        "reason": "",
        "isPreferred": false,
        "url": "https://notepad-plus-plus.org/",
        "relatedAppId": "notepad--"
      }
    ]
  },
  {
    "id": "pulsar-edit",
    "name": "Pulsar Edit",
    "category": "Development",
    "url": "https://pulsar-edit.dev/",
    "status": "Just In Time",
    "iconFallback": "PU",
    "alternatives": [
      {
        "id": "83c90852-4aef-405b-a207-a54bf14f2ea4",
        "name": "Sublime Text 3",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.sublimetext.com/3",
        "relatedAppId": "sublime-text-3"
      },
      {
        "id": "5c8c40dd-c350-41e3-81aa-7041bd45bba6",
        "name": "PSPad",
        "reason": "",
        "isPreferred": false,
        "url": "http://www.pspad.com/",
        "relatedAppId": "pspad"
      },
      {
        "id": "c86e2cde-3b95-473c-81e0-df1ce4c20149",
        "name": "Kate",
        "reason": "",
        "isPreferred": false,
        "url": "https://kate-editor.org/",
        "relatedAppId": "kate"
      },
      {
        "id": "6e26a542-263e-441f-b070-f03a426639cc",
        "name": "Atom",
        "reason": "",
        "isPreferred": false,
        "url": "https://github.com/atom/atom",
        "relatedAppId": "atom"
      },
      {
        "id": "104b14de-8fc8-41c7-8dce-19014daee5c8",
        "name": "Notepad++",
        "reason": "",
        "isPreferred": false,
        "url": "https://notepad-plus-plus.org/",
        "relatedAppId": "notepad--"
      },
      {
        "id": "979acb0c-4237-4f89-95a3-55cba0c4e0c7",
        "name": "Windows Notepad",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://apps.microsoft.com/detail/9msmlrh6lzf3?hl=en-US&gl=IL",
        "relatedAppId": "8d04d83c-c252-4f88-918d-94f8ef8470f4"
      }
    ]
  },
  {
    "id": "console",
    "name": "Console",
    "category": "Development",
    "url": "https://sourceforge.net/projects/console/",
    "status": "Redundant",
    "iconFallback": "CO",
    "alternatives": [
      {
        "id": "693a34d3-24cc-44ef-9b30-04a84fbd6c3c",
        "name": "Windows Terminal",
        "reason": "",
        "isPreferred": false,
        "url": "https://github.com/microsoft/terminal",
        "relatedAppId": "windows-terminal"
      },
      {
        "id": "29d717a0-c74a-4d37-8da8-f9567e4e5d27",
        "name": "Warp",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.warp.dev/",
        "relatedAppId": "warp"
      }
    ]
  },
  {
    "id": "gom-player",
    "name": "GOM Player",
    "category": "Media & Creative",
    "url": "https://www.gomlab.com/",
    "status": "Redundant",
    "iconFallback": "GO",
    "alternatives": [
      {
        "id": "628baf88-5560-404d-94ee-6cdefcf28578",
        "name": "VLC Media Player",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.videolan.org/vlc/",
        "relatedAppId": "vlc-media-player"
      }
    ]
  },
  {
    "id": "ocenaudio",
    "name": "Ocenaudio",
    "category": "Media & Creative",
    "url": "https://www.ocenaudio.com/",
    "status": "Just In Time",
    "iconFallback": "OC",
    "alternatives": [
      {
        "id": "7cb80aec-33f4-45e0-b266-d34efca3de5b",
        "name": "mp3DirectCut",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://mpesch3.de/",
        "relatedAppId": "mp3directcut"
      },
      {
        "id": "22aff68b-c11a-41f8-8231-699987b3507f",
        "name": "Audacity",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.audacityteam.org/",
        "relatedAppId": "audacity"
      }
    ]
  },
  {
    "id": "mp3directcut",
    "name": "mp3DirectCut",
    "category": "Media & Creative",
    "url": "https://mpesch3.de/",
    "status": "Just In Time",
    "iconFallback": "MP",
    "alternatives": [
      {
        "id": "6db358e7-3a1f-4f9c-9307-223bdb9c0b23",
        "name": "Ocenaudio",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.ocenaudio.com/",
        "relatedAppId": "ocenaudio"
      },
      {
        "id": "f03910a0-7e6c-42de-94fa-d43185da4eb7",
        "name": "Audacity",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.audacityteam.org/",
        "relatedAppId": "audacity"
      }
    ]
  },
  {
    "id": "dvdvideosoft-free-studio",
    "name": "DVDVideoSoft Free Studio",
    "category": "Media & Creative",
    "url": "https://www.dvdvideosoft.com/",
    "status": "Redundant",
    "iconFallback": "DV",
    "alternatives": [
      {
        "id": "c6b4f270-8a24-4bbe-a396-99aba3dabdd5",
        "name": "CapCut",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.capcut.com/",
        "relatedAppId": "capcut"
      },
      {
        "id": "b76dce85-5cab-401b-b87d-a5fd8918963d",
        "name": "DaVinci Resolve",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.blackmagicdesign.com/products/davinciresolve",
        "relatedAppId": "davinci-resolve"
      },
      {
        "id": "f0928bc6-9133-4ed4-8b94-569bdb85e3eb",
        "name": "Lightworks",
        "reason": "",
        "isPreferred": false,
        "url": "https://lwks.com/",
        "relatedAppId": "lightworks"
      },
      {
        "id": "b74dade8-490d-4fa2-b657-058588a359fd",
        "name": "Shotcut",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.shotcut.org/",
        "relatedAppId": "shotcut"
      },
      {
        "id": "f8dd1908-c185-40d7-9d59-0c18fe7702f0",
        "name": "Windows Movie Maker",
        "reason": "",
        "isPreferred": false,
        "url": "https://support.microsoft.com/en-us/windows/movie-maker-is-not-available-for-download-on-windows-10-86c4767a-d0a4-37f2-1262-bbb55a0b9435",
        "relatedAppId": "windows-movie-maker"
      }
    ]
  },
  {
    "id": "windows-movie-maker",
    "name": "Windows Movie Maker",
    "category": "Media & Creative",
    "url": "https://support.microsoft.com/en-us/windows/movie-maker-is-not-available-for-download-on-windows-10-86c4767a-d0a4-37f2-1262-bbb55a0b9435",
    "customIcon": "https://img.utdstc.com/icon/31e/5e7/31e5e7ca299d2f3216a6c03ccc0d82e319b44979329f42657b79e687137249c7:200",
    "status": "Redundant",
    "iconFallback": "WI",
    "alternatives": [
      {
        "id": "117259c9-1c2f-4e1f-a68b-e8cf5fca4bf8",
        "name": "CapCut",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.capcut.com/",
        "relatedAppId": "capcut"
      },
      {
        "id": "64c87b8d-f37b-4183-875f-1a982e1e9d76",
        "name": "DaVinci Resolve",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.blackmagicdesign.com/products/davinciresolve",
        "relatedAppId": "davinci-resolve"
      },
      {
        "id": "40dfbbba-8f64-44e2-8d0d-468ad1048cf7",
        "name": "DVDVideoSoft Free Studio",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.dvdvideosoft.com/",
        "relatedAppId": "dvdvideosoft-free-studio"
      },
      {
        "id": "8cdbdb79-bae7-4711-a2dd-f92d12cdda24",
        "name": "Shotcut",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.shotcut.org/",
        "relatedAppId": "shotcut"
      },
      {
        "id": "475529ea-d9bf-4672-9eb9-ed290a16ea72",
        "name": "Lightworks",
        "reason": "",
        "isPreferred": false,
        "url": "https://lwks.com/",
        "relatedAppId": "lightworks"
      }
    ]
  },
  {
    "id": "lightworks",
    "name": "Lightworks",
    "category": "Media & Creative",
    "url": "https://lwks.com/",
    "status": "Just In Time",
    "iconFallback": "LI",
    "alternatives": [
      {
        "id": "02ba3135-ab65-4c4b-97f3-47d1a0fdf912",
        "name": "Shotcut",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.shotcut.org/",
        "relatedAppId": "shotcut"
      },
      {
        "id": "44138bc9-0378-4fe5-bbdd-a90183c4fd10",
        "name": "CapCut",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.capcut.com/",
        "relatedAppId": "capcut"
      },
      {
        "id": "821c2185-0295-44ae-bd43-21828a523914",
        "name": "DaVinci Resolve",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.blackmagicdesign.com/products/davinciresolve",
        "relatedAppId": "davinci-resolve"
      },
      {
        "id": "ffcd0b2d-d17d-4097-8621-a85e510b5602",
        "name": "DVDVideoSoft Free Studio",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.dvdvideosoft.com/",
        "relatedAppId": "dvdvideosoft-free-studio"
      },
      {
        "id": "49d7fb91-c6c1-47aa-905b-e0a3fc5a4d13",
        "name": "Windows Movie Maker",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://support.microsoft.com/en-us/windows/movie-maker-is-not-available-for-download-on-windows-10-86c4767a-d0a4-37f2-1262-bbb55a0b9435",
        "relatedAppId": "windows-movie-maker"
      }
    ]
  },
  {
    "id": "capcut",
    "name": "CapCut",
    "category": "Media & Creative",
    "url": "https://www.capcut.com/",
    "status": "Redundant",
    "iconFallback": "CA",
    "alternatives": [
      {
        "id": "7816de2c-6b85-4bf1-b14f-ed76a9a8e6e3",
        "name": "Shotcut",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.shotcut.org/",
        "relatedAppId": "shotcut"
      },
      {
        "id": "071c9146-4868-4550-b2fe-dc6d5ba90471",
        "name": "DaVinci Resolve",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.blackmagicdesign.com/products/davinciresolve",
        "relatedAppId": "davinci-resolve"
      },
      {
        "id": "11156c0b-21cd-4f9c-9885-a9dc2230ab9f",
        "name": "DVDVideoSoft Free Studio",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.dvdvideosoft.com/",
        "relatedAppId": "dvdvideosoft-free-studio"
      },
      {
        "id": "7dd3f2b0-1680-4db3-8abf-5ba4679dbc7b",
        "name": "Lightworks",
        "reason": "",
        "isPreferred": false,
        "url": "https://lwks.com/",
        "relatedAppId": "lightworks"
      },
      {
        "id": "aef6139f-6a64-4628-a24a-17f9a9c64eeb",
        "name": "Windows Movie Maker",
        "reason": "",
        "isPreferred": false,
        "url": "https://support.microsoft.com/en-us/windows/movie-maker-is-not-available-for-download-on-windows-10-86c4767a-d0a4-37f2-1262-bbb55a0b9435",
        "relatedAppId": "windows-movie-maker"
      }
    ]
  },
  {
    "id": "imageglass",
    "name": "ImageGlass",
    "category": "Media & Creative",
    "url": "https://imageglass.org/",
    "status": "Redundant",
    "iconFallback": "IM",
    "alternatives": [
      {
        "id": "f91bbcf4-309e-4876-b004-35f622467c60",
        "name": "Nomacs Image Lounge",
        "reason": "",
        "isPreferred": true,
        "url": "https://nomacs.org/",
        "relatedAppId": "nomacs-image-lounge"
      },
      {
        "id": "4535bda1-34ef-4381-bf65-4cdc4f889e3e",
        "name": "FastStone Viewer",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.faststone.org/",
        "relatedAppId": "faststone-viewer"
      },
      {
        "id": "4c67cbd4-b4a2-4e8b-ac01-356f159c999f",
        "name": "FocusOn Image Viewer",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "http://www.pintosoft.com/en/foni",
        "relatedAppId": "focuson-image-viewer"
      },
      {
        "id": "81260549-affb-48c6-9179-a8a4f6ad173a",
        "name": "Adobe Lightroom",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.adobe.com/products/photoshop-lightroom.html",
        "relatedAppId": "adobe-lightroom"
      }
    ]
  },
  {
    "id": "focuson-image-viewer",
    "name": "FocusOn Image Viewer",
    "category": "Media & Creative",
    "url": "http://www.pintosoft.com/en/foni",
    "status": "Redundant",
    "iconFallback": "FO",
    "alternatives": [
      {
        "id": "b457b34d-3b24-4da8-9958-9ee323a3a9d5",
        "name": "Nomacs Image Lounge",
        "reason": "",
        "isPreferred": true,
        "url": "https://nomacs.org/",
        "relatedAppId": "nomacs-image-lounge"
      },
      {
        "id": "434e8bea-a78e-4b55-ab26-d9bd0b46c3f4",
        "name": "FastStone Viewer",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.faststone.org/",
        "relatedAppId": "faststone-viewer"
      },
      {
        "id": "ffc300c4-6653-4947-b6dd-f7d6d2a28ab1",
        "name": "ImageGlass",
        "reason": "",
        "isPreferred": false,
        "url": "https://imageglass.org/",
        "relatedAppId": "imageglass"
      },
      {
        "id": "2ff616d1-a3fa-48bb-a77a-bcb32969f135",
        "name": "Adobe Lightroom",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.adobe.com/products/photoshop-lightroom.html",
        "relatedAppId": "adobe-lightroom"
      }
    ]
  },
  {
    "id": "adobe-lightroom",
    "name": "Adobe Lightroom",
    "category": "Media & Creative",
    "url": "https://www.adobe.com/products/photoshop-lightroom.html",
    "status": "Redundant",
    "iconFallback": "AD",
    "alternatives": [
      {
        "id": "67138831-e990-43ee-b7c3-c9768f5d9fe1",
        "name": "GIMP",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.gimp.org/",
        "relatedAppId": "gimp"
      },
      {
        "id": "15d263af-c204-4c0e-9b2c-bd970d5fb8ff",
        "name": "BeFunky",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.befunky.com/",
        "relatedAppId": "befunky"
      },
      {
        "id": "37d80d3b-b4a3-4b95-af9a-940be3a4f1df",
        "name": "FastStone Viewer",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.faststone.org/",
        "relatedAppId": "faststone-viewer"
      },
      {
        "id": "c847fbd9-af4c-4b21-b65b-cc4a9feceba0",
        "name": "FocusOn Image Viewer",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "http://www.pintosoft.com/en/foni",
        "relatedAppId": "focuson-image-viewer"
      },
      {
        "id": "994d96c2-e700-463c-93d9-9630a453aef5",
        "name": "ImageGlass",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://imageglass.org/",
        "relatedAppId": "imageglass"
      }
    ]
  },
  {
    "id": "faststone-viewer",
    "name": "FastStone Viewer",
    "category": "Media & Creative",
    "url": "https://www.faststone.org/",
    "status": "Redundant",
    "iconFallback": "FA",
    "alternatives": [
      {
        "id": "537d7a53-3b7f-46a0-b4ce-60e0f96b6de7",
        "name": "Nomacs Image Lounge",
        "reason": "",
        "isPreferred": true,
        "url": "https://nomacs.org/",
        "relatedAppId": "nomacs-image-lounge"
      },
      {
        "id": "8c9285dd-d615-4110-b23e-8685ad051835",
        "name": "ImageGlass",
        "reason": "",
        "isPreferred": false,
        "url": "https://imageglass.org/",
        "relatedAppId": "imageglass"
      },
      {
        "id": "f98e4491-0fac-4158-b351-f289868b34f2",
        "name": "FocusOn Image Viewer",
        "reason": "",
        "isPreferred": false,
        "url": "http://www.pintosoft.com/en/foni",
        "relatedAppId": "focuson-image-viewer"
      },
      {
        "id": "0f30eb9b-2131-4a15-90ec-90ec31c26c47",
        "name": "Adobe Lightroom",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.adobe.com/products/photoshop-lightroom.html",
        "relatedAppId": "adobe-lightroom"
      }
    ]
  },
  {
    "id": "microsoft-snipping-tool",
    "name": "Microsoft Snipping Tool",
    "category": "Utilities & System",
    "url": "https://support.microsoft.com/en-us/windows/use-snipping-tool-to-capture-screenshots-00246869-1843-655f-f220-97299b865f6b",
    "customIcon": "https://static.wikia.nocookie.net/logopedia/images/a/a3/Win-SnippingTool.png",
    "status": "Must",
    "iconFallback": "MI",
    "alternatives": [
      {
        "id": "4429d340-f64e-480a-bdee-37206bfd247f",
        "name": "Screenpresso",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.screenpresso.com/",
        "relatedAppId": "screenpresso"
      }
    ]
  },
  {
    "id": "paint.net",
    "name": "Paint.NET",
    "category": "Media & Creative",
    "url": "https://www.getpaint.net/",
    "status": "Redundant",
    "iconFallback": "PA",
    "alternatives": [
      {
        "id": "6f4b2f5b-a95f-4e31-8b73-1be2415f4f95",
        "name": "GIMP",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.gimp.org/",
        "relatedAppId": "gimp"
      },
      {
        "id": "2f042264-b2ea-4152-b73a-a4000157708e",
        "name": "BeFunky",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.befunky.com/",
        "relatedAppId": "befunky"
      },
      {
        "id": "d7aae599-d0a7-4386-9447-29fbdc70910e",
        "name": "Photopea",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.photopea.com/",
        "relatedAppId": "photopea"
      },
      {
        "id": "f646894c-201b-4357-82dd-32e69b7753f2",
        "name": "Pixlr",
        "reason": "",
        "isPreferred": false,
        "url": "https://pixlr.com/",
        "relatedAppId": "pixlr"
      }
    ]
  },
  {
    "id": "photopea",
    "name": "Photopea",
    "category": "Media & Creative",
    "url": "https://www.photopea.com/",
    "status": "Redundant",
    "iconFallback": "PH",
    "alternatives": [
      {
        "id": "16fc2199-2fa8-4731-9d35-e05e594975f8",
        "name": "GIMP",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.gimp.org/",
        "relatedAppId": "gimp"
      },
      {
        "id": "0a797222-b59c-4c4a-ace1-00e6c81778af",
        "name": "BeFunky",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.befunky.com/",
        "relatedAppId": "befunky"
      },
      {
        "id": "8cc6439b-c608-4ae1-a901-6833a1ea4428",
        "name": "Paint.NET",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.getpaint.net/",
        "relatedAppId": "paint.net"
      },
      {
        "id": "e6b9a6ab-213b-480b-b12a-a5fb6edf2215",
        "name": "Pixlr",
        "reason": "",
        "isPreferred": false,
        "url": "https://pixlr.com/",
        "relatedAppId": "pixlr"
      }
    ]
  },
  {
    "id": "pixlr",
    "name": "Pixlr",
    "category": "Media & Creative",
    "url": "https://pixlr.com/",
    "status": "Redundant",
    "iconFallback": "PI",
    "alternatives": [
      {
        "id": "de31eb76-a457-4b25-b86f-dea73e0328e8",
        "name": "GIMP",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.gimp.org/",
        "relatedAppId": "gimp"
      },
      {
        "id": "b9c77eac-956f-4cef-8eb6-2cee14fcb977",
        "name": "BeFunky",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.befunky.com/",
        "relatedAppId": "befunky"
      },
      {
        "id": "1e71e2ed-a887-463e-bea5-4f02a2d330e5",
        "name": "Paint.NET",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.getpaint.net/",
        "relatedAppId": "paint.net"
      },
      {
        "id": "4368fe5b-5a7c-48f9-ae23-7b189b58699f",
        "name": "Photopea",
        "reason": "Reciprocal alternative",
        "isPreferred": false,
        "url": "https://www.photopea.com/",
        "relatedAppId": "photopea"
      }
    ]
  },
  {
    "id": "befunky",
    "name": "BeFunky",
    "category": "Media & Creative",
    "url": "https://www.befunky.com/",
    "status": "Redundant",
    "iconFallback": "BE",
    "alternatives": [
      {
        "id": "c683c5c3-136e-426b-86c6-64da96a39a23",
        "name": "GIMP",
        "reason": "",
        "isPreferred": true,
        "url": "https://www.gimp.org/",
        "relatedAppId": "gimp"
      },
      {
        "id": "9f82bd13-b009-47cb-8ff4-2ed2df6ea7aa",
        "name": "Pixlr",
        "reason": "",
        "isPreferred": false,
        "url": "https://pixlr.com/",
        "relatedAppId": "pixlr"
      },
      {
        "id": "56541775-2415-4a92-bf02-2762b16e38fa",
        "name": "Photopea",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.photopea.com/",
        "relatedAppId": "photopea"
      },
      {
        "id": "86984741-676d-4881-afe4-d9a8ba949d28",
        "name": "Adobe Lightroom",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.adobe.com/products/photoshop-lightroom.html",
        "relatedAppId": "adobe-lightroom"
      },
      {
        "id": "de2a10dc-e301-400c-8269-c4fd1c1cf538",
        "name": "Paint.NET",
        "reason": "",
        "isPreferred": false,
        "url": "https://www.getpaint.net/",
        "relatedAppId": "paint.net"
      }
    ]
  },
  {
    "id": "windows-11-media-creation-tool",
    "name": "Windows 11 Media Creation Tool",
    "category": "Utilities & System",
    "url": "https://www.microsoft.com/software-download/windows11",
    "status": "Just In Time",
    "iconFallback": "WI"
  },
  {
    "id": "7-zip",
    "name": "7-Zip",
    "category": "Utilities & System",
    "url": "https://www.7-zip.org/",
    "status": "Redundant",
    "iconFallback": "7-",
    "alternatives": [
      {
        "id": "56d707fc-37af-4188-bc39-e7e38cedc28b",
        "name": "PeaZip",
        "reason": "",
        "isPreferred": true,
        "url": "https://peazip.github.io/",
        "relatedAppId": "peazip"
      }
    ]
  },
  {
    "id": "pdfbinder",
    "name": "PDFBinder",
    "category": "Utilities & System",
    "url": "https://code.google.com/archive/p/pdfbinder/",
    "customIcon": "https://img.apponic.com/56/92/b87eebbe1c170667aaf1b1163e85a398.png",
    "status": "Redundant",
    "iconFallback": "PD",
    "alternatives": [
      {
        "id": "8670a9b5-9b7f-434c-aa50-777686762c56",
        "name": "PDF24 Toolbox",
        "reason": "",
        "isPreferred": true,
        "url": "https://tools.pdf24.org/en/creator",
        "relatedAppId": "pdf24-toolbox"
      }
    ]
  }
]