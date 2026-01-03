import Model, {CreationAttributes, ModelStatic} from "sequelize/lib/model";

export abstract class BaseRepository<T extends Model> {
  protected model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async create(createObject: CreationAttributes<T>): Promise<T> {
    try {
      const res = await this.model.create(createObject);
      return res;
    } catch (e) {
      throw e;
    }
  }

  async findById(id: any): Promise<T | null> {
    try {
      const res = await this.model.findByPk(id);
      return res;
    } catch (e) {
      throw e;
    }
  }

  async findAll(): Promise<T | null> {
    try {
      const res = this.model.findAll();
      return res;
    } catch (e) {
      throw e;
    }
  }
}
