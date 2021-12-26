import { Table, Pagination, Input, Space, Button } from "antd";

const { Search } = Input;

const FormWrapper = (props) => {
  const { 
    title,
    children
  } = props

  return (
    <div>
      <div className="row">
        <div className="col-md-12 col-12">
          <h4>{title}</h4>
        </div>
        <br />
        <div className="col-md-6 col-12">
          {children}
        </div>
      </div>
    </div>
  )
}

export default FormWrapper;