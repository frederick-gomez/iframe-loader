import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ResetPassword = () => {
	const [isValidationOpen, setIsValidationOpen] = useState(false);
	const [documentoInput, setDocumentoInput] = useState('');
	const router = useRouter();

	const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {

		event.preventDefault();

		const response = await fetch('/api/crear-token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				ci: event.target.ci.value,
			}),
		});
		const data = await response.json();

    setDocumentoInput(data.token)
    setIsValidationOpen(true)
  };

	useEffect(() => {
		const recibirMensaje = (event: MessageEvent<string>) => {
			const mensaje = event.data;
			if (mensaje === 'OK') {
				setTimeout(() => {
					router.replace('/reset-pass/ok');
				}, 1500);
			}
		};

		window.addEventListener('message', recibirMensaje);

		return () => window.removeEventListener('message', recibirMensaje);
	}, [router]);

	return (
		<>
			{isValidationOpen ? (
				<div className='h-screen'>
					<iframe
						src={`${process.env.NEXT_PUBLIC_IFRAME_URL}/ingresar/${documentoInput}`}
						width={'100%'}
						height={'100%'}
						allow='camera; microphone;'></iframe>
				</div>
			) : (
				<div className='flex h-screen items-center justify-center'>
					<form onSubmit={handleSubmit} className='min-w-[350px]'>
						<div className='mb-2'>
							<label className='block' htmlFor='ci'>
								Nro de Cedula
							</label>
							<input className='w-full px-2 py-1' type='number' id='ci' required />
						</div>
						<div>
							<label className='block' htmlFor='password'>
								Nueva Contraseña
							</label>
							<input className='w-full px-2 py-1' type='password' id='password' required />
						</div>
						<button type='submit' className='boton-primario mt-3 w-full'>
							Restablecer Contraseña
						</button>
					</form>
				</div>
			)}
		</>
	);
};

export default ResetPassword;
