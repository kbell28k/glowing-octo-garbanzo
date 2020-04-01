module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    item_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    item_zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    item_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    item_trade: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1]
    },
    item_image: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1]
    }
  });

  Post.associate = function (models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
