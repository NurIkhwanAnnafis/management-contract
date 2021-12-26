import { columns } from "./config/table";
import Table from '../../../components/Table/Table'

const index = (props) => {
  return (
      <Table 
        columns={columns} 
        dataSource={[]} 
        title="Cash Flow Statement"
      />
  )
}

export default index;