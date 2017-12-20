module.exports = (sequelize, DataTypes) => {
    const reciepts = sequelize.define("reciepts", {
        table: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        items: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sub_total: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.00,
            allowNull: true
        },
        tax: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.00,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL,
            defaultValue: 0.00,
            allowNull: false
        },
        paid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });

    return reciepts;
}