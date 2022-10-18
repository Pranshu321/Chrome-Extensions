const menuItem = {
    "id": "speakup",
    "title": "Read Aloud",
    "contexts": ["selection"]
}

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener((clickedData) => {
    if (clickedData.menuItemId === "speakup" && clickedData.selectionText) {
        chrome.tts.speak(clickedData.selectionText, {
            'lang': 'en-US',
            'rate': 0.7
        });
    }
});