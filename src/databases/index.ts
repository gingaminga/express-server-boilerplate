import relationDatabaseConfig from "@databases/rdb/config";
import { redisClient, relationDatabaseClient } from "@loaders/database.loader";
import constants from "@utils/constants";

/**
 * @description 레디스 실행
 */
export const startRedis = async () => {
  const options = {
    host: constants.REDIS.HOST,
    port: constants.REDIS.PORT,
    password: constants.REDIS.PASSWORD,
  };
  await redisClient.initialized(options);
};

/**
 * @description 레디스 종료
 */
export const stopRedis = async () => {
  await redisClient.close();
};

/**
 * @description RDB 실행
 */
export const startRelationDatabase = async () => {
  await relationDatabaseClient.initialized(relationDatabaseConfig);
};

/**
 * @description RDB 종료
 */
export const stopRelationDatabase = async () => {
  await relationDatabaseClient.close();
};
