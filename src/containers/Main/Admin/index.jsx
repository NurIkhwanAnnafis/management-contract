import { columns, data } from "./config/table";
import Table from '../../../components/Table/Table'

const index = (props) => {

  return (
    <div>
      <Table 
        columns={columns} 
        dataSource={data} 
        title="Master Admin" 
      />
    </div>
  )
}

export default index;