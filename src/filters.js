export default {
    testType: function(substance, filters) {
        debugger;
        return true
    },
    substanceType: function(substance, filters) {
        return substance.type === filters.substanceType
    },
    date: function(substance, filters) {
        debugger;
        return true
    }
}