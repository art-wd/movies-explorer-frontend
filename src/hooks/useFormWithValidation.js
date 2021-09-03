import React, { useCallback } from "react";

const useFormWithValidation = () => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (evt) => {
    const input = evt.target;

    setValues({
      ...values,
      [input.name]: input.value
    });
    setErrors({
      ...errors,
      [input.name]: input.validationMessage
    });
    setIsValid(input.closest("form").checkValidity());
  };

  const resetFrom = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    setValues,
    errors,
    setErrors,
    isValid,
    setIsValid,
    handleChange,
    resetFrom,
  };
};

export default useFormWithValidation;
