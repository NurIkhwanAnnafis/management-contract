import { Table } from "antd";
import { columns, data } from "./config/table";

const index = () => {

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default index;