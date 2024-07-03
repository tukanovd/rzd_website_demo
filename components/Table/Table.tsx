import RCTable from "rc-table";
import { BodyCell } from "./TableBody";
import { HeaderRow, HeaderCell } from "./TableHeader";

const components = {
  header: {
    row: HeaderRow,
    cell: HeaderCell,
  },
  body: {
    cell: BodyCell,
  },
};

const Table = ({ data, columns }: any) => {
  return (
    <RCTable
      className="overflow-scroll w-full bg-color-primary-white"
      rowClassName="border-b-2 border-common"
      columns={columns}
      data={data}
      components={components}
    />
  );
};

export default Table;
