import React, { useState } from 'react';
import Tab1 from '../assets/tab1.jpg';
import Tab2 from '../assets/tab2.jpg';
import Tab3 from '../assets/tab3.jpg';
import Tab4 from '../assets/tab4.jpg';
import Tab5 from '../assets/tab5.jpg';
import { FaStar } from 'react-icons/fa';

const Tabbed = () => {
	const [activeTab, setActiveTab] = useState(25);

	const handleTabClick = (tabIndex) => {
		setActiveTab(tabIndex);
	};

	console.log(setActiveTab);

	return (
		<section className='w-full flex items-center justify-center flex-col bg-[#f1f8f6] py-10'>
			<h1 className='text-3xl font-medium'>Get your favorites for free</h1>
			{/* TAB BUTTONS */}
			<div className='flex md:gap-10 gap-5 pt-6'>
				<button
					onClick={() => handleTabClick(25)}
					className={
						activeTab === 25
							? 'flex items-center py-2 px-1 mx-1 font-semibold text-2xl border-b-4 border-[#008248] outline-none'
							: 'flex items-center py-2 px-1 mx-1 font-semibold text-2xl'
					}
				>
					25
					<FaStar
						className='text-[#996515]'
						size={15}
					/>
				</button>
				<button
					onClick={() => handleTabClick(100)}
					className={
						activeTab === 100
							? 'flex items-center py-2 px-1 mx-1 font-semibold text-2xl border-b-4 border-[#008248] outline-none'
							: 'flex items-center py-2 px-1 mx-1 font-semibold text-2xl'
					}
				>
					100{' '}
					<FaStar
						className='text-[#996515]'
						size={15}
					/>
				</button>
				<button
					onClick={() => handleTabClick(200)}
					className={
						activeTab === 200
							? 'flex items-center py-2 px-1 mx-1 font-semibold text-2xl border-b-4 border-[#008248] outline-none'
							: 'flex items-center py-2 px-1 mx-1 font-semibold text-2xl'
					}
				>
					200{' '}
					<FaStar
						className='text-[#996515]'
						size={15}
					/>
				</button>
				<button
					onClick={() => handleTabClick(300)}
					className={
						activeTab === 300
							? 'flex items-center py-2 px-1 mx-1 font-semibold text-2xl border-b-4 border-[#008248] outline-none'
							: 'flex items-center py-2 px-1 mx-1 font-semibold text-2xl'
					}
				>
					300{' '}
					<FaStar
						className='text-[#996515]'
						size={15}
					/>
				</button>
				<button
					onClick={() => handleTabClick(400)}
					className={
						activeTab === 400
							? 'flex items-center py-2 px-1 mx-1 font-semibold text-2xl border-b-4 border-[#008248] outline-none'
							: 'flex items-center py-2 px-1 mx-1 font-semibold text-2xl'
					}
				>
					400{' '}
					<FaStar
						className='text-[#996515]'
						size={15}
					/>
				</button>
			</div>

			{/* TAB MENUS */}
			{/* TAB 1 */}
			<div
				className={
					activeTab === 25
						? 'flex items-center justify-center mx-auto bg-[#d4e9e2] w-full md:py-2 py-4'
						: 'hidden'
				}
			>
				<img
					className='md:w-[400px] w-[300px]'
					src={Tab1}
					alt=''
				/>

				<div className='flex flex-col md:w-[500px] w-[300px] gap-4 '>
					<h1 className='md:text-2xl text-xl font-semibold'>
						Customize your drink{' '}
					</h1>
					<p className='md:w-[300px] w-[200px]'>
						Treat yourself to an iced coffee, buttery croissant, bag of chips
						and more.
					</p>
				</div>
			</div>
			{/* TAB 2 */}
			<div
				className={
					activeTab === 100
						? 'flex items-center justify-center mx-auto bg-[#d4e9e2] w-full md:py-2 py-4'
						: 'hidden'
				}
			>
				<img
					className='md:w-[400px] w-[250px]'
					src={Tab2}
					alt=''
				/>

				<div className='flex flex-col md:w-[500px] w-[300px] gap-4  '>
					<h1 className='md:text-2xl text-xl font-semibold md:w-[350px] w-[200px]'>
						Brewed hot or iced coffee or tea, bakery item, packaged snack and
						more{' '}
					</h1>
					<p className='md:w-[300px] w-[200px]'>
						Treat yourself to an iced coffee, buttery croissant, bag of chips
						and more.
					</p>
				</div>
			</div>
			{/* TAB 3 */}
			<div
				className={
					activeTab === 200
						? 'flex items-center justify-center mx-auto bg-[#d4e9e2] w-full md:py-2 py-4'
						: 'hidden'
				}
			>
				<img
					className='md:w-[400px] w-[250px]'
					src={Tab3}
					alt=''
				/>

				<div className='flex flex-col md:w-[500px] w-[300px] gap-4 '>
					<h1 className='md:text-2xl text-xl font-semibold md:w-[350px] w-[200px]'>
						Handcrafted drink (Cold Brew, lattes and more) or hot breakfast
					</h1>
					<p className='md:w-[300px] w-[200px] text-md'>
						Turn good mornings great with a delicious handcrafted drink of your
						choice, breakfast sandwich or oatmeal on us.
					</p>
				</div>
			</div>
			{/* TAB 4 */}
			<div
				className={
					activeTab === 300
						? 'flex items-center justify-center mx-auto bg-[#d4e9e2] w-full md:py-2 py-4'
						: 'hidden'
				}
			>
				<img
					className='md:w-[400px] w-[300px]'
					src={Tab4}
					alt=''
				/>

				<div className='flex flex-col md:w-[500px] w-[300px] gap-4  '>
					<h1 className='md:text-2xl text-xl font-semibold'>
						Sandwich, protein box or at-home coffee
					</h1>
					<p className='md:w-[300px] w-[200px]'>
						Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of
						coffee—including Starbucks VIA Instant®.
					</p>
				</div>
			</div>
			{/* TAB 5 */}
			<div
				className={
					activeTab === 400
						? 'flex items-center justify-center mx-auto bg-[#d4e9e2] w-full md:py-2 py-4'
						: 'hidden'
				}
			>
				<img
					className='md:w-[400px] w-[300px]'
					src={Tab5}
					alt=''
				/>

				<div className='flex flex-col md:w-[500px] w-[300px] gap-4 '>
					<h1 className='md:text-2xl text-xl font-semibold'>
						Select Starbucks® merchandise
					</h1>
					<p className='md:w-[300px] w-[200px] text-md mr-3'>
						Take home a signature cup, drink tumbler or your choice of coffee
						merch up to $20.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Tabbed;
