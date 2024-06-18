const user = require("../modules/users");


/*const signupPage = async(req,res)=>{
    return res.render();
}

const loginPage = async (req, res) => {
    return res.render();
  };*/
const createNewAccount = async(req,res)=>{
    const body = req.body;
    if(!body || !body.first_name || !body.last_name ||!body.user_name || !body.age || !body.password){
        return res.status(400).send("all fields are required");
    }

    await user.create({
        username:body.user_name,
        firstname:body.first_name,
        lastname:body.last_name,
        age:body.age,
        password:body.password
    });
    return res.send("DONE");
}
const loginAccount= async (req,res)=>{
    const {username , password} = req.body;

    const users = await user.findOne({username , password});
    if(!users) return res.status(401).send("invalid username or password");
    
    res.status(200).json({message : "login successfull"});

}

module.exports={
    createNewAccount , 
    loginAccount,
    
};