const {
    profile,
} = require('../../media')

function getFilterByKey(array,key,value){
    return array.filter(function(e){
        return e[key] == value
    })
}

function controller(req,res){
    console.log(req.params.id)
    let user = getFilterByKey(profile,"id",req.params.id)
    res.json(user)
}

module.exports = controller