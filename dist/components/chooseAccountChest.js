ChooseAccountChest = React.createClass({
    render: function () {
        return (
            <label className="label-radio item-content">
                <input type="radio" name="account" value={this.props.id} data-id={this.props.fullName}/>
                <div className="item-media"><i className="icon icon-f7"></i></div>
                <div className="item-inner">
                    <div className="item-title">{this.props.name}</div>
                </div>
            </label>
        );
    }
});