const schema = require('../Models/schema')

exports.addNewPost = async (req, res, next) => {
    const myName = req.body.data;
    try{
        const newData = new schema(
            {
                Name: myName,
            }
        )
        const saveData = await newData.save()
        console.log("success!")
        res.send("success!");
    }catch(err){
        res.json(err);
    }
}

exports.data = async (req, res, next) => {
    try{
        res.send({"name":"John", "age":30, "car":null});
    }catch(err){
        res.json(err);
    }
}