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

myApp.onPageBeforeInit('chooseAccountPage', function (e) {
    var chooseAccountList = React.createFactory(ChooseAccountList);
    ReactDOM.render(
        chooseAccountList({ 
            checkedAccountId: e.query.chestId,
            onChecked: function () {
                billsView.router.back();
                ReactDOM.unmountComponentAtNode(document.getElementById('chooseAccountForm'));
            } 
        }),
        document.getElementById('chooseAccountForm')
    );
    ChooseAccountListActions.getAccounts();
})

myApp.onPageBack('chooseAccountPage', function (e) {
    var checkedAccount = $$("input[type='radio'][name='account']:checked")
    var chestId = checkedAccount.val(); 
    var chestFullName = checkedAccount.data('name');
    var spending = SpendingFormActions.getData();
    spending.chest.id = chestId;
    spending.chest.fullName = chestFullName;
    SpendingFormActions.setData(spending);
})


myApp.onPageBeforeInit('addSpendingPage', function (e) {
    var spending = {
        id: 1,
        name: 'KFC',
        amount: 11.00,
        date: (new Date()).format('yyyy-MM-dd'),
        chest: { id: 1, name: 'CCC' , fullName: 'AAA BBB CCC' },
        remark: 'hello'
    }
    var spendingForm = React.createFactory(SpendingForm);
    ReactDOM.render(
        spendingForm(),
        document.getElementById('addSpendingForm')
    );
    SpendingFormActions.setData(spending);
});

myApp.onPageInit('addSpendingPage', function (e) {
    myApp.resizeTextarea('textarea.resizable');
});