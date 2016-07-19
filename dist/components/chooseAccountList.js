ChooseAccountList = React.createClass({
    render: function () {
        var accounts = [];
        for(var i in this.props.accounts){
            var account = this.props.accounts[i];
            accounts.push(
                            <ChooseAccount key={account.id}
                                id={account.id} 
                                name={account.name} 
                                vaults={account.vaults}
                                fullName={this.props.name}
                                />
                        );
        }
        return (
            <div>{accounts}</div>
        );
    }
});