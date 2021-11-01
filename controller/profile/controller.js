const {
    profile,
} = require('../../media')

function controller(req,res){
    res.json(profile)
}

module.exports = controller