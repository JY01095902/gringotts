ListViewItem = React.createClass({
    getInitialState: function () {
        return { 
            data: null
        };
    },
    componentWillMount: function(){
         this.setState({data: this.props.data});
    },
    generateActions(actions){
        var actionsDOM = [];
        for(var i in actions){
            var action = actions[i];
            var className = '';
            if(action.closeAfterClick == true) className += 'swipeout-close';
            if(action.deletable == true) className += ' swipeout-delete';
            if(action.className) className += ' ' + action.className;
            actionsDOM.push(<a className={className} href="#" key={i} onClick={action.onClick}>{action.text}</a>);
        }
        return actionsDOM;
    },
    render: function () {
        var item = this.state.data;
        var config = this.props.config;
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
        var itemMedia = <div className="item-media">{media}</div>;
        var itemInner = <div className="item-inner">
                            <div className="item-title-row">
                                {title}
                                {titleAfter}
                            </div>
                            <div className="item-title-row" style={{backgroundImage: 'none'}}>
                                {subtitle}
                                {subtitleAfter}
                            </div>
                            {text}
                        </div>;
        //普通样式
        var itemContent = <div className="item-content">
                                {itemMedia}
                                {itemInner}
                            </div>;
        var listViewItem = <li>{itemContent}</li>;
        if(config && config != {}){
            //带链接箭头
            if(config.link && config.link != {}){
                itemContent = <a href={config.link.href} className="item-link item-content">
                                    {itemMedia}
                                    {itemInner}
                                </a>;
            }
            if(config.check && config.check != {}){
                //单选radio
                if(config.check)
                {
                    if(config.check.multi === false){
                        itemContent = <label className="label-radio item-content">
                                            <input type="radio" name={config.check.name} value="Books" checked={config.check.checked} />
                                            {itemMedia}
                                            {itemInner}
                                        </label>;
                    }
                    else if (config.check.multi === true)
                    {
                        //复选
                        itemContent = <label className="label-checkbox item-content">
                                            <input type="checkbox" name={config.check.name} value="Books" checked={config.check.checked} />
                                            <div className="item-media">
                                                <i className="icon icon-form-checkbox"></i>
                                                {media}
                                            </div>
                                            {itemInner}
                                        </label>;
                    }
                }
            }

            if(config.swipeout && config.swipeout != {}){
                var leftActions = config.swipeout.leftActions;
                var leftSwipeout = null;
                if(leftActions){
                    var actions = this.generateActions(leftActions);
                    leftSwipeout = <div className="swipeout-actions-left">
                                        {actions}
                                    </div>;
                }

                var rightActions = config.swipeout.rightActions;
                var rightSwipeout = null;
                if(rightActions){
                    var actions = this.generateActions(rightActions);
                    rightSwipeout = <div className="swipeout-actions-right">
                                        {actions}
                                    </div>;
                }
                listViewItem = <li className="swipeout">
                                    <div className="swipeout-content">
                                        {itemContent}
                                    </div>
                                    {leftSwipeout}
                                    {rightSwipeout}
                                </li>;
            
            }
        }
        
        return(listViewItem);
    }
});