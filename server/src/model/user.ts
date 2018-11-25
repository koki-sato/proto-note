import * as Sequelize from 'sequelize'

import { sequelize } from '../database/config'

interface Attributes {
  id?: number
  name: string
  password: string
}

interface Instance extends Sequelize.Instance<Attributes> {}

interface User extends Sequelize.Model<Instance, Attributes> {}

export const User = sequelize.define<Instance, Attributes>('users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})
