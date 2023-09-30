import CartIcon from './CartIcon';
import { useRouter } from 'next/navigation';

type Props = {
	src: string;
};

export default function Item({ src }: Props) {
	const router = useRouter();

	return (
		<>
			<div className='bg-white p-2'>
				<img src={src} alt='placeholder' width='600' height='400' />
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
