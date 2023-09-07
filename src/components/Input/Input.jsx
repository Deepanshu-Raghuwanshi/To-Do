const Input = ({ changeHandler, value, keyHandler }) => {
  return (
    <input
      type="text"
      onChange={changeHandler}
      value={value}
      onKeyUp={keyHandler} 
    />
  );
};

export default Input;
