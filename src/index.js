const arrayFeatures = [
    "simsimi"
]
const allFeature = {}
arrayFeatures.forEach(function(e){
    allFeature[e] = require('./'+e);
})

module.exports = allFeature;