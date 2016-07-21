var ChooseAccountListActions  = Reflux.createActions([
    'getAccounts'
]);

var ChooseAccountListStore = Reflux.createStore({
    data: [],
    listenables: [ChooseAccountListActions],
    onGetAccounts: function() {
        myApp.showIndicator();
        setTimeout(function () {
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
            ChooseAccountListStore.data = accounts;
            ChooseAccountListStore.trigger(ChooseAccountListStore.data);
            myApp.hideIndicator();
        }, 500);
    }
});