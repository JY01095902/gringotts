var AccountsActions = Reflux.createActions([
    'getNextPage'
]);

var AccountsStore = Reflux.createStore({
    data: [],
    from: 1,
    to: 15,
    pageSize: 15,
    listenables:[AccountsActions],
    onGetNextPage: function () {
        var fetchedData = getOriginalAccountsData(this.from, this.to);
        this.data = this.data.concat(fetchedData);
        this.from += this.pageSize;
        this.to += this.pageSize;
        this.trigger(this.data);
    }
});

function getOriginalAccountsData(from, to) {
    var originalData = []
        for(var i = 0; i < 60; i++){
            originalData.push({
                img: { src: '' },
                icon: { className: 'icon icon-f7' },
                title: 'title',
                titleAfter: 'title-after',
                subtitle: '',
                subtitleAfter: '',
                text: ''
            });
        }
        /*for(var i = 0; i < 60; i++){
            originalData.push({
                img: { src: '' },
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
                img: { src: '' },
                icon: { className: 'icon icon-f7' },
                title: 'title',
                titleAfter: 'title-after',
                subtitle: 'subtitle',
                subtitleAfter: 'subtitle-after',
                text: ''
            });
        }*/
    return originalData.slice(from - 1, to);
}