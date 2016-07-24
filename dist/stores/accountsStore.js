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
                data:{
                    img: { src: '' },
                    icon: { className: 'icon icon-f7' },
                    title: 'title',
                    titleAfter: 'title-after',
                    subtitle: '',
                    subtitleAfter: '',
                    text: ''
                },
                config:{
                    swipeout:{
                        leftActions:[
                            {   
                                text: 'l-a1', 
                                closeAfterClick: true, 
                                onClick: function(event){ 
                                    console.log(event) 
                                }
                            },
                            {
                                text: 'l-a2', 
                                closeAfterClick: true, 
                                className: 'bg-lightblue',
                                onClick: function(event){ 
                                    console.log(event) 
                                }
                            }
                        ],
                        rightActions:[
                            {
                                text: 'r-a1', 
                                closeAfterClick: true, 
                                className: 'bg-green',
                                onClick: function(event){ 
                                    console.log(event) 
                                }
                            },
                            {
                                text: '删除', 
                                closeAfterClick: true, 
                                deletable: true, 
                                onClick: function(event){ 
                                    console.log(event) 
                                }
                            }
                        ]
                    }
                }
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