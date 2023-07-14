import Error from './Error';

const FormInput = ({
  name,
  placeholder,
  type,
  value,
  checked,
  onChange,
  onBlur,
  touched,
  errors,
}) => {
  return (
    <>
      {name === 'inquiry' ? (
        <div>
          <label htmlFor={name} className="sr-only">
            {placeholder}
          </label>
          {/* Error Message */}
          {touched && errors && <Error error={errors} />}
          <textarea
            className={`bg-transparent placeholder:bg-transparent border-b rounded-none border-dark
                   border-opacity-50 focus:outline-none  focus:placeholder-light w-full
                   ${
                     touched && errors
                       ? 'bg-transparent placeholder:text-error'
                       : 'placeholder-dark placeholder:text-lg'
                   }`}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      ) : name === 'underManagement' ? (
        <div className="flex items-center gap-2">
          <input
            type={type}
            name={name}
            id={value}
            value={value}
            className="w-4 h-4
            appearance-none rounded-full border-2 border-dark border-opacity-50
            checked:bg-[#262323] focus:outline-none"
            onChange={onChange}
            onBlur={onBlur}
            checked={checked}
          />
          <label htmlFor={name} className="text-lg text-dark">
            {placeholder}
          </label>
        </div>
      ) : (
        <div>
          <label htmlFor={name} className="sr-only">
            {placeholder}
          </label>
          {/* Error Message */}
          {touched && errors && <Error error={errors} />}
          <input
            className={`bg-transparent placeholder:bg-transparent border-b rounded-none border-dark
          border-opacity-50 focus:outline-none  focus:placeholder-light w-full
          ${
            touched && errors
              ? 'bg-transparent placeholder:text-error'
              : 'placeholder-dark placeholder:text-lg'
          }`}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      )}
    </>
  );
};

export default FormInput;
