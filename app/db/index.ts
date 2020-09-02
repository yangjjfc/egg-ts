import { v1 as uuidv1 } from 'uuid'; // 唯一标识
function generateUUID() {
  return uuidv1().replace(/-/g, '');
}

function defineModel(app, name, attributes) {
  const { UUID } = app.Sequelize;

  const attrs: any = {};
  for (const key in attributes) {
    const value = attributes[key];
    if (typeof value === 'object' && value.type) {
      value.allowNull = value.allowNull && true;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: true,
      };
    }
  }

  attrs.id = {
    type: UUID,
    primaryKey: true,
    defaultValue: () => {
      return generateUUID();
    },
  };

  return app.model.define(name, attrs, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    version: true,
    freezeTableName: true,
  });
}

export default defineModel;
