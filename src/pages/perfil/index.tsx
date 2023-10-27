import userStore from '@/store/userStore';
import Modal from '@/ui/Modal';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

export default function PerfilPage() {
	const [showForm, setShowForm] = useState(false);
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [cardNumber, setCardNumber] = useState('');
	const [cardName, setCardName] = useState('');
	const [cardExpiration, setCardExpiration] = useState('');
	const [cardCvv, setCardCvv] = useState('');
	const userCi = userStore((state) => state.ci);
	const userToken = userStore((state) => state.token);
	const userCard = userStore((state) => state.cards);
	const updateCard = userStore((state) => state.actions.updateCards);

	const cardNameHandler = (e: ChangeEvent<HTMLInputElement>) => setCardName(e.target.value);
	const cardNumberHandler = (e: ChangeEvent<HTMLInputElement>) => setCardNumber(e.target.value);
	const cardExpirationHandler = (e: ChangeEvent<HTMLInputElement>) => setCardExpiration(e.target.value);
	const cardCvvHandler = (e: ChangeEvent<HTMLInputElement>) => setCardCvv(e.target.value);

	const confirmSaveHandler = useCallback(() => {
		updateCard({
			cardNumber: cardNumber,
			name: cardName,
			expiration: cardExpiration,
			cvv: cardCvv,
		});
		setShowForm(false);
		setShowConfirmation(false);
	}, [cardCvv, cardExpiration, cardName, cardNumber, updateCard]);

	useEffect(() => {
		const recibirMensaje = (event: MessageEvent<string>) => {
			const mensaje = event.data;
			if (mensaje === 'OK') {
				setTimeout(() => {
					confirmSaveHandler();
				}, 1500);
			}
		};
		window.addEventListener('message', recibirMensaje);

		return () => window.removeEventListener('message', recibirMensaje);
	}, [confirmSaveHandler, updateCard]);

	return (
		<>
			<div className='mx-auto my-6 max-w-3xl px-4'>
				<div className='rounded border p-4 shadow-md'>
					<h1 className='mb-2 text-xl font-semibold'>Perfil</h1>
					<h2 className='text-lg'>Pablo Morales</h2>
					<p>
						<span className='text-gray-500'>Cédula : </span>
						{userCi}
					</p>

					<div className='mt-4'>
						<h2 className='text-lg font-semibold'>Tarjetas</h2>
						<ul>
							{userCard && (
								<li className='mb-4 mt-2 rounded border px-4 py-2 shadow-sm transition-all hover:bg-gray-100'>
									<p className='font-semibold'>Débito</p>
									<p className='capitalize italic'>{userCard?.name}</p>
									<p className='text-gray-500'>
										{' '}
										Número:
										<span className='pl-2 font-semibold text-black'>{userCard?.cardNumber}</span>
									</p>
								</li>
							)}
						</ul>
						{showForm ? (
							<form>
								<div className='mb-6'>
									<label className='block pb-1 text-sm font-semibold'>Número de Tarjeta</label>
									<input
										className='w-full appearance-none rounded-sm px-4 py-1'
										type='text'
										placeholder='0000 0000 0000 0000'
										value={cardNumber}
										onChange={cardNumberHandler}
									/>
								</div>

								<div className='flex'>
									<div>
										<label className='mb-1 block text-sm font-semibold'>Nombre de la Tarjeta</label>
										<input
											className='rounded-sm px-4 py-1 capitalize'
											type='text'
											value={cardName}
											onChange={cardNameHandler}
										/>
									</div>

									<div className='px-4'>
										<label className='mb-1 block text-sm font-semibold'>Expiración</label>
										<input
											className='rounded-sm px-4 py-1 capitalize'
											value={cardExpiration}
											onChange={cardExpirationHandler}
											placeholder='MM / AA'
											type='text'
										/>
									</div>

									<div>
										<label className='mb-1 block text-sm font-semibold'>Código CVC</label>
										<input
											className='rounded-sm px-4 py-1 capitalize'
											type='number'
											value={cardCvv}
											onChange={cardCvvHandler}
										/>
									</div>
								</div>
								<div className='mt-4 flex items-center justify-end'>
									<button
										onClick={() => setShowForm(false)}
										type='button'
										className='mr-2 rounded border-[1px] border-gray-500 bg-transparent px-2 py-1 font-medium text-gray-500 transition-all hover:bg-gray-500 hover:text-white'>
										Cancelar
									</button>
									<button
										onClick={() => setShowConfirmation(true)}
										type='button'
										className='rounded border-[1px] border-blue-600 bg-blue-600 px-2 py-1 font-medium text-white transition-all hover:border-blue-800 hover:bg-blue-800'>
										Continuar
									</button>
								</div>
							</form>
						) : (
							<button
								onClick={() => setShowForm(true)}
								type='button'
								className='ml-auto block rounded border-[1px] border-blue-600 bg-blue-600 px-2 py-1 font-medium text-white transition-all hover:border-blue-800 hover:bg-blue-800'>
								Añadir Tarjeta
							</button>
						)}
					</div>
				</div>
			</div>
			{showConfirmation && (
				<Modal>
					<div className='h-full'>
						<iframe
							src={`${process.env.NEXT_PUBLIC_IFRAME_URL}/ingresar/${userToken}`}
							width={'100%'}
							height={800}
							allow='camera; microphone;'></iframe>
					</div>
					<div className='mt-2 flex items-center justify-end'>
						<button
							onClick={() => setShowConfirmation(false)}
							className='mr-2 rounded border-[1px] border-gray-500 bg-transparent px-2 py-1 font-medium text-gray-500 transition-all hover:bg-gray-500 hover:text-white'>
							Cancelar
						</button>
						<button
							onClick={confirmSaveHandler}
							className='rounded border-[1px] border-blue-600 bg-blue-600 px-2 py-1 font-medium text-white transition-all hover:border-blue-800 hover:bg-blue-800'>
							Continuar
						</button>
					</div>
				</Modal>
			)}
		</>
	);
}
