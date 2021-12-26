import { Table, Pagination, Input, Space, Button } from "antd";

const { Search } = Input;

const index = (props) => {
  const { 
    columns, 
    dataSource, 
    onSearch, 
    title,
    buttonCreate,
  } = props

  return (
    <div>
      <div className="row">
        <div className="col-md-7">
          <h4>{title}</h4>
        </div>
        <div className="col-4 col-md-5 d-flex justify-content-end">
          <Search placeholder="input search text" onSearch={onSearch} enterButton style={{ width: 300 }} />
          {buttonCreate && <Button type="primary" className="ms-3" style={{ width: 200 }}>{`Create`}</Button>}
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