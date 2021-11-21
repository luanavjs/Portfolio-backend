const {
    projects,
} = require('../../media')

function controller(req,res){
    res.json(projects)
}

module.exports = controller