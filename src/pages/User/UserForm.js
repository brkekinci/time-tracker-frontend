import { Card, Col, Row } from "@themesberg/react-bootstrap";
import { useEffect, useState } from "react";
import { change, Field, initialize, reduxForm } from "redux-form";

import SubmitButton from "../../components/SubmitButton";
import renderInput from "../../components/RenderInput";

import { clearData } from "../../actions/global.actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { required } from "../../helpers/validator";
import _ from "lodash";

const UserForm = (props) => {
  const { initials, onSubmit, invalid } = props;

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

  return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Card border="light" className="bg-white shadow-sm mb-4  w-50 mx-auto">
            <Card.Body>
              <h5 className="mb-4">{"User Form"}</h5>
              <Row className="mb-3 ">
                <Col md={6} sm={12}>
                  <Field
                    name="name"
                    label="Name"
                    component={renderInput}
                    validate={required}
                  />
                </Col>
                <Col md={6} sm={12}>
                  <Field
                    name="api_key"
                    label="API Key"
                    component={renderInput}
                    validate={required}
                  />
                </Col>
              </Row>
              <hr />
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <a
                  onClick={() => window.history.back()}
                  className="btn btn-secondary"
                >
                  Back
                </a>
                <SubmitButton
                //   invalid={invalid}
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
  const {} = state;
  return {};
};
export default compose(
  connect(mapStateToProps, { clearData, initialize, change }),
  reduxForm({
    form: "user",
  })
)(UserForm);
