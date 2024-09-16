import React from 'react';

const Header: React.FC = () => {
    return (
        <div className='bg-white text-black font-bold border flex item-center justify-between py-2 px-40'>
            <h1 className="text-xl font-bold text">Niled.</h1>
            <div className=' flex gap-6 justify-center'>
            <p>About us</p>
            <p>Partners</p>
            <p>Portfolio</p>
            <p>FAQ</p>
        </div>
            <div className='flex gap-3'>
                <button
                type="submit"
                className="text-black font-bold py-1 px-4 rounded-full hover:bg-black hover:text-white"
                >
                    Log in
                </button>
                <button
                type="submit"
                className=" text-black font-bold py-1 px-4 rounded-full hover:bg-black hover:text-white"
                >
                    Sign up
                </button>
            </div>
            </div>
    );
};

export default Header;