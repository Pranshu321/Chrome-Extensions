$(function () {

    chrome.storage.sync.get(['total', 'limit'], (budget) => {
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
    })


    $('#spendAmount').click(function () {
        chrome.storage.sync.get(['total', 'limit'], (budget) => {
            let newTotal = 0;
            if (budget.total) {
                newTotal += parseInt(budget.total);
            }

            let amount = $('#amount').val();
            if (amount) {
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({ 'total': newTotal }, () => {
                if (amount && newTotal >= budget.limit) {
                    var notifOptions = {
                        type: 'basic',
                        iconUrl: './icon48.png',
                        title: "Limit Reached!",
                        message: "Uh oh! Looks like you've reached your limit!"
                    };
                    chrome.notifications.create('limitNotif', notifOptions);
                }
            });

            $('#total').text(newTotal);
            $('#amount').val('');
        });
    });
})