module.exports=(sequelize,DataTypes)=>{
    const postCrop = sequelize.define('postcrop', {
        cropName: {
            type:DataTypes.STRING,
            allowNull: false,
          },
          cropType: {
            type:DataTypes.STRING,
            allowNull: false,
            },
          quantity: {
            type:DataTypes.INTEGER,
            allowNull: false,
            },
          pricePerUnit: {
            type:DataTypes.INTEGER,
            allowNull: false,
            },
          description: {
            type:DataTypes.STRING,
            allowNull: false,
            },
          image: {
            type:DataTypes.TEXT,
            allowNull:false,
             },
             location:{
                type:DataTypes.STRING,
                allowNull:false
             }
           });
    return postCrop
}