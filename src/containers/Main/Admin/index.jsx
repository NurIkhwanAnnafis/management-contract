import { columns, data } from "./config/table";
import Table from '../../../components/Table/Table'
import { useContext } from 'react';
import { ContextAdmin } from './context/ContextProviderAdmin';

const index = (props) => {
  const context = useContext(ContextAdmin);
  const {
    listData,
    setListData,
  } = context.useModelAdminList();

  return (
    <div>
      <Table 
        columns={columns} 
        dataSource={data} 
        title="Master Admin"
        buttonCreate 
      />
    </div>
  )
}

export default index;