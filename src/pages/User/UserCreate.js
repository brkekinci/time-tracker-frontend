import { clearData } from "../../actions/global.actions.js";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useEffect } from "react";
import { connect } from "react-redux";
import { create_user } from "../../actions/user.actions";
import UserForm from "./UserForm";
import _ from "lodash";

function UserCreate(props) {
  const { datas, loading } = props;

  useEffect(() => {
    return () => {
      props.clearData();
    };
  }, []);

  const onSubmit = (formValues) => {
    if (!_.isEmpty(formValues) && formValues.isValid) {
      props.create_user(formValues);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="mt-3">
          <UserForm datas={datas} onSubmit={onSubmit} />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  const {} = state;
  return {
    datas: {},
    loading: false,
  };
};

export default connect(mapStateToProps, {
  create_user,
  clearData,
})(UserCreate);
