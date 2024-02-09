import React from 'react';
import CashCard1 from '../assets/cashcard1.png';
import CashCard2 from '../assets/cashcard2.png';
import CashCard3 from '../assets/cashcard3.png';
import CashCard4 from '../assets/cashcard4.png';

const CardPayment = () => {
	return (
		<section className='md:h-[600px] bg-[#f3f1e7] flex flex-col items-center justify-center py-4'>
			<h2 className='text-3xl font-medium py-4'>
				Cash or card, you earn Stars
			</h2>
			<p className='text-md pb-6 text-center md:w-[700px]  py-4'>
				No matter how you pay, you can earn Stars with your morning coffee.
				Those Stars add up to (really delicious) Rewards.
			</p>
			<div className='grid md:grid-cols-3 grid-cols-1 mt-8 border-b-2 pb-6'>
				<div className='mx-4'>
					<h2 className='font-bold text-2xl'>1★Star per dollar</h2>
					<p className='pb-4'>Pay as you go</p>
				</div>
				<div className='flex'>
					<img
						className='w-[100px] h-[180px] mr-4'
						src={CashCard1}
						alt=''
					/>
					<div>
						<h2 className='font-semibold text-xl pb-2'>
							Scan and pay separately
						</h2>
						<p>Use cash or credit/debit card at the register.</p>
					</div>
				</div>
				<div className='flex'>
					<img
						className='w-[100px] h-[180px] mr-4'
						src={CashCard2}
						alt=''
					/>
					<div>
						<h2 className='font-semibold text-xl pb-2'>
							Save payment in the app
						</h2>
						<p>
							Check-out faster by saving a credit/debit card or PayPal to your
							account. You’ll be able to order ahead or scan and pay at the
							register in one step.
						</p>
					</div>
				</div>
			</div>
			<div className='grid md:grid-cols-3 grid-cols-1  mt-8'>
				<div className='mx-4'>
					<h2 className='text-2xl font-bold'>2★Stars per dollar</h2>
					<p className='pb-4'>Add funds in the app</p>
				</div>
				<div className='flex'>
					<img
						className='w-[120px] h-[200px] mr-4'
						src={CashCard3}
						alt=''
					/>
					<div>
						<h2 className='font-semibold text-xl pb-2'>Preload</h2>
						<p className='md:w-[400px]'>
							To save time and earn Stars twice as fast, add money to your
							digital Starbucks Card using any payment option. Scan and pay in
							one step or order ahead in the app.
						</p>
					</div>
				</div>
				<div className='flex'>
					<img
						className='w-[120px] h-[200px] mr-4'
						src={CashCard4}
						alt=''
					/>
					<div>
						<h2 className='font-semibold text-xl pb-2'>
							Register your gift card
						</h2>
						<p>
							Then use it to pay through the app. You can even consolidate
							balances from multiple cards in one place.
						</p>
					</div>
				</div>
			</div>
			<div></div>
		</section>
	);
};

export default CardPayment;
