/**
 * Created by sakinashivji on 7/30/17.
 */
// Include React
var React = require("react");

var Link = require("react-router").Link;


var Home = React.createClass({

    render: function () {

        return (

            <div>

            <h3>Hello World</h3>
            <Link to="/login">login</Link>

            </div>
        )

    }

});

module.exports = Home;
