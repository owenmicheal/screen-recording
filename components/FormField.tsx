import React from "react";

const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) => {
  const inputToRender =
    as === "input" ? "input" : as === "textarea" ? "textarea" : "select";
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormField;
