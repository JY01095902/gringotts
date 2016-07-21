SpendingForm = React.createClass({
    getInitialState: function () {
        return { 
            data: SpendingFormStore.emptyData
        };
    },
    stateChange: function (data) {
        this.setState({ data: data });
        myApp.resizeTextarea('textarea.resizable');
    },
    onChange: function(){
        var spending = this.state.data;
        spending.name = $$(this.refs.name).val();
        spending.amount = $$(this.refs.amount).val();
        spending.date = $$(this.refs.date).val();
        spending.chest.id = $$(this.refs.chest).data('chestId');
        spending.chest.fullName = $$(this.refs.chest).val();
        spending.category.id = $$(this.refs.category).data('categoryId');
        spending.category.name = $$(this.refs.category).val();
        spending.remark = $$(this.refs.remark).val();
        SpendingFormActions.setData(spending);
    },
    componentDidMount: function(){
        this.unsubscribe = SpendingFormStore.listen(this.stateChange);
            myApp.resizeTextarea('textarea.resizable');
    },
    componentWillUnmount: function(){
        this.unsubscribe();
    },
    render: function (){
        return(
            <div className="list-block">
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
                    <a href={"pages/chooseCategory.html?categoryId=" + this.state.data.category.id } className="item-link">
                        <div className="item-content">
                            <div className="item-inner">
                                <div className="item-title label">Category</div>
                                <div className="item-input">
                                    <input type="text" name='category' readOnly 
                                        data-categoryId={this.state.data.category.id} value={this.state.data.category.name} 
                                        onChange={this.onChange} ref='category' />
                                </div>
                            </div>
                        </div>
                    </a>
                    </li>
                    <li>
                    <a href={"pages/chooseAccount.html?chestId=" + this.state.data.chest.id } className="item-link">
                        <div className="item-content">
                            <div className="item-inner">
                                <div className="item-title label">Account</div>
                                <div className="item-input">
                                    <input type="text" name='account' readOnly 
                                        data-chestId={this.state.data.chest.id} value={this.state.data.chest.fullName} 
                                        onChange={this.onChange} ref='chest' />
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
        )
    }
});