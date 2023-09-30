import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Image from 'next/image';
import Logo from '../../../public/logo.png';

const AuthScreen = () => {
	const [isLogin, setIsLogin] = useState(true);

	const toggleLoginPage = () => setIsLogin(!isLogin);

	return (
		<div className='relative flex'>
			<div className='absolute top-4 flex w-full justify-between px-6 md:w-1/2'>
				<div>
					<Image src={Logo} alt='logo' width={50} height={50} />
				</div>
				<button onClick={toggleLoginPage}>{isLogin ? 'Registrarse' : 'Ingresar'}</button>
			</div>
			{isLogin ? <Login /> : <Register />}
			<div className='relative hidden h-screen md:block md:w-1/2'>
				<Image alt='placeholder' src='/img-1.jpg' style={{ objectFit: 'cover' }} fill />
			</div>
		</div>
	);
};

export default AuthScreen;
