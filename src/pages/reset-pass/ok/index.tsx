import { useRouter } from 'next/router';
import { useEffect } from 'react';
import OkIcon from '../../checkout/ok/OkIcon';

export default function OkPage() {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.replace('/');
		}, 5000);
	}, [router]);

	return (
		<div className='flex h-screen items-center justify-center'>
			<div className='min-w-[500px] rounded bg-green-200 px-6 py-12 text-center'>
				<p className='mb-2 text-xl font-semibold'>
					<span className='mb-2 flex w-full justify-center'>
						<OkIcon />
					</span>
					<span className='pr-3'>Se restrablecio su contraseña</span>
				</p>
				<p>Se te redireccionará nuevamente a la página de inicio</p>
			</div>
		</div>
	);
}
