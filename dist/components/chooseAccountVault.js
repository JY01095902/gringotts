ChooseAccountVault = React.createClass({
    render: function () {
        var chests = [];
        for(var i in this.props.chests){
            var chest = this.props.chests[i];
            chests.push(<li key={chest.id}>
                            <ChooseAccountChest id={chest.id} name={chest.name} fullName={this.props.name + ' ' + chest.name}/>
                        </li>);
        }
        return (
            <div className="list-block accordion-list">
                <ul>
                    <li className="accordion-item">
                        <a href="" className="item-link item-content">
                            <div className="item-inner">
                                <div className="item-title">{this.props.name}</div>
                            </div>
                        </a>
                        <div className="accordion-item-content">
                            <div className="list-block">
                                <ul>
                                    {chests}
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
});