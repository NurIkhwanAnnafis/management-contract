import { columns } from "./config/table";
import Table from '../../../components/Table/Table'

const index = (props) => {

  return (
    <div>
      <Table 
        columns={columns} 
        dataSource={[]} 
        title="Master Roles"
        buttonCreate
      />
    </div>
  )
}

export default index;