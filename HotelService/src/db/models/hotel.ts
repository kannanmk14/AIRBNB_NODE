import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model} from "sequelize";
import sequelize from "./sequelize";

class Hotel extends Model<InferAttributes<Hotel>, InferCreationAttributes<Hotel>> {
  declare id: CreationOptional<number>;
  declare name: String;
  declare address: String;
  declare location: String;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare rating_count?: number;
  declare rating?: number;
}

Hotel.init(
  {
    id: {
      type: "STRING",
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: "STRING",
      allowNull: false,
      validate: {
        len: [2, 100]
      }
    },
    address: {
      type: "STRING",
      allowNull: false,
      validate: {
        len: [1, 500]
      }
    },
    location: {
      type: "STRING",
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    createdAt: {
      type: "DATE",
      defaultValue: new Date()
    },
    updatedAt: {
      type: "DATE",
      defaultValue: new Date()
    },

    rating: {
      type: DataTypes.FLOAT,
      defaultValue: null
    },
    rating_count: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  },
  {
    sequelize,
    tableName: "hotels",
    underscored: true
  }
);

export default Hotel;
