import Model, {CreationAttributes, ModelStatic} from "sequelize/lib/model";

export class BaseRepository<T extends Model> {
  protected model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async createHotel(createObject: CreationAttributes<T>): Promise<T> {
    try {
      const res = await this.model.create(createObject);
      return res;
    } catch (e) {
      throw e;
    }
  }
}
