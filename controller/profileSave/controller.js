function controller(req,res){
    console.log('req.body: ', req.body)
    console.log('req.params\n',req.params)
    console.log('req.headers\n',req.headers)
}

module.exports = controller