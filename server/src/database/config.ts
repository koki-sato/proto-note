import * as Sequelize from 'sequelize'

export const sequelize = new Sequelize(process.env.DATABASE_URL as string, { dialect: 'mysql' })