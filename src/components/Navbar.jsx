import React, { useState } from 'react';
import StarbucksLogo from '../assets/starbucks.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { LuMenuSquare } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	function handleNav() {
		setNav(!nav);
	}

	return (
		<header className='mx-auto'>
			{/* DEFAULT NAVBAR */}
			<nav className='w-full md:flex hidden justify-between px-6 h-20 py-3 items-center border-b z-30 shadow-slate-50 shadow-xl'>
				<div className='flex gap-3 items-center'>
					<img
						className='w-[50px] mr-4'
						src={StarbucksLogo}
						alt='starbucks-logo'
					/>
					<a
						className='font-bold mx-2 hover:text-[#008248] hover:border-b-8 hover:border-[#008248] py-6'
						href='#'
					>
						Menu
					</a>
					<a
						className='font-bold mx-2 hover:text-[#008248] hover:border-b-8 hover:border-[#008248] py-6'
						href='#'
					>
						Rewards
					</a>
					<a
						className='font-bold mx-2 hover:text-[#008248] hover:border-b-8 hover:border-[#008248] py-6'
						href='#'
					>
						Gift Cards
					</a>
				</div>
				<div className='flex items-center justify-center gap-5'>
					<a
						href='#'
						className='flex items-center gap-1 mr-6 hover:text-[#008248]'
					>
						{' '}
						<FaMapMarkerAlt size={20} /> Find a Store
					</a>
					<button className='border border-black w-24 h-8 rounded-full hover:bg-[#f3f1e7]'>
						Sign in
					</button>
					<button className='bg-black text-white w-24 h-8 rounded-full font-semibold hover:bg-[#1e3932]'>
						Join now
					</button>
				</div>
			</nav>

			{/* MOBILE NAVBAR */}
			<nav className='md:hidden flex justify-between px-6 h-20 py-3  items-center relative shadow-slate-50 border-b'>
				<img
					className='w-[50px] mr-4'
					src={StarbucksLogo}
					alt='starbucks-logo'
				/>
				<div className=' hover:bg-slate-300 hover:rounded-full p-2'>
					{nav ? (
						<IoMdClose
							onClick={handleNav}
							size={30}
							className='cursor-pointer'
						/>
					) : (
						<LuMenuSquare
							onClick={handleNav}
							size={30}
							className='cursor-pointer'
						/>
					)}
				</div>
				<div
					className={
						nav
							? 'overflow-hidden flex flex-col w-[500px] my-6 h-screen border p-4 shadow-xl bg-white z-20 opacity-100 absolute top-14 left-[30%] ease-in-out duration-[0.5s]'
							: 'flex flex-col w-[500px] my-6  h-screen border p-4 shadow-xl bg-white z-20 opacity-100 absolute top-14 left-[100%] ease-in-out duration-[0.5s]'
					}
				>
					<a
						className='font-bold text-2xl mx-2 hover:text-[#008248]  py-6'
						href='#'
					>
						Menu
					</a>
					<a
						className='font-bold text-2xl mx-2 hover:text-[#008248]  py-6'
						href='#'
					>
						Rewards
					</a>
					<a
						className='font-bold text-2xl mx-2 hover:text-[#008248] border-b py-6'
						href='#'
					>
						Gift Cards
					</a>
					<a
						href='#'
						className='flex items-center gap-1 mr-6 hover:text-[#008248] my-6 '
					>
						{' '}
						<FaMapMarkerAlt size={20} /> Find a Store
					</a>
					<div className='flex gap-2'>
						<button className='border border-black w-24 h-10 rounded-lg '>
							Sign in
						</button>
						<button className='bg-black text-white w-24 h-10 rounded-lg font-semibold hover:bg-[#1e3932]'>
							Join now
						</button>
					</div>
				</div>
			</nav>
			<div
				className={
					nav
						? 'w-full  bg-[#143627] h-[45px] text-white flex items-center justify-between px-10 opacity-40'
						: 'w-full  bg-[#143627] h-[45px] text-white flex items-center justify-between px-10'
				}
			>
				<p className='font-bold'>STARBUCKS® REWARDS</p>
				<button className='md:hidden block border border-white rounded-xl px-3 py-1 hover:bg-[#008248b1]'>
					Join in the app
				</button>
			</div>
		</header>
	);
};

export default Navbar;
