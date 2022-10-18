chrome.runtime.sendMessage({ todo: "showPageAction" });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.todo === "changeColor") {
        let addColor = request.clickedColor;
        $('.gap-top-300').css('font-style', 'italic');
        $('.gap-top-300').css('font-weight', '700');
        $('.gap-top-300').css('color', addColor);
    }
})