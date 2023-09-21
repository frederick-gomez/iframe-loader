import CartIcon from './CartIcon';
import { useRouter } from 'next/navigation';

export default function Item() {
	const router = useRouter();

	return (
		<>
			<div className='bg-white p-2'>
				<img src='https://placehold.co/600x400/png' alt='placeholder' width='600' height='400' />
				<h2 className='my-2 text-xl font-bold'>Titulo</h2>
				<p className='mb-4 text-gray-700'>100.000 Gs</p>
				<button
					className='ml-auto flex items-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
					onClick={() => router.push('/checkout')}>
					<CartIcon />
					<span className='pl-2'>Comprar</span>
				</button>
			</div>
		</>
	);
}
