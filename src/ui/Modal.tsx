type Props = {
	children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
	return (
		<div className='absolute left-0 right-0 top-0 z-10 h-screen w-full bg-black/40'>
			<div className='absolute left-1/2 top-1/2 z-20 min-h-[500px] min-w-[70%] translate-x-[-50%] translate-y-[-50%] rounded bg-white p-4 md:min-w-[50%]'>
				{children}
			</div>
		</div>
	);
};

export default Modal;
