'use client';

import { useState } from 'react';

interface Props {
  onSlide: (option: Options) => void;
}

type Options = -1 | 25 | 50 | 100;

export default function SliderFunction({ onSlide }: Props) {
  const [option, setOption] = useState<Options>(-1);

  const handleSlide = (option: Options) => {
    setOption(option);
    onSlide(option);
  };

  return (
    <div className='m-5 rounded-lg bg-slate-200 p-2 dark:bg-[#212933]'>
      <div className='relative'>
        <div
          style={{
            transform: `translateX(${
              option === -1
                ? '0'
                : option === 25
                  ? '100%'
                  : option === 50
                    ? '200%'
                    : '300%'
            })`,
          }}
          className={`absolute z-10 flex h-10 w-1/4 items-center justify-center rounded-md bg-blue-500 font-bold transition-transform duration-500 ease-in-out dark:bg-purple-500`}
        />
        <div className='relative z-50 flex flex-row justify-around rounded-lg'>
          <button
            className={'h-10 w-1/4 text-xs font-bold md:text-lg'}
            onClick={() => handleSlide(-1)}
          >
            {'All'}
          </button>
          <button
            className={'h-10 w-1/4 text-xs font-bold md:text-lg'}
            onClick={() => handleSlide(25)}
          >
            {'Under $25'}
          </button>
          <button
            className={'h-10 w-1/4 text-xs font-bold md:text-lg'}
            onClick={() => handleSlide(50)}
          >
            {'Under $50'}
          </button>
          <button
            className={'h-10 w-1/4 text-xs font-bold md:text-lg'}
            onClick={() => handleSlide(100)}
          >
            {'Under $100'}
          </button>
        </div>
      </div>
    </div>
  );
}
