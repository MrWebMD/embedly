import {Model, DataTypes} from 'sequelize';

import sequelize from './dbconfig.js';

class Embed extends Model {}

Embed.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    shortKey: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    siteName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },
    redirect: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "embed",
    timestamps: true,
  }
);

export default Embed;
