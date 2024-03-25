import type { StatisticData } from "./statisticData";

export type StatisticResponse = {
    data: StatisticData;
    message: string;
    statusCode: number;
  }