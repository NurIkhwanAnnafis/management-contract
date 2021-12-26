import { createContext } from "react";
import { useModelAdminForm } from "./ContextAdminForm";
import { useModelAdminList } from "./ContextAdminList"; 

export const ContextAdmin = createContext(null);

const ContextProviderAdmin = (props) => {
  const context = {
    useModelAdminForm,
    useModelAdminList
  };

  return (
    <ContextAdmin.Provider value={context}>
      {props.children}
    </ContextAdmin.Provider>
  )
}

export default ContextProviderAdmin;