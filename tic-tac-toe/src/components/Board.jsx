import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    console.log(state);
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }

        return false;
    };

    const isWinner = checkWinner();

    const handleClick = (index) => {
        if (state[index] !== null) return;
        const copyState = [...state];
        copyState[index] = isXTurn ? 'X' : '0';
        setState(copyState);
        setIsXTurn(!isXTurn);
    };

    const reseetGame = () => {
        setState(Array(9).fill(null));
    };

    return (
        <>
            {isWinner ? (
                <div className='text-center'>
                    <h2 className='bg-white text-3xl pr-8 pl-4 py-4 rounded-full shadow-xl shadow-[#fff6]'>
                        <span className='px-8 bg-yellow-300 mr-2 rounded-full'>{isWinner}</span> is win
                    </h2>
                    <br />
                    <button
                        onClick={reseetGame}
                        className='px-8 py-3 bg-white hover:bg-gray-300 duration-200 text-black font-semibold rounded-full'
                    >
                        Play Again
                    </button>
                </div>
            ) : (
                <div className=''>
                    <h4 className='text-[18px] mb-4 font-bold'>
                        Player {isXTurn ? 'X' : '0'} Please move{'   '}
                        <button
                            onClick={reseetGame}
                            className='ml-6 text-[15px] px-4 py-1 bg-red-600 hover:bg-gray-300 duration-200 text-white font-semibold rounded-full'
                        >
                            Reset
                        </button>
                    </h4>
                    <div className='flex'>
                        <Square onClick={() => handleClick(0)} value={state[0]} />
                        <Square onClick={() => handleClick(1)} value={state[1]} />
                        <Square onClick={() => handleClick(2)} value={state[2]} />
                    </div>
                    <div className='flex'>
                        <Square onClick={() => handleClick(3)} value={state[3]} />
                        <Square onClick={() => handleClick(4)} value={state[4]} />
                        <Square onClick={() => handleClick(5)} value={state[5]} />
                    </div>
                    <div className='flex'>
                        <Square onClick={() => handleClick(6)} value={state[6]} />
                        <Square onClick={() => handleClick(7)} value={state[7]} />
                        <Square onClick={() => handleClick(8)} value={state[8]} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Board;
