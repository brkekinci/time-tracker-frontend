import LoadingSpinner from "../../components/LoadingSpinner";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_user, update_user } from "../../actions/user.actions";
import UserForm from "./UserForm";
import _ from "lodash";
import { useParams } from "react-router-dom";

const UserEdit = (props) => {
  const { id } = useParams();
  const { user, loading } = props;

  const onSubmit = (formValues) => {
    if (!_.isEmpty(formValues) && formValues.isValid) {
      props.update_user(formValues);
    }
  };

  useEffect(() => {
    props.get_user(id);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return (
      <div className="mt-3">
        <UserForm onSubmit={onSubmit} initials={user} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    userReducer: { user, get_user_loading },
  } = state;

  return {
    user,
    loading: get_user_loading,
  };
};

export default connect(mapStateToProps, { get_user, update_user })(UserEdit);
