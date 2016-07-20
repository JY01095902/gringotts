ChooseAccountChest = React.createClass({
    onChecked: function(){
        if($$(this.refs.radio).prop('checked') == false){
            this.props.onChecked();
        }
    },
    render: function () {
        return (
            <label className="label-radio item-content" onClick={this.onChecked}>
                <input type="radio" name="account" value={this.props.id} data-name={this.props.fullName + this.props.name}
                      ref="radio"/>
                <div className="item-media"><i className="icon icon-f7"></i></div>
                <div className="item-inner">
                    <div className="item-title">{this.props.name}</div>
                </div>
            </label>
        );
    }
});