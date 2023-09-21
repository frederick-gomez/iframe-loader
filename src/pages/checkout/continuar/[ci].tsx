import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ContinuarPago = () => {
	const router = useRouter();
	const CI = router.query.ci;

	useEffect(() => {
		const recibirMensaje = (event: MessageEvent<string>) => {
			const mensaje = event.data;
			if (mensaje === 'OK') {
				setTimeout(() => {
					router.replace('/checkout/ok');
				}, 1500);
			}
		};

		window.addEventListener('message', recibirMensaje);

		return () => window.removeEventListener('message', recibirMensaje);
	}, [router]);

	return (
		<div className='h-screen'>
			<iframe
				src={`${process.env.NEXT_PUBLIC_IFRAME_URL}/ingresar/${CI}`}
				width={'100%'}
				height={'100%'}
				allow='camera; microphone;'></iframe>
		</div>
	);
};
export default ContinuarPago;
