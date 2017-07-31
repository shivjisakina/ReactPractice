const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema ({

    firstname: {
        type: String
    },

    lastname: {
        type: String
    }

})

// Model Article Created
const Person = mongoose.model('Person', PersonSchema);

// Export Article
module.exports = Person;