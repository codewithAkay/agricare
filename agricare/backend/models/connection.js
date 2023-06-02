const {Sequelize,DataTypes}=require('sequelize')

const sequelize=new Sequelize({
    dialect:'sqlite',
    storage:'./db.db',
    logging:false
})

try {
    sequelize.authenticate()
    console.log('Connected Successsfully')
} catch (error) {
    console.log(error)

}

const db={}

db.sequelize=sequelize
db.Sequelize=Sequelize
db.register=require("./registre")(sequelize,DataTypes)
db.login=require("./login")(sequelize,DataTypes)
db.postcrops=require("./crops")(sequelize,DataTypes)


db.sequelize.sync({})

module.exports=db
