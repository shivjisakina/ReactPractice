/**
 * Created by sakinashivji on 7/30/17.
 */
// Include React
var React = require("react");

var Form = require("../components/Form");

var Login = React.createClass({

    getInitialState: function() {

        return {
            first: "Sakina",
            last: "Shivji"
        }
    },

    loginSubmit: function (creds) {

        var object = {
            firstname: creds.firstname,
            lastname: creds.lastname
        };

        console.log(creds)

        fetch('/formsubmit', {

            method: 'post',
            body: JSON.stringify(object),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },

        }).then((response) => response.json())
            .then((results) => {

            });



    },

    render: function () {

        return (

            <div>

                <h3>login</h3>
                <Form

                    submitForm = {this.loginSubmit}

                    firstname = {this.state.first}
                    lastname = {this.state.last}
                />

            </div>
        )

    }

})

module.exports = Login;
