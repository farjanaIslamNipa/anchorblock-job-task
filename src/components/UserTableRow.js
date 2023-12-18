import {useState} from 'react';
import uncheckedBox from '../assets/images/unchecked-box.svg'
import checkedBox from '../assets/images/checked-box.svg'
import deleteIcon from '../assets/images/delete-icon.svg'
import editIcon from '../assets/images/edit-icon.svg'

const UserTableRow = ({user}) => {
  const[selectedUser, setSelectedUser] = useState(false);
  const userName = `${user?.first_name} ${user?.last_name}`
  return (
    <>
      <tr className='border border-[#EAECF0] border-x-0'>
        <td className='pl-6 py-4'>
          <button onClick={() => setSelectedUser(!selectedUser)}>
            {
              selectedUser ?
              <img src={checkedBox} alt="Checkbox" />
              :
              <img src={uncheckedBox} alt="Checkbox" />
            }
          </button>
        </td>
        <td className='py-4 pl-3 xl:pl-0'>
          <div className="flex items-center gap-3">
            <img src={user?.avatar} alt="User" className='h-10 w-10 rounded-full' />
            <div>
              <p className='text-dark text-sm font-medium capitalize'>{ userName  }</p>
              <p className='text-defaultGray text-sm'>{ user?.email }</p>
            </div>
          </div>
        </td>
        <td className='py-4'>
          <p className='text-dark text-sm font-medium capitalize'>Some dummy Content</p>
          <p className='text-defaultGray text-sm'>Brings all your news into one place</p>
        </td>
        <td>
          <div className='text-[#027A48] text-xs leading-[18px] font-medium bg-[#ECFDF3] rounded-full px-2 py-[2px] text-center inline-block'>Random Sticker Label</div>
        </td>
        <td className='py-4'>
          <div className="flex items-center gap-3 xl:gap-5 w-full justify-end pr-6">
            <button><img src={deleteIcon} alt="Delete" className='h-5 w-5' /></button>
            <button><img src={editIcon} alt="Edit" className='h-5 w-5' /></button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default UserTableRow;