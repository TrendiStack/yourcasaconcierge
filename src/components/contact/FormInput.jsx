const FormInput = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  touched,
  errors,
}) => {
  return (
    <input
      className={`bg-transparent placeholder:bg-transparent border-b rounded-none border-primary
        border-opacity-50 focus:outline-none  focus:placeholder-white
        ${
          touched && errors
            ? 'border-red-500 bg-transparent placeholder:text-red-500'
            : 'placeholder-primary placeholder:text-lg'
        }`}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default FormInput;
