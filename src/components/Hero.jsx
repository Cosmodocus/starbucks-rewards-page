import React from 'react';
import StarbucksHero from '../assets/starbucks-hero.jpg';

const Hero = () => {
	return (
		<section className='md:h-screen w-full flex flex-col md:flex-row items-center justify-between bg-[#d4e9e2]'>
			<div className='flex flex-col text-left p-20 gap-4 items-left ml-20'>
				<h1 className='md:text-6xl text-3xl font-bold py-2 w-[450px] '>
					FREE COFFEE IS A TAP AWAY
				</h1>
				<p className='md:text-2xl text-xl py-1'>
					Join now to start earning rewards.
				</p>
				<button className='w-24 h-8 rounded-full  text-white font-bold bg-[#008248] hover:bg-[#008248b1]'>
					Join now
				</button>
				<p className='font-medium md:text-xl text-md py-2'>
					Or{' '}
					<span className='underline hover:no-underline'>join in the app</span>{' '}
					for the best experience
				</p>
			</div>
			<img
				className='md:h-screen md:block hidden md:bg-right bg-center bg-cover '
				src={StarbucksHero}
				alt=''
			/>
		</section>
	);
};

export default Hero;
