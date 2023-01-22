const Input = ({ handlerChange, dataValue }) => {
  return (
    <div className="w-full ">
      <input
        className="w-full "
        type="text"
        placeholder="کالای خود را بنویسید"
        onChange={handlerChange}
        value={dataValue}
      />
    </div>
  );
};

export default Input;
