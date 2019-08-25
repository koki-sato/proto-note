import { DataTypes, Model } from 'sequelize'

import { sequelize } from '../database/config'

export class Note extends Model {
  public id!: number
  public uuid!: string
  public userId!: number
  public title!: string
  public markdown!: string
  public body!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      field: 'user_id'
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    markdown: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    }
  },
  {
    sequelize,
    tableName: 'notes',
    timestamps: true
  }
)
