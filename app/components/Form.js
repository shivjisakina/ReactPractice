var React = require("react");

var Form = React.createClass({

    onFormSubmit: function(e){
        e.preventDefault();

        var creds = {};

        var firstname = this.refs.firstname.value;

        var lastname = this.refs.lastname.value;

        creds.firstname = firstname;

        creds.lastname = lastname;

        this.props.submitForm(creds)
    },

    render: function () {

        return (

            <div>

                <form onSubmit={this.onFormSubmit}>
                    First name:<br />
                    <input type="text" ref="firstname" value={this.props.firstname}/><br />
                    Last name:<br />
                    <input type="text" ref="lastname" value={this.props.lastname}/>

                    <button type="submit">Submit</button>
                </form>

            </div>
        )

    }

});

module.exports = Form;