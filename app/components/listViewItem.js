ListViewItem = React.createClass({
    getInitialState: function () {
        return { 
            data: null
        };
    },
    componentWillMount: function(){
         this.setState({data: this.props.data});
    },
    render: function () {
        var item = this.state.data;
        var media = null;
        var title = null;
        var titleAfter = null;
        var subtitle = null;
        var subtitleAfter = null;
        var text = null;
        if(item){
            var img = item.img;
            if(img != null && img != {} && img.src != null && img.src != '' ){
                media = <img src={img.src} width="80" />;
            }else{
                var icon = item.icon;
                if(icon != null && icon != {} && icon.className != null && icon.className != '' ){
                    media = <i className={icon.className}></i>;
                }
            }
            if(item.title != null && item.title != ''){
                title = <div className="item-title">{item.title}</div>;
            }
            if(item.titleAfter != null && item.titleAfter != ''){
                titleAfter = <div className="item-after">{item.titleAfter}</div>;
            }
            if(item.subtitle != null && item.subtitle != ''){
                subtitle = <div className="item-subtitle">{item.subtitle}</div>;
            }
            if(item.subtitleAfter != null && item.subtitleAfter != ''){
                subtitleAfter = <div className="item-after">{item.subtitleAfter}</div>;
            }
            if(item.text != null && item.text != ''){
                text = <div className="item-text" style={{height: 'auto'}}>{item.text}</div>;
            }
        }
        return(<li>
                    <a href="#" className="item-link item-content">
                        <div className="item-media">{media}</div>
                        <div className="item-inner">
                            <div className="item-title-row">
                                {title}
                                {titleAfter}
                            </div>
                            <div className="item-title-row" style={{backgroundImage: 'none'}}>
                                {subtitle}
                                {subtitleAfter}
                            </div>
                            {text}
                        </div>
                    </a>
                </li>);
    }
});