// Initialize your app
var myApp = new Framework7({
    pushState: true,
    pushStateSeparator: "#"
});

// Export selectors engine
var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


var indexView = myApp.addView('.indexView', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
// Add views
var accountsView = myApp.addView('#accountsView', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    //dynamicNavbar: true
});
var billsView = myApp.addView('#billsView', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    //dynamicNavbar: true
});
var meView = myApp.addView('#meView', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

myApp.onPageBack('settingsPage', function (page) {
    $$('.toolbar').css('display', 'inline-block');
});

myApp.onPageInit('settingsPage', function (page) {
    $$('.toolbar').css('display', 'none');
});