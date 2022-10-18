const menuItem = {
    "id": "wiksearch",
    "title": "WikSearch",
    "contexts": ["selection"]
}

chrome.contextMenus.create(menuItem);

function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener((clickData) => {
    if (clickData.menuItemId === "wiksearch" && clickData.selectionText) {
        let wikURL = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);

        const createData = {
            "url": wikURL,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": screen.availWidth / 2,
            "height": screen.availHeight / 2,
        };

        chrome.windows.create(createData, () => {
        })
    }
});

