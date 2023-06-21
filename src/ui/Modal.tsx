import { createPortal } from 'react-dom';

type Props = {
	children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
	return createPortal(
		<>
			<div className='absolute left-0 right-0 top-0 z-10 h-screen w-full bg-black/40'></div>
			<div className='absolute left-1/2 top-1/2 z-20 min-h-[500px] min-w-[70%] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded bg-white p-4 md:min-w-[50%]'>
				{children}
			</div>
		</>,
		document.body
	);
};

export default Modal;
