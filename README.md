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

## 💾 How to Install and Run Instantly

1. **Download the Extension:** Go to the [Releases](https:/varan25bsa10099-hue/github.com//Redirect-Shield/releases) section on the right side of this page and download the **`Redirect-Shield.zip`** file.
2. **Unpack the Archive:** Extract/unzip the downloaded folder anywhere on your computer.
3. **Open Browser Settings:** Open Google Chrome or Brave and navigate to the address: `chrome://extensions/`
4. **Activate Developer Configuration:** Turn on the **Developer mode** toggle switch located in the upper-right corner.
5. **Mount the Directory:** Click the **Load unpacked** button in the top-left menu, select the extracted folder, and click **Select Folder**.
