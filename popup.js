document.addEventListener('DOMContentLoaded', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.url) return;

    try {
        const urlObj = new URL(tab.url);
        const domain = urlObj.hostname;

        chrome.storage.local.get([domain], (result) => {
            const count = result[domain] || 0;
            document.getElementById('block-count').textContent = count;
        });
    } catch (e) {
        console.error("Cannot run extension tracker on this page protocol.");
    }
});