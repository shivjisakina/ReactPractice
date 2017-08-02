/**
 * Created by sakinashivji on 7/30/17.
 */
// Include React
var React = require("react");

var Link = require("react-router").Link;

var PeopleList = require("./PeopleList.js");


var Home = React.createClass({

    getInitialState: function() {

        return {

            people: []

        }
    },

    //What information is gonna be on the page in HTML (GET ROUTE)
    componentWillMount: function () {

        fetch('/getpeople', {

            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },

        }).then((response) => response.json())
            .then((results) => {

            this.setState({
                people: results
            })

            })

    },

    render: function () {

        console.log(this.state.people)

        return (

            <div>

            <h3>Hello World</h3>
            <Link to="/login">login</Link>

            <PeopleList
                people = {this.state.people}
            />

            </div>
        )

    }

});

module.exports = Home;
