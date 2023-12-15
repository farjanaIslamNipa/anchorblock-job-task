

const Input = ({ placeholder, error}) => {

  return (
    <>
      <input 
      type="text" 
      placeholder={placeholder} 
      className={`
      ' h-11 
      w-[100%]
      bg-white 
      border 
      rounded-lg 
      px-[14px] 
      py-[10px]  
      placeholder:text-[##A9ACB5] 
      placeholder:text-base 
      shadow-[0px_0px_0px_4px_#FEE4E2,0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] ' 
      ${error ? 'border-[#FDA29B] shadow-[0px_0px_0px_4px_#FEE4E2,0px_1px_2px_0px_rgba(16,24,40,0.05)]' 
      : 
      'border-[#D6BBFB] shadow-[0px_0px_0px_4px_#F4EBFF,0px_1px_2px_0px_rgba(16,24,40,0.05)]'}`} 
      />

    </>
  );
};

export default Input;