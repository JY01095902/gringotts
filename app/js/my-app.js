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
            onChecked: function (e) {
                var checkedAccount = e;
                var chestId = checkedAccount.val(); 
                var chestFullName = checkedAccount.data('name');
                var spending = SpendingFormStore.data;
                if(spending == null || spending == {}){
                    spending = SpendingFormStore.emptyData;
                }
                spending.chest.id = chestId;
                spending.chest.fullName = chestFullName;
                SpendingFormActions.setData(spending);

                billsView.router.back();
                ReactDOM.unmountComponentAtNode(document.getElementById('chooseAccountForm'));
            } 
        }),
        document.getElementById('chooseAccountForm')
    );
    ChooseAccountListActions.getAccounts();
})

myApp.onPageBeforeInit('chooseCategoryPage', function (e) {
    var chooseCategoryList = React.createFactory(ChooseCategoryList);
    ReactDOM.render(
        chooseCategoryList({
            checkedCategoryId: e.query.categoryId,
            onChecked: function (e) {
                var checkedCategory= e;
                var categoryId = checkedCategory.val(); 
                var categoryName = checkedCategory.data('name');
                var spending = SpendingFormStore.data;
                if(spending == null || spending == {}){
                    spending = SpendingFormStore.emptyData;
                }
                spending.category.id = categoryId;
                spending.category.name = categoryName;
                SpendingFormActions.setData(spending);

                billsView.router.back();
                ReactDOM.unmountComponentAtNode(document.getElementById('chooseCategoryForm'));
            } 
        }),
        document.getElementById('chooseCategoryForm')
    );
    ChooseCategoryListActions.getCategories();
});

myApp.onPageBeforeInit('addSpendingPage', function (e) {
    var spendingForm = React.createFactory(SpendingForm);
    ReactDOM.render(
        spendingForm(),
        document.getElementById('addSpendingForm')
    );
});

myApp.onPageBeforeInit('addCategoryPage', function (e) {
    var categoryForm = React.createFactory(CategoryForm);
    ReactDOM.render(
        categoryForm(),
        document.getElementById('addCategoryForm')
    );
});