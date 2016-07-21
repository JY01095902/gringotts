ListView = React.createClass({
    getInitialState: function () {
        return { 
            data: [{
                img: { src: 'http://hbimg.b0.upaiyun.com/2ea272aa3c9448fd25180eb2f3045c079b5a17761f1a9-VB981Y_fw658' },
                icon: { className: 'icon icon-f7' },
                title: 'title',
                titleAfter: 'title-after',
                subtitle: 'subtitle',
                subtitleAfter: 'subtitle-after',
                text: 'text'
            },
            {
                img: { src: 'http://hbimg.b0.upaiyun.com/c0f77cbbffedfd48335f68faee5bd370a5c765d93beb1-0jR7U3_fw658' },
                icon: { className: 'icon icon-f7' },
                title: 'title',
                titleAfter: 'title-after',
                subtitle: 'subtitle',
                subtitleAfter: 'subtitle-after',
                text: 'text'
            },
            {
                img: { src: 'http://hbimg.b0.upaiyun.com/5428a4778050235404d240025cdaef9e6e276c13817c-3sZIxe_fw658' },
                icon: { className: 'icon icon-f7' },
                title: 'title',
                titleAfter: 'title-after',
                subtitle: 'subtitle',
                subtitleAfter: 'subtitle-after',
                text: ''
            }]
        };
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
                var item = <li key={i}>
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
            <div className="list-block media-list">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
});