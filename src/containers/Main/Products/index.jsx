import { columns } from "./config/table";
import Table from '../../../components/Table/Table'

const index = (props) => {

  return (
    <div>
      <Table 
        columns={columns} 
        dataSource={[]} 
        title="Products"
        buttonCreate
      />
    </div>
  )
}

export default index;