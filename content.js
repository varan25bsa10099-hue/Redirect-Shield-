// Function to save block count data
function reportBlockedRedirect() {
    const domain = window.location.hostname;
    chrome.storage.local.get([domain], (result) => {
        let currentCount = result[domain] || 0;
        let updatedData = {};
        updatedData[domain] = currentCount + 1;
        chrome.storage.local.set(updatedData);
    });
}

// 1. STRATEGY ONE: Stop automatic scripts (Our existing code)
const originalWindowOpen = window.open;
window.open = function(url, name, specs) {
    if (!navigator.userActivation.isActive) {
        console.log("Redirect Shield blocked an automatic script popup!");
        reportBlockedRedirect(); 
        return null; 
    }
    return originalWindowOpen(url, name, specs);
};

// 2. STRATEGY TWO: Catch physical mouse clicks on sketchy links/ads
document.addEventListener('click', function(event) {
    // Find if the clicked element is a link (anchor tag <a>)
    const link = event.target.closest('a');
    
    if (link && link.href) {
        const currentDomain = window.location.hostname;
        
        try {
            const targetUrl = new URL(link.href);
            const targetDomain = targetUrl.hostname;
            
            // If the link is trying to take you to a completely different external website
            // and it looks like an ad tracking link (contains keywords like 'click', 'ad', 'pop')
            const isExternal = targetDomain !== currentDomain && !targetDomain.includes(currentDomain.split('.').slice(-2).join('.'));
            const looksLikeAd = link.href.includes('ad') || link.href.includes('click') || link.className.includes('ad');

            if (isExternal && looksLikeAd) {
                event.preventDefault(); // STOP the click from navigating!
                event.stopPropagation();
                
                console.log("Redirect Shield intercepted a direct ad click to:", link.href);
                reportBlockedRedirect();
                
                alert("🛡️ Redirect Shield blocked this ad transition!");
            }
        } catch (e) {
            // Ignore invalid URLs
        }
    }
}, true); // Using capturing phase to catch the click before the website processes it