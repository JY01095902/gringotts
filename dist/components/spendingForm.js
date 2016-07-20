SpendingForm = React.createClass({
    getInitialState: function () {
        return { 
            data: null
        };
    },
    stateChange: function (data) {
        this.setState({ data: data });
    },
    onChange: function(){
        var spending = SpendingFormActions.getData();
        spending.name = $$(this.refs.name).val();
        spending.amount = $$(this.refs.amount).val();
        spending.date = $$(this.refs.date).val();
        spending.chest.id = $$(this.refs.chest).data('chestId');
        spending.chest.fullName = $$(this.refs.chest).val();
        spending.remark = $$(this.refs.remark).val();
    },
    componentDidMount: function(){
        this.unsubscribe = SpendingFormStore.listen(this.stateChange);
    },
    componentWillUnmount: function(){
        this.unsubscribe();
    },
    render: function (){
        var form = null;
        if(this.state.data != null){
            form = <div className="list-block">
                        <ul>
                            <li>
                            <div className="item-content">
                                <div className="item-inner">
                                    <div className="item-title label">Name</div>
                                    <div className="item-input">
                                        <input type="text" name="name" value={this.state.data.name} onChange={this.onChange} ref='name' />
                                    </div>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div className="item-content">
                                <div className="item-inner">
                                    <div className="item-title label">Amount</div>
                                    <div className="item-input">
                                        <input type="number" name="amount" value={this.state.data.amount} onChange={this.onChange} ref='amount' />
                                    </div>
                                </div>
                            </div>
                            </li>
                            <li>
                            <div className="item-content">
                                <div className="item-inner">
                                <div className="item-title label">Date</div>
                                <div className="item-input">
                                    <input type="date" name='date' value={this.state.data.date} onChange={this.onChange} ref='date' />
                                </div>
                                </div>
                            </div>
                            </li>
                            <li>
                            <a href={"pages/chooseAccount.html?chestId=" + this.state.data.chest.id } className="item-link">
                                <div className="item-content">
                                    <div className="item-inner">
                                        <div className="item-title label">Account</div>
                                        <div className="item-input">
                                            <input id='txtAccount' type="text" name='account' readOnly 
                                            data-chestId={this.state.data.chest.id} value={this.state.data.chest.fullName} onChange={this.onChange} ref='chest' />
                                        </div>
                                    </div>
                                </div>
                            </a>
                            </li>
                            <li className="align-top">
                            <div className="item-content">
                                <div className="item-inner">
                                <div className="item-title label">Remark</div>
                                <div className="item-input">
                                    <textarea className="resizable" name='remark' value={this.state.data.remark} onChange={this.onChange} ref='remark' ></textarea>
                                </div>
                                </div>
                            </div>
                            </li>
                        </ul>
                    </div>
        }
        return(
            form
        )
    }
});