const {
    profile,
} = require('../../media')

function getFilterByKey(array,key,value){
    return array.filter(function(e){
        return e[key].toLowerCase() == value.toLowerCase()
    })
}

function controller(req,res){
    console.log(req.query)
    let user = getFilterByKey(profile,"apellido",req.query.apellido)
    res.json(user)
}

module.exports = controller