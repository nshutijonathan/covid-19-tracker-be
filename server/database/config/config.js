const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  development: {
    username: process.env.DATABASEUSER,
    password: process.env.DATABASEPASSWORD,
    database: process.env.DEVDATABASE,
    host: process.env.HOST,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    // DATABASE_URL: process.env.DATABASE_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    ssl: true,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false, // This line will fix new error
      },
    },
  },
};
