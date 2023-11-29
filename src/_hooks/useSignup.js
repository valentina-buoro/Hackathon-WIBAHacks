import { useState } from 'react';


const useSignup = (initialState, callback) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    values,

    handleChange,

    handleSubmit,

  };
};

export default useSignup;

