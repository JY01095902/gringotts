var BillsActions = Reflux.createActions([
    'getNextPage'
]);

var BillsStore = Reflux.createStore({
    data: [],
    from: 1,
    to: 10,
    pageSize: 10,
    listenables:[BillsActions],
    onGetNextPage: function () {
        var fetchedData = getOriginalData(this.from, this.to);
        this.data = this.data.concat(fetchedData);
        this.from += this.pageSize;
        this.to += this.pageSize;
        this.trigger(this.data);
    }
});

function getOriginalData(from, to) {
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
    return originalData.slice(from - 1, to);
}