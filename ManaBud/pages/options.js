$(function () {

    chrome.storage.sync.get('limit', (budget) => {
        $('#limit').val(budget.limit);
    })

    $("#saveLimit").click(function () {
        let limit = $("#limit").val();
        if (limit) {
            chrome.storage.sync.set({ 'limit': limit }, () => {
                close();
            });
        }
    });

    $('#resetTotal').click(function () {
        chrome.storage.sync.set({ 'total': 0 }, function () {

            var notifOptions = {
                type: "basic",
                iconUrl: "../icon48.png",
                title: "Resetting Total",
                message: "Total has been reset to 0."
            };

            chrome.notifications.create('resetNotif', notifOptions);

        });
        close();
    });
});