import { DataTypes, Model } from 'sequelize'

import { sequelize } from '../database/config'

export class User extends Model {
  public id!: number
  public name!: string
  public password!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
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
    tableName: 'users',
    timestamps: true
  }
)
