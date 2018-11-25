import * as Sequelize from 'sequelize'

import { sequelize } from '../database/config'

interface Attributes {
  id?: number
  uuid: string
  user_id: number
  title: string
  markdown: string
  body: string
}

interface Instance extends Sequelize.Instance<Attributes> {}

interface Note extends Sequelize.Model<Instance, Attributes> {}

export const Note = sequelize.define<Instance, Attributes>('notes', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  uuid: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  markdown: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
})
