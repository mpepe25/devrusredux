module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        uid: {
            type: DataTypes.STRING,
            unique: true
        }
    })
    user.associate = function(models){
        user.hasMany(models.event)
    }
    return user;
}