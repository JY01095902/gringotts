SpendingForm = React.createClass({
    render: function (){
        return(
            <div className="list-block">
                <ul>
                    <li>
                    <div className="item-content">
                        <div className="item-inner">
                            <div className="item-title label">Name</div>
                            <div className="item-input">
                                <input type="text" name="name" />
                            </div>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className="item-content">
                        <div className="item-inner">
                            <div className="item-title label">Amount</div>
                            <div className="item-input">
                                <input type="number" name="amount" />
                            </div>
                        </div>
                    </div>
                    </li>
                    <li>
                    <div className="item-content">
                        <div className="item-inner">
                        <div className="item-title label">Date</div>
                        <div className="item-input">
                            <input type="date" name='date' defaultValue='2016-07-19'/>
                        </div>
                        </div>
                    </div>
                    </li>
                    <li>
                    <a href="pages/chooseAccount.html" className="item-link">
                        <div className="item-content">
                            <div className="item-inner">
                                <div className="item-title label">Account</div>
                                <div className="item-input">
                                    <input id='txtAccount' type="text" name='account'/>
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
                            <textarea className="resizable" name='remark'></textarea>
                        </div>
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
        )
    }
});