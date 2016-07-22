ListView = React.createClass({
    getInitialState: function () {
        return { 
            data: []
        };
    },
    stateChange: function (data) {
        this.setState({ data: data });
    },
    componentDidMount: function(){
        this.unsubscribe = BillsStore.listen(this.stateChange);

        console.log($$('.infinite-scroll'));

        

        // 加载flag
        var loading = false;

        $$('.infinite-scroll').on('infinite', function () {
            console.log(11);
            // 如果正在加载，则退出
            if (loading) return;
            
            // 设置flag
            loading = true;
            
            // 模拟1s的加载过程
            setTimeout(function () {
                // 重置加载flag
                loading = false;
                var endIndex = startIndex + pageSize;
                BillsActions.getData(startIndex, endIndex);
                startIndex = endIndex;
            }, 1000);
        });   
    },
    componentWillUnmount: function(){
        this.unsubscribe();
    },  
    render: function () {
        var items = [];
        var data = this.state.data;
        if(data != null && data.length > 0){
            for(var i in data){
                var item = data[i];
                var media = null;
                var img = item.img;
                if(img != null && img != {} && img.src != null && img.src != '' ){
                    media = <img src={img.src} width="80" />;
                }else{
                    var icon = item.icon;
                    if(icon != null && icon != {} && icon.className != null && icon.className != '' ){
                        media = <i className={icon.className}></i>;
                    }
                }
                var item = <li key={i} data-id={i}>
                                <a href="#" className="item-link item-content">
                                    <div className="item-media">{media}</div>
                                    <div className="item-inner">
                                        <div className="item-title-row">
                                            <div className="item-title">{item.title}</div>
                                            <div className="item-after">{item.titleAfter}</div>
                                        </div>
                                        <div className="item-title-row" style={{backgroundImage: 'none'}}>
                                            <div className="item-subtitle">{item.subtitle}</div>
                                            <div className="item-after">{item.subtitleAfter}</div>
                                        </div>
                                        <div className="item-text" style={{height: 'auto'}}>{item.text}</div>
                                    </div>
                                </a>
                            </li>;
                items.push(item);
            }
        }
        return (
            <div className="infinite-scroll" data-distance="100" style={{overflow: 'auto', WebkitOverflowScrolling: 'touch', boxSizing: 'border-box', height: '100%', position: 'relative', zIndex: '1'}}>
                <div className="list-block media-list">
                    <ul>
                        {items}
                    </ul>
                </div>
                <div className="infinite-scroll-preloader" style={{marginTop: '-20px', marginBottom: '10px', textAlign: 'center'}}>
                    <div className="preloader" style={{width: '34px', height: '34px'}}></div>
                </div>
            </div>
        );
    }
});