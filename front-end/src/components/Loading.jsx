import React from 'react';
import { MutatingDots } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='max-h-screen min-h-screen w-full flex justify-center items-center'>
      <MutatingDots
        visible={true}
        height='100'
        width='100'
        color='#4fa94d'
        secondaryColor='#4fa94d'
        radius='12.5'
        ariaLabel='mutating-dots-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
};

export default Loading;
