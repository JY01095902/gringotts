var ChooseCategoryListActions = Reflux.createActions([
    'getCategories'
]);

var ChooseCategoryListStore = Reflux.createStore({
    data: [],
    listenables: [ChooseCategoryListActions],
    onGetCategories: function () {
        myApp.showIndicator();
        //setTimeout(function () {
            var categories = [
                { id: 1, name: 'out 1', type: 'out' },
                { id: 2, name: 'out 2', type: 'out' },
                { id: 3, name: 'out 3', type: 'out' },
                { id: 4, name: 'out 4', type: 'out' },
                { id: 5, name: 'out 5', type: 'out' },
                { id: 6, name: 'in 1', type: 'in' },
                { id: 7, name: 'in 2', type: 'in' },
                { id: 8, name: 'in 3', type: 'in' }
            ];
            ChooseCategoryListStore.data = categories;
            ChooseCategoryListStore.trigger(ChooseCategoryListStore.data);
            myApp.hideIndicator();
        //}, 500);
    }
});