const {
    profile,
} = require('../../media')

const fs = require('fs')

function controller(req,res){
    try{
        console.log('req.body: ', req.body);
        console.log('req.headers\n',req.headers);
        let data = profile;
        data.push(req.body);
        console.log(data);
        fs.writeFileSync('media/profile.json',JSON.stringify(data));
        return res.status(200).send("Ok!");
    } catch(error){
        console.log(error);
        return res.status(500).send("Error creando profile");
    }
}

module.exports = controller