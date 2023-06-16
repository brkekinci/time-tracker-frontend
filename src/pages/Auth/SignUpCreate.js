import { clearData } from "../../actions/global.actions.js";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useEffect } from "react";
import { connect } from "react-redux";
import { sign_up } from "../../actions/auth.actions.js";
import _ from "lodash";
import SignUp from "./SignUp.js";

function SignUpCreate(props) {
  const { datas, loading } = props;

  useEffect(() => {
    return () => {
      props.clearData();
    };
  }, []);

  const onSubmit = (formValues) => {
    if (!_.isEmpty(formValues) && formValues.isValid) {
      props.sign_up(formValues);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="mt-3">
          <SignUp datas={datas} onSubmit={onSubmit} />
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
  sign_up,
  clearData,
})(SignUpCreate);
