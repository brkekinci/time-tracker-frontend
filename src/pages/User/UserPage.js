import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Nav } from "@themesberg/react-bootstrap";
import { useEffect, useState } from "react";

import IndexTable from "../../components/IndexTable";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { PageRoutes } from "../../routes.js";

import { delete_user, get_users } from "../../actions/user.actions";
import { clearData } from "../../actions/global.actions";
import AddNewButton from "../../components/AddNewButton";
import TableButtons from "../../components/TableButtons";

const UserPage = (props) => {
  const { users, loading } = props;

  // const history = useHistory();

  useEffect(() => {
    props.get_users();

    return () => {
      props.clearData();
    };
  }, []);

  const [deleted, setDeleted] = useState(false);

  const renderRows = () => {
    return users.map((value, index) => {
      if (index != users.length ) {
        return (
          <tr key={index}>
            <td className="fw-bold text-center">{index + 1}</td>
            <td className="fw-bold text-center">{value.name}</td>
            <td className="fw-bold text-center">{value.api_key}</td>

            <td className="fw-bold text-center">
              <TableButtons
                deleted={deleted}
                setDeleted={setDeleted}
                delete_action={props.delete_user}
                id={value.user_id}
                route={PageRoutes.User}
              />
            </td>
          </tr>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div style={{backgroundColor:"#B1D4E0"}} className="py-4">
        <br />

        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
          <h4 className="ms-4" style={{ display: "inline" }}>{"Users"}</h4>
          <AddNewButton className route={PageRoutes.User} />
        </div>
      </div>

      <IndexTable
        headerProps="text-center"
        headers={[
          { label: "#", value: "", sortable: false },
          {
            label: "Name",
            value: "name",
            sortable: false,
          },
          {
            label: "API Key",
            value: "api_key",
            sortable: false,
          },
          { label: "", value: "", sortable: false },
        ]}
        renderRows={users?.length > 1 ? renderRows() : null}
        loading={loading}
      />
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    userReducer: { users, get_users_loading },
  } = state;
  return {
    users,
    loading: get_users_loading,
  };
};

export default connect(mapStateToProps, {
  delete_user,
  get_users,
  clearData,
})(UserPage);
