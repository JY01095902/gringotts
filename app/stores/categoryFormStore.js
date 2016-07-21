var CategoryFormActions = Reflux.createActions([
    'setData'
]);

var CategoryFormStore = Reflux.createStore({
    data: null,
    emptyData: {
            id: 0,
            name: '',
            type: ''
        },
    listenables:[CategoryFormActions],
    onSetData: function (data) {
        CategoryFormStore.data = data;
        if(data == null || data == {}){
            CategoryFormStore.trigger(CategoryFormStore.emptyData);  
        }else{
            CategoryFormStore.trigger(CategoryFormStore.data);
        }
    }
});