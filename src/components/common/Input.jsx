const Input = ({ formik, name, id, label, type = "text", className }) => {
  return (
    <div className="flex flex-col py-1 ">
      <label htmlFor={id} className="mb-1 font-medium text-[#3b82f6]  hover:text-[#3b82f6] ">{label}</label>
      <input
        className={className}
        name={id}
        {...formik.getFieldProps(id)}
        id={id}
        placeholder={`${name} خود را وارد کنید `}
        type={type}
      />
      {formik.errors[id] && formik.touched[id] && (
        <div className="text-red-600 text-sm">{formik.errors[id]}</div>
      )}
    </div>
  );
};

export default Input;
