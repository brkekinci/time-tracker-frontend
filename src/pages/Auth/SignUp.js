import { Card, Col, Row } from "@themesberg/react-bootstrap";
import { useEffect, useState } from "react";
import {
  change,
  Field,
  initialize,
  reduxForm,
  formValueSelector,
} from "redux-form";

import SubmitButton from "../../components/SubmitButton";
import renderInput from "../../components/RenderInput";

import { clearData } from "../../actions/global.actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { required } from "../../helpers/validator";
import _ from "lodash";

const selector = formValueSelector("signup");

const SignUp = (props) => {
  const { initials, onSubmit, invalid, PASSWORD, CONFIRMPASSWORD } = props;

  const [passwordMatch, setPasswordMatch] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    {
      !_.isEmpty(initials)
        ? props.initialize({
            ...initials,
          })
        : props.initialize({});
    }
    return () => {
      props.clearData();
    };
  }, []);

  useEffect(() => {
    props.change("isValid", !invalid);
  }, [invalid]);

  useEffect(() => {
    if (password && confirmPassword && password === confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [password, confirmPassword]);

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Card
            border="light"
            className="bg-white shadow-sm mb-4  w-50 mx-auto"
          >
            <Card.Body>
              <h5 className="mb-4">{"Sign Up"}</h5>
              <Row className="mb-3 ">
                <Col md={12} sm={12}>
                  <Field
                    name={"email"}
                    label={"Email"}
                    component={renderInput}
                    validate={required}
                  />
                </Col>
              </Row>
              <Row className="mb-3 ">
                <Col md={12} sm={12}>
                  <Field
                    name={"password"}
                    label={"Password"}
                    inputType="password"
                    component={renderInput}
                    validate={required}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="mb-3 ">
                <Col md={12} sm={12}>
                  <Field
                    name={"confirmPassword"}
                    label={"Confirm Password"}
                    inputType="password"
                    component={renderInput}
                    validate={required}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Col>
              </Row>
              <hr />
              {!passwordMatch ? (
                <span className="text-danger">Passwords Don't Match</span>
              ) : null}
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <a
                  onClick={() => window.history.back()}
                  className="btn btn-secondary"
                >
                  Back
                </a>
                <SubmitButton
                  //   invalid={invalid}
                  disabled={!passwordMatch}
                  onSubmit={onSubmit}
                  text={"Submit"}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} lg={4} md={12} sm={12} xs={12}></Col>
      </Row>
    </form>
  );
};

const mapStateToProps = (state) => {
  const PASSWORD = selector(state, "password");
  const CONFIRMPASSWORD = selector(state, "confirmPassword");
  const {} = state;
  return {
    PASSWORD,
    CONFIRMPASSWORD,
  };
};
export default compose(
  connect(mapStateToProps, { clearData, initialize, change }),
  reduxForm({
    form: "signup",
  })
)(SignUp);
