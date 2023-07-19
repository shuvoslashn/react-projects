import React from 'react';

const Square = (props) => {
    return (
        <div
            onClick={props.onClick}
            className='w-24 h-24 border bg-white hover:bg-gray-50 cursor-pointer flex justify-center items-center'
        >
            <h1 className='text-3xl'>{props.value}</h1>
        </div>
    );
};

export default Square;
