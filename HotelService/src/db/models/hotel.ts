import { CreationOptional, InferAttributes, InferCreationAttributes, IntegerDataType, Model } from "sequelize";

class Hotel extends Model<InferAttributes<Hotel>,InferCreationAttributes<Hotel>>{
    declare id: CreationOptional<number>;
    declare name:String;
    declare address : String;
    declare location:String;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
    declare rating_count: IntegerDataType;
    declare rating: 
}