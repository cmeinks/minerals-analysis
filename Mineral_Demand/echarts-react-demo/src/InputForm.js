import React from 'react';

const InputForm = ({ onDataChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newData = {
      name: formData.get('name'),
      value: parseInt(formData.get('value'), 10)
    };
    onDataChange(newData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="number" name="value" placeholder="Value" required />
      <button type="submit">Update Data</button>
    </form>
  );
};

export default InputForm;
