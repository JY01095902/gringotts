CategoryForm = React.createClass({
    getInitialState: function () {
        return { 
            data: CategoryFormStore.emptyData
        };
    },
    stateChange: function (data) {
        this.setState({ data: data });
    },
    onChange: function(){
        var category = this.state.data;
        category.name = $$(this.refs.name).val();
        CategoryFormActions.setData(category);
    },
    componentDidMount: function(){
        this.unsubscribe = CategoryFormStore.listen(this.stateChange);
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
                        <div className="item-media"><i className="icon icon-form-name"></i></div>
                        <div className="item-inner">
                            <div className="item-title label">Name</div>
                            <div className="item-input">
                                <input type="text" name="name" value={this.state.data.name} onChange={this.onChange} ref='name' />
                            </div>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
        )
    }
});