const {
    projects,
} = require('../../media')

function getFilterByKey(array,key,value){
    return array.filter(function(e){
        return e[key] == value
    })
}

function controller(req,res){
    console.log(req.params.id)
    let project = getFilterByKey(projects,"id",req.params.id)
    res.json(project)
}

module.exports = controller