import { useEffect, useState } from "react";
import { connectToTrainTimeTableWS } from "@model/trainTimeTable";
import { TrainData } from "@model/trainTimeTable/types";
import { Nullable } from "@utils";
import { Layout, LayoutRow, Tab, Table, Tabs, Typography } from "@components";
import { ArrivalDepCell, RouteCell } from "./components";

const columns = [
  {
    title: "№ поезда",
    dataIndex: "train_number",
    key: "train_number",
    width: 150,
    className: "color-secondary",
  },
  {
    title: "Категория",
    dataIndex: "category_short_name",
    key: "train_number",
    width: 200,
    className: "color-secondary",
  },
  {
    title: "Прибытие",
    dataIndex: "arrival",
    key: "train_number",
    width: 100,
    render: ArrivalDepCell,
  },
  {
    title: "Отправление",
    dataIndex: "departure",
    key: "train_number",
    width: 100,
    render: ArrivalDepCell,
  },
  {
    title: "Сообщение",
    dataIndex: "route",
    key: "train_number",
    render: RouteCell,
  },
  {
    title: "Путь",
    dataIndex: "path",
    key: "train_number",
    width: 50,
  },
  {
    title: "Платформа",
    dataIndex: "platform",
    key: "train_number",
    width: 50,
  },
];

//@ts-ignore
const TrainTimeTable = ({ title = "", stationId = "" }) => {
  const [tableData, setTableData] = useState<Nullable<TrainData>>(null);
  useEffect(() => {
    connectToTrainTimeTableWS({ stationId, callback: setTableData });
  }, []);

  const { all, arrival, departure } = tableData || {};

  return (
    <Layout cols="1" className="bg-color-secondary p-6">
      {title && (
        <LayoutRow className="mb-10">
          <Typography variant="h2">{title}</Typography>
        </LayoutRow>
      )}
      <LayoutRow>
        <Tabs>
          <Tab text="Все">
            <Tabs>
              <Tab text="Все">
                <div className="w-full">
                  <Table
                    columns={columns}
                    data={[
                      ...(all?.long_distance || []),
                      ...(all?.suburban || []),
                    ]}
                  />
                </div>
              </Tab>
              <Tab text="Дальние">
                <div className="bg-color-primary-white px-6 w-full">
                  <Table columns={columns} data={all?.long_distance} />
                </div>
              </Tab>
              <Tab text="Пригородные">
                <div className="bg-color-primary-white px-6 w-full">
                  <Table columns={columns} data={all?.suburban} />
                </div>
              </Tab>
            </Tabs>
          </Tab>
          <Tab text="Отправление">
            <Tabs>
              <Tab text="Все">
                <div className="bg-color-primary-white px-6 w-full">
                  <Table
                    columns={columns}
                    data={[
                      ...(departure?.long_distance || []),
                      ...(departure?.suburban || []),
                    ]}
                  />
                </div>
              </Tab>
              <Tab text="Дальние">
                <div className="bg-color-primary-white px-6 w-full">
                  <Table columns={columns} data={departure?.long_distance} />
                </div>
              </Tab>
              <Tab text="Пригородные">
                <div className="bg-color-primary-white px-6 w-full">
                  <Table columns={columns} data={departure?.suburban} />
                </div>
              </Tab>
            </Tabs>
          </Tab>
          <Tab text="Прибытие">
            <Tabs>
              <Tab text="Все">
                <div className="bg-color-primary-white px-6 w-full">
                  <Table
                    columns={columns}
                    data={[
                      ...(arrival?.long_distance || []),
                      ...(arrival?.suburban || []),
                    ]}
                  />
                </div>
              </Tab>
              <Tab text="Дальние">
                <div className="bg-color-primary-white px-6 w-full">
                  <Table columns={columns} data={arrival?.long_distance} />
                </div>
              </Tab>
              <Tab text="Пригородные">
                <div className="bg-color-primary-white px-6 w-full">
                  <Table columns={columns} data={arrival?.suburban} />
                </div>
              </Tab>
            </Tabs>
          </Tab>
        </Tabs>
      </LayoutRow>
    </Layout>
  );
};

export default TrainTimeTable;
