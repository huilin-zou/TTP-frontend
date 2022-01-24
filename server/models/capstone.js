const sequelizedb=require('../config/sequelizedb')
const {Sequelize}=require('../config/sequelizedb')

const capstone=sequelizedb.define('userinfo',{
    user_id:{
        type:Sequelize.String
    },
    username:{
        type:Sequelize.String
    },
    password:{
        type:Sequelize.String
    },
    email:{
        type:Sequelize.String
    }
    
})

module.exports=capstone;