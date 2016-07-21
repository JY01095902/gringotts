ChooseCategoryList = React.createClass({
    getInitialState: function () {
        return { data: [] };
    },
    stateChange: function (data) {
        this.setState({ data: data });
        var category = $$('input[name=category][value="'+ this.props.checkedCategoryId + '"]');
        if(category.length > 0){
            category.prop('checked', 'checked');
        }
    },
    onChecked: function () {
        if($$(this.refs.radio).prop('checked') == false){
            this.props.onChecked($$(this.refs.radio))
        }
    },
    componentDidMount: function(){
        this.unsubscribe = ChooseCategoryListStore.listen(this.stateChange);
    },
    componentWillUnmount: function(){
        this.unsubscribe();
    },
    render: function () {
        var categories = [];
        for(var i in this.state.data){
            var category = this.state.data[i];
            categories.push(
                            <li key={category.id}>
                                <ChooseCategory 
                                    id={category.id} 
                                    name={category.name}
                                    onChecked={this.props.onChecked}
                                    />
                            </li>
                        );
        }
        return (
            <div className="list-block">
                <ul>
                    {categories}
                </ul>
            </div>
        );
    }
});