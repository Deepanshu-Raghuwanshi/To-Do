const Button = ({ clickHandler, isDisabled, btnText, btnClass }) => {
  return (
    <button onClick={clickHandler} disabled={isDisabled} className={btnClass}>
      {btnText}
    </button>
  );
};

export default Button;
