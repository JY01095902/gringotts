// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#accountsView', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    //dynamicNavbar: true
});
var view2 = myApp.addView('#billsView', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    //dynamicNavbar: true
});
var view3 = myApp.addView('#meView', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
