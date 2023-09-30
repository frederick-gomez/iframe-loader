import Item from '@/components/Shop/Item';
import MainGrid from '@/components/Shop/MainGrid';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';

const items: any[] = [];
const images = [
	'https://www.sallustro.com.py/storage/sku/cu5992010-1jpg.jpg.webp',
	'https://www.sallustro.com.py/storage/sku/cu5992480-1jpg.jpg.webp',
	'https://www.sallustro.com.py/storage/sku/dn2393010-1jpg.jpg.webp',
	'https://www.sallustro.com.py/storage/sku/dd0638100-1jpg.jpg.webp',
	'https://www.sallustro.com.py/storage/sku/dn2393100-1jpg.jpg.webp',
	'https://www.sallustro.com.py/storage/sku/cu5982010-1jpg.jpg.webp',
	'https://www.sallustro.com.py/storage/sku/dm6255206-1jpg.jpg.webp',
	'https://www.sallustro.com.py/storage/sku/dm4720010-1jpg.jpg.webp',
	'https://www.sallustro.com.py/storage/sku/dd5276045-1jpg.jpg.webp',
];

for (let i = 0; i < 9; i++) {
	items.push(<Item src={images[i]} />);
}

export default function Shop() {
	return (
		<>
			<nav className='bg-blue-800 p-4'>
				<div className='container mx-auto'>
					<div className='flex items-center justify-between'>
						<div className='text-2xl font-bold text-white'>
							<Image src={Logo} alt='logo' width={40} height={40} />
						</div>
						<ul className='flex space-x-4'>
							<li className='cursor-pointer px-1 font-semibold text-white transition-all hover:scale-110'>
								<Link href='/'>Inicio</Link>
							</li>
							<li className='cursor-pointer px-1 font-semibold text-white transition-all hover:scale-110'>
								<Link href='/perfil'>Perfil</Link>
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
