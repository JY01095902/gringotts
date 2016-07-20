ChooseAccountList = React.createClass({
    getInitialState: function () {
        return { data: [] };
    },
    stateChange: function (data) {
        this.setState({ data: data });
        var chest = $$('input[name=account][value="'+ this.props.checkedAccountId + '"]');
        if(chest.length > 0){
            chest.prop('checked', 'checked');
            myApp.accordionOpen($$("input[type='radio'][name='account']:checked").parents('.accordion-item'));
        }
    },
    componentDidMount: function(){
        this.unsubscribe = ChooseAccountListStore.listen(this.stateChange);
    },
    componentWillUnmount: function(){
        this.unsubscribe();
    },
    render: function () {
        var accounts = [];
        for(var i in this.state.data){
            var account = this.state.data[i];
            accounts.push(
                            <ChooseAccount key={account.id}
                                id={account.id} 
                                name={account.name} 
                                vaults={account.vaults}
                                fullName={account.name}
                                onChecked={this.props.onChecked}
                                />
                        );
        }
        return (
            <div>{accounts}</div>
        );
    }
});