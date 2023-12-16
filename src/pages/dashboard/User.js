import React from 'react';
import Button from '../../components/app/Button'
import plusIcon from '../../assets/images/plus-icon.svg'
import importIcon from '../../assets/images/import-icon.svg'
// import uncheckedBox from '../../assets/images/unchecked-box.svg'
// import checkedBox from '../../assets/images/checked-box.svg'
import baseCheckBox from '../../assets/images/checkbox-base.svg'
import downArrow from '../../assets/images/arrow-down.svg'
import userLogo from '../../assets/images/user.svg'
import deleteIcon from '../../assets/images/delete-icon.svg'
import editIcon from '../../assets/images/edit-icon.svg'
import UserTableRow from '../../components/UserTableRow';

const User = () => {
  return (
    <div className='pb-20'>
      <div className="custom-container">
        {/* User header */}
        <div className="flex justify-between py-[33px]">
          <h3 className='text-xl sm:text-2xl leading-[38px] font-medium text-dark'>Users</h3>
          <div>
            <div className='flex items-center gap-2 sm:gap-3'>
              <Button btnClasses="text-sm h-9 sm:h-10 w-[100px] sm:w-[123px] bg-white border border-[#D0D5DD]">
                <div className='flex items-center gap-2'>
                  <img className='h-5 w-5' src={importIcon} alt="" />
                  <span className='text-[#344054]'>import</span>
                </div>
              </Button>
              <Button btnClasses="text-sm h-9 sm:h-10 w-[100px] sm:w-[123px]">
                <div className='flex items-center gap-2'>
                  <img className='h-3 w-3' src={plusIcon} alt="" />
                  <span>Add User</span>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* User Table */}
        <div className='overflow-auto user-table'>
          <div className=' bg-white border border-[#EAECF0] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.10)] overflow-x-auto w-[985px] lg:w-full'>
            <table className='w-full table-auto'>
              <colgroup>
                <col className='w-[4.5%]' />
                <col className='w-[35%]' />
                <col className='w-[35%]' />
                <col className='w-[15%]' />
                <col className='w-[10%]' />
              </colgroup>
              <thead>
                <tr className='bg-[#F9FAFB]'>
                <th className='pl-6'><img src={baseCheckBox} alt="Checkbox" /></th>
                  <th className='py-3 pl-3 xl:pl-0'>
                    <div className="flex items-center gap-1">
                      <span className='table-header'>User Info</span>
                      <img src={downArrow} alt="Down Arrow" />
                    </div>
                  </th>
                  <th className='table-header'>About</th>
                  <th className='table-header'>Status</th>
                  <th className='table-header'></th>
                </tr>
              </thead>
              <tbody>
                <UserTableRow />
                <UserTableRow />
                <UserTableRow />
                <UserTableRow />
                <UserTableRow />
                <UserTableRow />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;