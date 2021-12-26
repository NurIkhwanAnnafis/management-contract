import FormWrapper from '../../../../components/Form/Form'
import { useContext } from 'react';
import { ContextAdmin } from '../context/ContextProviderAdmin';
import FormAdmin from '../form';

const index = (props) => {
  const context = useContext(ContextAdmin);
  const {
    form,
    setForm,
  } = context.useModelAdminForm();

  return (
    <div>
      <FormWrapper 
        title="Master Admin" 
      >
        <FormAdmin />
      </FormWrapper>
    </div>
  )
}

export default index;