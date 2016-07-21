ChooseCategory = React.createClass({
    onChecked: function(){
        if($$(this.refs.radio).prop('checked') == false){
            this.props.onChecked($$(this.refs.radio));
        }
    },
    render: function () {
        return (
            <label className="label-radio item-content" onClick={this.onChecked}>
                <input type="radio" name="category" value={this.props.id} ref='radio'
                    data-name={this.props.name} />
                <div className="item-media"><i className="icon icon-f7"></i></div>
                <div className="item-inner">
                    <div className="item-title">{this.props.name}</div>
                </div>
            </label>
        );
    }
});