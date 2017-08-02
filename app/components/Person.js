/**
 * Created by sakinashivji on 8/1/17.
 */

// how person will show up on the page

/**
 * Created by sakinashivji on 8/1/17.
 */

// creating a list out of everything we want

// Include React
var React = require("react");

var Link = require("react-router").Link;

// const { missions, missiontasks, toggleMissionTask, deleteMission, deleteMissionTask, completeMission } = this.props;

var Person = React.createClass({


    render: function () {

        return (

            <div>
                <h1>{this.props.firstname}</h1>
                <h1>{this.props.lastname}</h1>
            </div>

        )

    }


});

module.exports = Person;

