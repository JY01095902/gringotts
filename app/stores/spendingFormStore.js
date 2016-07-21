var SpendingFormActions = Reflux.createActions([
    'setData'
]);

var SpendingFormStore = Reflux.createStore({
    data: null,
    emptyData: {
            id: 0,
            name: '',
            amount: '',
            date: (new Date()).format('yyyy-MM-dd'),
            category: { id: 0, name: '午餐' },
            chest: { id: 0, fullName: '' },
            remark: ''
        },
    listenables:[SpendingFormActions],
    onSetData: function (data) {
        SpendingFormStore.data = data;
        if(data == null || data == {}){
            SpendingFormStore.trigger(SpendingFormStore.emptyData);  
        }else{
            SpendingFormStore.trigger(SpendingFormStore.data);
        }
    }
});