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

var carVendors = {
    Japanese : ['Honda', 'Lexus', 'Mazda', 'Nissan', 'Toyota'],
    German : ['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Volvo'],
    American : ['Cadillac', 'Chrysler', 'Dodge', 'Ford']
};
var pickerDependent = myApp.picker({
    input: '#picker-dependent',
    rotateEffect: true,
    formatValue: function (picker, values) {
        return values[1];
    },
    cols: [
        {
            textAlign: 'left',
            values: ['Japanese', 'German', 'American'],
            onChange: function (picker, country) {
                if(picker.cols[1].replaceValues){
                    picker.cols[1].replaceValues(carVendors[country]);
                }
            }
        },
        {
            values: carVendors.Japanese,
            width: 160,
        },
    ]
});