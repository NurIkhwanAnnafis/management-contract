import { Table, Pagination, Input, Space, Button } from "antd";

const { Search } = Input;

const index = (props) => {
  const { columns, dataSource, onSearch, title } = props
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h4>{title}</h4>
        </div>
        <div className="col-8 col-md-4">
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
        <div className="col-4 col-md-2">
          <Button type="primary" style={{ width: '100%' }}>{`Create`}</Button>
        </div>
      </div>
      <br />
      <Table columns={columns} dataSource={dataSource} scroll={{ y: 240 }} pagination={false} />
      <br />
      <div className="text-end">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  )
}

export default index;