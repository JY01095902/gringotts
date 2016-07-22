var BillsActions = Reflux.createActions([
    'getData'
]);

var BillsStore = Reflux.createStore({
    data: [],
    listenables:[BillsActions],
    onGetData: function (startIndex, endIndex) {
        var originalData = []
        for(var i = 0; i < 60; i++){
            originalData.push({
                img: { src: 'http://hbimg.b0.upaiyun.com/2ea272aa3c9448fd25180eb2f3045c079b5a17761f1a9-VB981Y_fw658' },
                icon: { className: 'icon icon-f7' },
                title: 'title',
                titleAfter: 'title-after',
                subtitle: 'subtitle',
                subtitleAfter: 'subtitle-after',
                text: 'text'
            });
        }
        for(var i = 0; i < 60; i++){
            originalData.push({
                img: { src: 'http://hbimg.b0.upaiyun.com/c0f77cbbffedfd48335f68faee5bd370a5c765d93beb1-0jR7U3_fw658' },
                icon: { className: 'icon icon-f7' },
                title: 'title',
                titleAfter: 'title-after',
                subtitle: 'subtitle',
                subtitleAfter: 'subtitle-after',
                text: 'text'
            });
        }
        for(var i = 0; i < 60; i++){
            originalData.push({
                img: { src: 'http://hbimg.b0.upaiyun.com/5428a4778050235404d240025cdaef9e6e276c13817c-3sZIxe_fw658' },
                icon: { className: 'icon icon-f7' },
                title: 'title',
                titleAfter: 'title-after',
                subtitle: 'subtitle',
                subtitleAfter: 'subtitle-after',
                text: ''
            });
        }

        var fetchedData = originalData.slice(startIndex, endIndex);
        BillsStore.data = BillsStore.data.concat(fetchedData);
        BillsStore.trigger(BillsStore.data);
    }
});