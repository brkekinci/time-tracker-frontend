import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AddNewButton = ({ text, route, link }) => {
  return (
    <Link
      className="me-5 btn btn-primary py-2 px-3"
      to={link ? link : route.Create.path}
    >
      <i className="fa fa-plus pe-2" />
      {text || "Add New"}
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(AddNewButton);
