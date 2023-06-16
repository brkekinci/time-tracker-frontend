import { Form } from "@themesberg/react-bootstrap";

const RenderInput = ({
  input,
  label,
  placeholder,
  meta,
  inputType,
  onChange,
  value,
  className,
  disabled,
  inputProps,
  style,
  inputStyle,
}) => {
  return (
    <Form.Group className={className} style={style}>
      {label ? <Form.Label>{label}</Form.Label> : null}
      <Form.Control
        disabled={disabled}
        onChange={onChange}
        type={inputType}
        value={value}
        as="input"
        {...input}
        {...inputProps}
        placeholder={placeholder}
        style={inputStyle}
      />
      {meta.touched && meta.error ? (
        <span className="text-danger"> {meta.error} </span>
      ) : null}
    </Form.Group>
  );
};

export default RenderInput;
