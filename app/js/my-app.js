// Initialize your app
var myApp = new Framework7({
    pushState: true,
    pushStateSeparator: "#"
});

// Export selectors engine
var $$ = Dom7;

/*var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});*/

// Add views
var accountsView = myApp.addView('#accountsView', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    //dynamicNavbar: true
});
var billsView = myApp.addView('#billsView', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var meView = myApp.addView('#meView', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

$$('#accountsView').on('show', function (page) {
    $$('.tab-accounts').addClass('active');
    $$('.tab-bills').removeClass('active');
    $$('.tab-me').removeClass('active');
});

$$('#billsView').on('show', function (page) {
    $$('.tab-accounts').removeClass('active');
    $$('.tab-bills').addClass('active');
    $$('.tab-me').removeClass('active');
});

$$('#meView').on('show', function (page) {
    $$('.tab-accounts').removeClass('active');
    $$('.tab-bills').removeClass('active');
    $$('.tab-me').addClass('active');
});

myApp.onPageInit('chooseAccountPage', function (e) {
    var accounts = [
        {
            id: 1,
            name: 'Family',
            vaults: [
                {
                    id: 1,
                    name: 'life',
                    chests: [
                        { id: 1, name: 'jiangshe-card' },
                        { id: 2, name: 'cash' }
                    ]
                },
                {
                    id: 2,
                    name: 'old',
                    chests: [
                        { id: 3, name: 'jiaotong-card' }
                    ]
                },
                {
                    id: 3,
                    name: 'touzi',
                    chests: [
                        { id: 4, name: 'zhaoshang-card' }
                    ]
                },
                {
                    id: 4,
                    name: 'travel',
                    chests: [
                        { id: 5, name: 'zhongxin-card' }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'Personal',
            vaults: [
                {
                    id: 5,
                    name: 'pocket money',
                    chests: [
                        { id: 6, name: 'guangda-card' },
                        { id: 7, name: 'cash' },
                        { id: 8, name: 'weixin' },
                        { id: 9, name: 'alipay' }
                    ]
                }
            ]
        }
    ];
    var chooseAccountVault = React.createFactory(ChooseAccountVault);
    ReactDOM.render(
        chooseAccountVault({ id: accounts[1].vaults[0].id, name: accounts[1].vaults[0].name, chests: accounts[1].vaults[0].chests}),
        document.getElementById('example')
    );
    $$('.chooseAccountPage label.label-radio input[type=radio]').change(function (event,obj) {
        billsView.router.back();
    });
})

myApp.onPageBack('chooseAccountPage', function (e) {
    var checkedAccount = $$("input[type='radio'][name='account']:checked")
    var accountId = checkedAccount.val(); 
    var accountName = checkedAccount.parent().text();
    $$('#txtAccount').data('id', accountId);
    $$('#txtAccount').val(accountName);
})