import { PUBLIC_STATION_TRAIN_TABLE_URL } from "@utils";
import { TrainData } from "./types";
import { onlineTabloStub } from "./stub";

export function connectToTrainTimeTableWS({
  stationId = "19390",
  callback = (data: TrainData) => {},
}) {
  const ws = new WebSocket(
    `wss:${PUBLIC_STATION_TRAIN_TABLE_URL}/${stationId}`
  );

  ws.onopen = () => {
    console.log("WebSocket соединение установлено.");
  };

  ws.onmessage = (data) => {
    try {
      console.log("Получены данные:", data);
      const trainData: TrainData = JSON.parse(data.data);
      callback(trainData);
    } catch (error) {
      console.error("Ошибка при разборе данных:", error);
      console.log("Использована заглушка");
      callback(onlineTabloStub);
    }
  };

  ws.onclose = () => {
    console.log("WebSocket соединение закрыто.");
  };

  ws.onerror = (error) => {
    console.error("Произошла ошибка WebSocket:", error);
    console.log("Использована заглушка");
    callback(onlineTabloStub);
  };
}
