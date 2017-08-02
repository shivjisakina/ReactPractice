/**
 * Created by sakinashivji on 8/1/17.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeopleSchema = new Schema ({

    firstname: {
        type: String
    },

    lastname: {
        type: String
    }

})

// Model Article Created
const People = mongoose.model('people', PeopleSchema);

// Export Article
module.exports = People;
