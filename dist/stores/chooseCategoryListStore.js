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
                { id: 1, name: '早餐' },
                { id: 2, name: '午餐' },
                { id: 3, name: '零食' },
                { id: 4, name: '公交卡充值' },
                { id: 5, name: '饭卡充值' }
            ];
            ChooseCategoryListStore.data = categories;
            ChooseCategoryListStore.trigger(ChooseCategoryListStore.data);
            myApp.hideIndicator();
        //}, 500);
    }
});