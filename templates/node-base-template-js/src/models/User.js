const { DataTypes } = require("sequelize");
const sequelize = require("../database/mysql");

const User = sequelize.define(
  "user",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false },
    user_name: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    profile_path: { type: DataTypes.STRING, allowNull: true },
    first_name: { type: DataTypes.STRING, allowNull: false },
    middle_name: { type: DataTypes.STRING, allowNull: true },
    last_name: { type: DataTypes.STRING, allowNull: true },
    phone_number: { type: DataTypes.STRING, allowNull: false },
    is_active: { type: DataTypes.ENUM("0", "1"), defaultValue: "1" },
    hash_username: { type: DataTypes.STRING, allowNull: true },
    password_attempt_count: { type: DataTypes.STRING, allowNull: true },
    hash_generated_date: { type: DataTypes.DATE, allowNull: true },
    last_login: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    created_by: { type: DataTypes.INTEGER, allowNull: false },
    updated_at: { type: DataTypes.DATE, allowNull: true },
    updated_by: { type: DataTypes.INTEGER, allowNull: true },
    deleted_at: { type: DataTypes.DATE, allowNull: true },
    deleted_by: { type: DataTypes.INTEGER, allowNull: true },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);

module.exports = { User };
