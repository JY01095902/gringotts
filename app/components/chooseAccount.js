ChooseAccount = React.createClass({
    render: function () {
        var vaults = [];
        for(var i in this.props.vaults){
            var vault = this.props.vaults[i];
            vaults.push(
                            <ChooseAccountVault key={vault.id}
                                id={vault.id} 
                                name={vault.name} 
                                chests={vault.chests}
                                fullName={this.props.name + ' ' + vault.name}
                                />
                        );
        }
        return (
            <div>
                <div className="content-block-title">{this.props.name}</div>
                <div className="list-block accordion-list">
                    <ul>
                        {vaults}
                    </ul>
                </div>
            </div>
        );
    }
});