import Item from '@/components/Shop/Item';
import MainGrid from '@/components/Shop/MainGrid';

const items: any[] = [];

for (let i = 0; i < 12; i++) {
	items.push(<Item />);
}

export default function Shop() {
	return (
		<>
			<nav className='bg-blue-800 p-4'>
				<div className='container mx-auto'>
					<div className='flex items-center justify-between'>
						<div className='text-2xl font-bold text-white'>Logo</div>
						<ul className='flex space-x-4'>
							<li className='cursor-pointer px-1 font-semibold text-white transition-all hover:scale-110'>
								Inicio
							</li>
							<li className='cursor-pointer px-1 font-semibold text-white transition-all hover:scale-110'>
								Productos
							</li>
							<li className='cursor-pointer px-1 font-semibold text-white transition-all hover:scale-110'>
								Sobre Nosotros
							</li>
							<li className='cursor-pointer px-1 font-semibold text-white transition-all hover:scale-110'>
								Contacto
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className='container mx-auto p-6'>
				<MainGrid items={items} />
			</div>
		</>
	);
}
