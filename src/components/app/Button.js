const Button = ({ 
  children, 
  style, 
  onClick, 
  btnClasses, 
  type 
}) => {
  return (
    <button 
    type={type? type : 'button'} 
    style={ style } 
    onClick={ onClick } 
    className={`bg-brand text-white text-base font-semibold leading-6 capitalize flex justify-center items-center h-11 w-[100%] rounded-lg ${btnClasses}`}
    >
      { children }
    </button>
  );
};

export default Button;