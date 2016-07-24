ListView = React.createClass({
    getInitialState: function () {
        return { 
            data: null,
            infinite: false
        };
    },
    stateChange: function (data) {
        this.setState({ data: data });
    },
    handleScroll: function(event){
        if(this.state.infinite 
            && this.state.data.length < this.props.config.infinite.dataTotalCount){
            var inf = $$(event.target);
            var scrollTop = inf[0].scrollTop;
            var scrollHeight = inf[0].scrollHeight;
            var height = inf[0].offsetHeight;
            var distance = this.props.config.infinite.distance;
            if (!distance) distance = 50;
            if (typeof distance === 'string' && distance.indexOf('%') >= 0) {
                distance = parseInt(distance, 10) / 100 * height;
            }
            if (distance > height) distance = height;
            if (scrollTop + height >= scrollHeight - distance) {
                if(this.props.config.infinite.onInfinite != null) this.props.config.infinite.onInfinite();
            }
        }
    },
    componentWillMount: function(){
        if(this.props.config.infinite 
            && this.props.config.infinite != {}){
            this.setState({infinite: true});
        }
    },
    componentDidMount: function(){
        this.unsubscribe = this.props.config.store.listen(this.stateChange);    
        if (this.isMounted()) {
            this.props.config.componentDidMount();
        }
    },
    componentWillUnmount: function(){
        this.unsubscribe();
    },  
    render: function () {
        var items = [];
        var infiniteBar = null;
        var data = this.state.data;
        if(data){
            if(data && data.length > 0){
                for(var i in data){
                    var item = <ListViewItem key={i} data={data[i]} />;
                    items.push(item);
                }
            }
            if(this.state.infinite && data
                && this.state.data.length < this.props.config.infinite.dataTotalCount)
            {
                var dataTotalCount = this.props.config.infinite.dataTotalCount;
                infiniteBar = <div style={{marginTop: '-20px', marginBottom: '10px'}}>
                                <div style={{textAlign: 'center'}}>
                                    <div style={{textAlign: 'right', display: 'inline-flex', verticalAlign: 'top'}}>
                                        <div className="preloader" style={{width: '24px', height: '24px'}}></div>
                                    </div>
                                    <span style={{textAlign: 'left', display: 'inline-block', paddingLeft: '10px'}}>
                                        <div >
                                            <span>加载中...</span>
                                        </div>
                                        <div >
                                            <span>正在为您获取({this.state.data.length}/{dataTotalCount})</span>
                                        </div>
                                    </span>
                                </div>
                            </div>;
            }
        }
        return (
            <div onScroll={this.handleScroll} style={{overflow: 'auto', WebkitOverflowScrolling: 'touch', boxSizing: 'border-box', height: '100%', position: 'relative', zIndex: '1'}}>
                <div className="list-block media-list">
                    <ul>
                        {items}
                    </ul>
                </div>
                {infiniteBar}
            </div>
        );
    }
});