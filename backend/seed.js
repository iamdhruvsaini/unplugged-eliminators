const User = require("./models/User")

const data={
    name:"Bhoumik",
    email:"bhoumikchopra07@gmail.com",
    img:"heheh",
}
let seedJs=async()=>{
    await User.create(data);
}
module.exports=seedJs;