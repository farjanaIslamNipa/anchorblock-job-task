

const Input = ({ 
  inputValue,  
  handleChange,
  error, 
  type,
  name,
  placeholder, 
}) => {



  return (
    <>
      <input 
      type={type ? type : 'text'}
      defaultValue={inputValue ? inputValue : ''}
      onChange={handleChange}
      placeholder={placeholder} 
      name={name? name : ''}
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
      focus:outline-none 
      focus:border-brand
      shadow-[0px_0px_0px_4px_#FEE4E2,0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] ' 
      ${error ? 'border-[#FDA29B] shadow-[0px_0px_0px_4px_#FEE4E2,0px_1px_2px_0px_rgba(16,24,40,0.05)]' 
      : 
      'border-[#D6BBFB] shadow-[0px_0px_0px_4px_#F4EBFF,0px_1px_2px_0px_rgba(16,24,40,0.05)]'}`} 
      />

    </>
  );
};

export default Input;