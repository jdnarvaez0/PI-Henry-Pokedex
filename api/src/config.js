const PORT = process.env.PORT || 3001;
const DB_HOST = process.env.DB_HOST || "localhost:5432";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || hack0840;
const DB_DATABASE = process.env.DB_DATABASE || "pokemon";

module.exports = { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE };
