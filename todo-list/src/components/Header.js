import React from 'react';

function Header({children}) {
  return (
    <div className='text-white text-center '>
            <h1 className='w-full text-3xl font-bold text-[#000]'>{children}</h1>
    </div>
  );
}

export default Header;
