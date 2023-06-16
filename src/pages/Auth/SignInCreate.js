import { clearData } from "../../actions/global.actions.js";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useEffect } from "react";
import { connect } from "react-redux";
import { sign_in } from "../../actions/auth.actions.js";
import _ from "lodash";
import SignIn from "./SignIn.js";

function SignInCreate(props) {
  const { datas, loading } = props;

  useEffect(() => {
    return () => {
      props.clearData();
    };
  }, []);

  const onSubmit = (formValues) => {
    if (!_.isEmpty(formValues) && formValues.isValid) {
      props.sign_in(formValues);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="mt-3">
          <SignIn datas={datas} onSubmit={onSubmit} />
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
  sign_in,
  clearData,
})(SignInCreate);
