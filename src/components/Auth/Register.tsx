import React, { ChangeEvent } from 'react';
import { useRouter } from 'next/router';

function Register() {
	const router = useRouter();

	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		router.push(`/registrar/${event.target.ci.value}`);
	};

	return (
		<div className='grid h-screen w-full content-center justify-center md:w-1/2'>
			<div className='w-[250px] md:w-[320px]'>
				<h1 className='pb-4 text-3xl font-bold'>Registrarse</h1>
				<form onSubmit={handleSubmit}>
					<div className='mb-2'>
						<label className='block' htmlFor='usuario'>
							Usuario
						</label>
						<input className='w-full px-2 py-1' type='text' id='usuario' required />
					</div>
					<div className='pb-2'>
						<label className='block' htmlFor='password'>
							Contraseña
						</label>
						<input className='w-full px-2 py-1' type='password' id='password' required />
					</div>
					<div className='pb-2'>
						<label className='block' htmlFor='ci'>
							Nro de Identidad
						</label>
						<input className='w-full px-2 py-1' type='number' id='ci' required />
					</div>
					<button type='submit' className='boton-primario my-4 w-full'>
						Crear Cuenta
					</button>
				</form>
			</div>
		</div>
	);
}

export default Register;
