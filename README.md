# Redirect Shield 🛡️

A lightweight, high-performance Chromium browser extension (Manifest V3) designed to block aggressive ad transitions, forced background "tab-under" redirects, and malicious automatic window spawning.

## 🚀 Key Features
- **API Interception:** Overrides native execution hooks like `window.open` to block automated, non-user-initiated popup scripts.
- **Click-Capturing Engine:** Intercepts DOM click events using event capturing to analyze and drop tracking/ad transitions before navigation triggers.
- **Asynchronous Domain Metrics:** Tracks and maintains localized real-time blocking statistics per domain using the `chrome.storage` API.
- **Micro-UI Popup:** Built with a clean, responsive HTML/CSS popup interface to review shielding activity on active tabs at a glance.

## 🛠️ Technical Stack & Architecture
- **Manifest V3 Specification**
- **Vanilla JavaScript (ES6+):** Injected Content Scripts & Asynchronous Background Service Workers.
- **HTML5 & CSS3:** For the extension popup interface.
- **Chrome/Brave Extension APIs:** `chrome.tabs`, `chrome.webNavigation`, `chrome.storage.local`.

---

## 💾 How to Install Locally

Because this extension is built for development, you can load it directly into any Chromium browser (Brave, Google Chrome, Edge, Opera) using these steps:

1. Click the green **Code** button at the top right of this page and select **Download ZIP**.
2. Extract the downloaded `.zip` folder to a convenient directory on your machine.
3. Open your browser and navigate to the Extensions management page:
   - For Chrome/Brave: Type `chrome://extensions/` in the URL address bar and hit Enter.
4. Locate the **Developer mode** toggle switch in the upper-right corner and turn it **ON**.
5. Click the **Load unpacked** button in the top-left menu.
6. Browse your files, select the extracted folder (containing `manifest.json`), and click **Select Folder**.
7. *(Optional)* Click the puzzle piece icon (🧩) on your browser toolbar and pin **Redirect Shield** for quick access to the UI!
