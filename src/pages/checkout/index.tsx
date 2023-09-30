import { useRouter } from 'next/router';
import CardIcon from './CardIcon';
import MoneyIcon from './MoneyIcon';
import userStore from '@/store/userStore';

export default function Checkout() {
	const router = useRouter();
	const token = userStore((state) => state.token);
	const cardInfo = userStore((state) => state.cards);
	console.log(cardInfo);
	const continueCheckout = () => {
		router.replace('/checkout/continuar/' + token);
	};

	return (
		<div className='container mx-auto flex h-screen items-center px-2 py-6'>
			<div className='flex w-full justify-between rounded border shadow'>
				<div className='basis-[60%] px-4 py-8 lg:px-6'>
					<h1 className='mb-6 text-2xl font-semibold'>Completa tu Orden</h1>
					<div className='mb-6 rounded border p-4 shadow'>
						<div className='mb-3 flex items-center'>
							<input type='radio' name='pago' id='credito' defaultChecked />
							<label className='ml-2 mr-auto cursor-pointer' htmlFor='credito'>
								Tarjeta de Crédito
							</label>
							<CardIcon />
						</div>

						<form>
							<div className='mb-6'>
								<label className='block pb-1 text-sm font-semibold'>Número de Tarjeta</label>
								<input
									className='w-full appearance-none rounded-sm px-4 py-1'
									type='text'
									defaultValue={cardInfo?.cardNumber}
									placeholder='0000 0000 0000 0000'
								/>
							</div>

							<div className='flex'>
								<div>
									<label className='mb-1 block text-sm font-semibold'>Nombre de la Tarjeta</label>
									<input
										className='rounded-sm px-4 py-1 capitalize'
										type='text'
										defaultValue={cardInfo?.name}
									/>
								</div>

								<div className='px-4'>
									<label className='mb-1 block text-sm font-semibold'>Expiración</label>
									<input
										className='rounded-sm px-4 py-1 capitalize'
										placeholder='MM / AA'
										type='text'
										defaultValue={cardInfo?.expiration}
									/>
								</div>

								<div>
									<label className='mb-1 block text-sm font-semibold'>Código CVC</label>
									<input
										className='rounded-sm px-4 py-1 capitalize'
										type='number'
										defaultValue={cardInfo?.cvv}
									/>
								</div>
							</div>
						</form>
					</div>

					<div className='rounded border p-4 shadow'>
						<div className='mb-3 flex items-center'>
							<input type='radio' name='pago' id='paypal' />
							<label className='ml-2 mr-auto cursor-pointer' htmlFor='paypal'>
								PayPal
							</label>
							<MoneyIcon />
						</div>
						<p className='px-4'>
							Seras redireccionado a la página de PayPal para completar tu compra
						</p>
					</div>
				</div>

				<div className='max-w-md basis-[40%] bg-gray-50 px-4 py-8 lg:px-6'>
					<h2 className='mb-3 text-xl font-semibold'>Tu Orden</h2>

					<div className='mb-1 flex justify-between'>
						<p>Items</p>
						<p>100.000 gs</p>
					</div>

					<div className='mb-1 flex justify-between'>
						<p>Delivery</p>
						<p>30.000 gs</p>
					</div>

					<div className='mb-4 flex justify-between'>
						<p className='text-lg font-semibold'>Total</p>
						<p className='text-lg font-semibold'>130.000 gs</p>
					</div>
					<button onClick={continueCheckout} className='boton-primario w-full'>
						Continuar
					</button>
				</div>
			</div>
		</div>
	);
}
