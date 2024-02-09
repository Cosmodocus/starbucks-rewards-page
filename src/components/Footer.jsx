import React from 'react';
import {
	FaSquareTwitter,
	FaSquareFacebook,
	FaSquarePinterest,
	FaSquareYoutube,
	FaSquareInstagram,
} from 'react-icons/fa6';

const Footer = () => {
	return (
		<>
			<footer className='w-full flex items-center justify-center border-t-2 border-b-2 pt-8 px-4'>
				<div className='grid xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 '>
					<div className='my-6'>
						<h1 className='font-small text-xl mb-4'>About Us</h1>
						<div className='flex flex-col gap-6'>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Our Company
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Our Coffee
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Stories and News
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Starbucks Archive
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Investor Relations
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Customer Service
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Contact Us
							</a>
						</div>
					</div>
					<div className='my-6'>
						<h1 className='font-small text-xl mb-4'>Careers</h1>
						<div className='flex flex-col gap-6'>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Culture and Values
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Inclusion, Diversity, and Equity
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								College Achievement Plan
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Alumni Community
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								U.S. Careers
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								International Careers
							</a>
						</div>
					</div>
					<div className='my-6'>
						<h1 className='font-small text-xl mb-4'>Social Impact</h1>
						<div className='flex flex-col gap-6'>
							<a
								href=''
								className='hover:text-gray-500'
							>
								People
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Planet
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Environmental and Social Impact Reporting
							</a>
						</div>
					</div>
					<div className='my-6'>
						<h1 className='font-small text-xl mb-4'>For Business Partners</h1>
						<div className='flex flex-col gap-6'>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Landlord Support Center
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Suppliers
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Corporate Gift Card Sales
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Office and Foodservice Coffee
							</a>
						</div>
					</div>
					<div className='my-6'>
						<h1 className='font-small text-xl mb-4'>Order and Pick Up</h1>
						<div className='flex flex-col gap-6'>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Order on the App
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Order on the Web
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Delivery
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Order and Pick Up Options
							</a>
							<a
								href=''
								className='hover:text-gray-500'
							>
								Explore and Find Coffee for Home{' '}
							</a>
						</div>
					</div>
				</div>
			</footer>
			{/* CONTACT ICONS */}
			{/* SPOTIFY - FACEBOOK - PINTEREST - INSTAGRAM - YOUTUBE - TWITTER */}
			<div className='w-full px-4 pt-2 pb-12'>
				<div className='flex flex-row gap-4 w-full'>
					<FaSquareFacebook
						size={40}
						className='cursor-pointer'
					/>
					<FaSquarePinterest
						size={40}
						className='cursor-pointer'
					/>
					<FaSquareYoutube
						size={40}
						className='cursor-pointer'
					/>
					<FaSquareInstagram
						size={40}
						className='cursor-pointer'
					/>
					<FaSquareTwitter
						size={40}
						className='cursor-pointer'
					/>
				</div>
				<div className='flex gap-8 md:flex-row flex-col'>
					<h3 className='hover:underline'>
						<a href=''>Privacy Notice</a>
					</h3>
					<h3 className='hover:underline'>
						<a href=''>Terms of Use</a>
					</h3>
					<h3 className='hover:underline'>
						<a href=''>Do Not Share My Personal Information</a>
					</h3>
					<h3 className='hover:underline'>
						<a href=''>CA Supply Chain</a>
					</h3>
					<h3 className='hover:underline'>
						<a href=''>Cookie Preferences</a>
					</h3>
				</div>
				<p className='font-sm text-gray-500'>
					© 2024 Starbucks Coffee Company. All rights reserved.
				</p>
			</div>
		</>
	);
};

export default Footer;
