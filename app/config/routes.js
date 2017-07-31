// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var browserHistory = router.browserHistory;

var IndexRoute = router.IndexRoute;

var Main = require("../components/Main");
var Home = require("../components/Home");
var Login = require("../components/Login");

// Export the Routes
module.exports = (

    <Router history={browserHistory}>
        <Route component={Main}>

            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />

        </Route>
    </Router>

);
