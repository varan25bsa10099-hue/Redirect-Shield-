chrome.tabs.onCreated.addListener((tab) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(activeTabs) {
        let currentTab = activeTabs[0];
        if (tab.openerTabId && !tab.active) {
            console.log(`Detected background tab creation from tab ${tab.openerTabId}.`);
        }
    });
});

// Fixed navigation interceptor with a safety check
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    // Check if transitionQualifiers exists BEFORE checking if it includes the redirect flag
    if (details.frameId !== 0 && 
        details.transitionQualifiers && 
        details.transitionQualifiers.includes("server_redirect")) {
        console.log("Blocked a rogue frame redirect:", details.url);
    }
});