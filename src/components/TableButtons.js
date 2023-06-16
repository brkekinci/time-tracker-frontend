import { OverlayTrigger, Tooltip } from "@themesberg/react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import onDelete from "../helpers/deleteFunction";

const TableButtons = ({
  deleted,
  setDeleted,
  delete_action,
  id,
  route,
}) => {
  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip className="m-0">{"Delete"}</Tooltip>}
      >
        <button
          onClick={() => {
            onDelete(deleted, setDeleted, delete_action, id);
          }}
          className="btn btn-danger mx-2"
          style={{ width: "44px" }}
        >
          <i className="fa fa-trash" />
        </button>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip className="m-0">{"Edit"}</Tooltip>}
      >
        <Link
          to={route.Edit.path.replace(":id", id)}
          className="btn btn-primary mx-2"
        >
          <i className="fa fa-edit" />
        </Link>
      </OverlayTrigger>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(TableButtons);
