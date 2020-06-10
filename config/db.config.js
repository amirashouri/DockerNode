module.exports = {
    HOST: "DATABASE_URL",
    USER: "amirreza",
    PASSWORD: "mypass",
    DB: "testdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };