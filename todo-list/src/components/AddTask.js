import React from 'react';
import style from '../styles/button.css';


function AddTask({children}) {
  return (
    <button type='button' className='btn btn-blue mt-5'>
      {children}
    </button>

  );
}

export default AddTask;
