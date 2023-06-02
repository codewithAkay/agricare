module.exports=(sequelize,DataTypes)=>{
    const register=sequelize.define('register',{
        name:{type:DataTypes.STRING,
            unique:false,
            allowNull:false
        },
        email:{type:DataTypes.STRING,
            unique:true,
            allowNull:false
        },    
        password:{type:DataTypes.STRING,
        allowNull:false},

        type:{type:DataTypes.STRING,
        allowNull:false}
        
    })
    return register
}