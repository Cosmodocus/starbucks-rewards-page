import React from 'react';

const Started = () => {
	return (
		<section className='w-full flex items-center justify-center flex-col h-[400px] gap-4 md:my-10 my-40'>
			<h2 className='text-3xl font-medium'>Getting Started is Easy</h2>
			<p className='text-xl pb-6'>
				Earn Stars and get rewarded in a few easy steps.
			</p>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-10'>
				<div className='flex flex-col text-center leading-8 my-2'>
					<h1 className='text-3xl border-2 border-[#008248] text-[#008248] rounded-full w-[40px] mb-4 mx-auto'>
						1
					</h1>
					<h2 className='text-xl pb-4 font-bold'>Create an account</h2>
					<p className='text-sm mx-6'>
						To get started, join now. You can also join in the app to get access
						to the full range of Starbucks® Rewards benefits.
					</p>
				</div>
				<div className='flex flex-col text-center leading-8 my-2'>
					<h1 className=' text-3xl border-2 border-[#008248] text-[#008248] rounded-full w-[40px] mb-4 mx-auto'>
						2
					</h1>
					<h2 className='text-xl pb-4 font-bold'>
						Order and pay how you’d like
					</h2>
					<p className='text-sm mx-6'>
						Use cash, credit/debit card or save some time and pay right through
						the app. You’ll collect Stars all ways. Learn how
					</p>
				</div>
				<div className='flex flex-col text-center leading-8 my-2'>
					<h1 className=' text-3xl border-2 border-[#008248] text-[#008248] rounded-full w-[40px] mb-4 mx-auto'>
						3
					</h1>
					<h2 className='text-xl pb-4 font-bold'>Earn Stars, get Rewards</h2>
					<p className='text-sm mx-6'>
						As you earn Stars, you can redeem them for Rewards—like free food,
						drinks, and more. Start redeeming with as little as 25 Stars!
					</p>
				</div>
			</div>
		</section>
	);
};

export default Started;
