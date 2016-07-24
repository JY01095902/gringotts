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
        var itemContent = <a href="#" className="item-link item-content">
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
                            </a>;
        var listViewItem = <li>{itemContent}</li>;
        var config = this.props.config;
        if(config && this.props.config.swipeout && this.props.config.swipeout != {}){
            var leftActions = this.props.config.swipeout.leftActions;
            var leftSwipeout = null;
            if(leftActions){
                var actions = this.generateActions(leftActions);
                leftSwipeout = <div className="swipeout-actions-left">
                                    {actions}
                                </div>;
            }

            var rightActions = this.props.config.swipeout.rightActions;
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
        return(listViewItem);
        /*
        <li class="swipeout">
            <!-- 被“swipeout-content”包裹起来的普通列表元素 -->
            <div class="swipeout-content">
                <!-- 你的列表元素放在这里 -->
                <div class="item-content">
                    <div class="item-media">...</div>
                    <div class="item-inner">...</div>
                </div>
            </div>
            <!-- Swipeout actions left -->
            <div class="swipeout-actions-left">
                <!-- Swipeout actions links/buttons -->
                <a href="#">Action 1</a>
                <a href="#">Action 2</a>
            </div>
            <!-- Swipeout actions right -->
            <div class="swipeout-actions-right">
                <!-- Swipeout actions links/buttons -->
                <a href="#">Action 1</a>
                <a class="swipeout-close" href="#">Action 2</a>
            </div>
        </li>
        */
    }
});