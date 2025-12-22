/* eslint-env node */
/* global process */
import dotenv, { config } from "dotenv";
dotenv.config();

config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

export const { NODE_ENV } = process.env;
