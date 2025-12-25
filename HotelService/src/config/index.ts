//inside this file all the basic configuration logic for app server to work
//db connection done here
import dotenv from "dotenv";

type ServerConfig = {
  PORT: number;
};

type dbConfig = {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
};

export function loadConfig(): void {
  dotenv.config();
}

loadConfig();

export let serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 3001
};

export let dbConfig: dbConfig = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "bankai07",
  database: process.env.DB_NAME || "AIRBNB_DATABASE",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: "mysql"
};
