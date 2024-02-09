import React from 'react';
import Extra1 from '../assets/extras1.png';
import Extra2 from '../assets/extras2.png';
import Extra3 from '../assets/extras3.png';

const Extras = () => {
	return (
		<section className='w-full flex flex-col items-center justify-center py-20'>
			<h1 className='text-3xl font-medium py-2 '>Endless Extras</h1>
			<p className='md:text-md text-sm pb-6 text-center md:w-[700px] w-[350px]'>
				Joining Starbucks® Rewards means unlocking access to exclusive benefits.
				Say hello to easy ordering, tasty Rewards and—yes, free coffee.
			</p>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
				<div className='flex flex-col md:items-center items-left'>
					<img
						className='w-[100px] ml-4'
						src={Extra1}
						alt=''
					/>{' '}
					<h2 className='text-xl font-semibold ml-6'>Fun freebies</h2>
					<p className='text-sm mx-6 md:text-center text-left'>
						Not only can you earn free coffee, look forward to a birthday treat
						plus coffee and tea refills.
					</p>
					<a
						href='#'
						className='pt-4 text-[#008248] underline hover:no-underline ml-6 mb-2'
					>
						Learn more
					</a>
				</div>
				<div className='flex flex-col md:items-center items-left'>
					<img
						className='w-[100px] ml-4'
						src={Extra2}
						alt=''
					/>
					<h2 className='text-xl font-semibold ml-6'>Order & pay ahead</h2>
					<p className='text-sm mx-6 md:text-center text-left'>
						Enjoy the convenience of in-store, curbside or drive-thru pickup at
						select stores.
					</p>
					<a
						href='#'
						className='pt-4 text-[#008248] underline hover:no-underline ml-6 mb-2'
					>
						Learn more
					</a>
				</div>
				<div className='flex flex-col md:items-center items-left'>
					<img
						className='w-[100px] ml-4'
						src={Extra3}
						alt=''
					/>
					<h2 className='text-xl font-semibold ml-6'>Get to free faster</h2>
					<p className='text-sm mx-6 md:text-center text-left'>
						Earn Stars even quicker with Bonus Star challenges, Double Star Days
						and exciting games.
					</p>
					<a
						href='#'
						className='pt-4 text-[#008248] underline hover:no-underline ml-6'
					>
						Learn more
					</a>
				</div>
			</div>
		</section>
	);
};

export default Extras;
