import React, { ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import userStore from '@/store/userStore';
import Link from 'next/link';

function Login() {
	const router = useRouter();
	const updateCi = userStore((state) => state.actions.updateCi);
	const updateToken = userStore((state) => state.actions.updateToken);

	const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		updateCi(event.target.ci.value);

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

		updateToken(data.token);
		router.push(`/ingresar/${data.token}`);
	};

	return (
		<>
			<div className='grid h-screen w-full content-center justify-center md:w-1/2'>
				<div className='w-[250px] md:w-[320px]'>
					<h1 className='pb-4 text-3xl font-bold'>Iniciar sesión</h1>
					<form onSubmit={handleSubmit}>
						<div className='mb-2'>
							<label className='block' htmlFor='ci'>
								Nro de Cedula
							</label>
							<input className='w-full px-2 py-1' type='number' id='ci' required />
						</div>
						<div>
							<label className='block' htmlFor='password'>
								Contraseña
							</label>
							<input className='w-full px-2 py-1' type='password' id='password' required />
						</div>
						<button
							type='button'
							className='mb-2 ml-auto mt-1 block text-sm text-blue-500 hover:text-blue-600'>
							<Link href='/reset-pass'>Olvidaste tu contraseña?</Link>
						</button>
						<button type='submit' className='boton-primario my-1 w-full'>
							Ingresar
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
