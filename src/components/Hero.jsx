import React from 'react';
import Button from './Button';

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4 items-center'>
                {/* SVG Logo - Matching the Example */}
                <div className="flex justify-center items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 200 200"
                        className="w-32 h-32" // Adjusted size for better emphasis
                    >
                        {/* Outer yellow border */}
                        <path
                            d="M20 20 L80 20 L100 40 L120 20 L180 20 L180 80 L160 100 L180 120 L180 180 L120 180 L100 160 L80 180 L20 180 L20 120 L40 100 L20 80 Z"
                            fill="#000"
                            stroke="#FFD700"
                            strokeWidth="10"
                        />
                        {/* Inner black text */}
                        <path d="M40 40 H80 L100 60 L80 80 H40 Z" fill="#000" />
                        <path d="M120 40 H160 L140 60 L160 80 H120 Z" fill="#000" />
                        <path d="M80 120 L100 140 L120 120 L100 100 Z" fill="#000" />
                    </svg>
                </div>

                {/* Text Content - Matching the Example */}
                <p className='text-lg md:text-xl font-medium text-white'>Welcome to the</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white'>
                    Fuerza<span className='text-blue-400'> Fitness</span> Guide
                </h1>
            </div>

            <p className='text-sm md:text-base font-light text-white'>
                I’m ready to embrace the journey of building <span className='text-blue-400 font-medium'>strength, confidence, and unstoppable energy!</span> I understand this guide may transform me into the <span className='text-blue-400 font-medium'>strongest version of myself</span>, a local powerhouse, ready to take on any challenge with pride.
            </p>
            <Button
                func={() => {
                    window.location.href = '#generate';
                }}
                text={'Accept & Begin'}
            />
        </div>
    );
}
