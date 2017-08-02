/**
 * Created by sakinashivji on 8/1/17.
 */

// creating a list out of everything we want

// Include React
var React = require("react");

var Link = require("react-router").Link;

var Person = require("./Person.js")

var PeopleList = React.createClass({


    render: function () {


        return (

            <div>

{/*
                Look up .map (almost like for loops)
*/}
                {this.props.people.map((person, index) =>

                    <Person

                        firstname={person.firstname}
                        lastname={person.lastname}

                    />
                    )
                }
            </div>
        )

    }


});

module.exports = PeopleList;

