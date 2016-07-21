ChooseCategoryList = React.createClass({
    getInitialState: function () {
        return { data: [] };
    },
    stateChange: function (data) {
        this.setState({ data: data });
        var category = $$('input[name=category][value="'+ this.props.checkedCategoryId + '"]');
        if(category.length > 0){
            category.prop('checked', 'checked');
            myApp.showTab($$("input[type='radio'][name='category']:checked").parents('.tab'));
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
        var outCategories = [];
        var inCategories = [];
        for(var i in this.state.data){
            var category = this.state.data[i];
            if(category.type == 'out'){
                outCategories.push(
                            <li key={category.id}>
                                <ChooseCategory 
                                    id={category.id} 
                                    name={category.name}
                                    onChecked={this.props.onChecked}
                                    />
                            </li>
                        );
            }else{
                inCategories.push(
                            <li key={category.id}>
                                <ChooseCategory 
                                    id={category.id} 
                                    name={category.name}
                                    onChecked={this.props.onChecked}
                                    />
                            </li>
                        );
            }
        }
        return (
            <div className="tabs">
                <div id="outCategoriesTab" className="tab active">
                    <div className="list-block">
                        <ul>
                            {outCategories}
                        </ul>
                    </div>
                </div>
                <div id="inCategoriesTab" className="tab">
                    <div className="list-block">
                        <ul>
                            {inCategories}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});