import React, { ReactNode } from 'react';

type Props = {
	items: ReactNode[];
};

export default function MainGrid({ items }: Props) {
	return (
		<div className='grid grid-cols-3 gap-4'>
			{items.map((item, index) => (
				<div key={index} className='rounded bg-white p-4 shadow'>
					{item}
				</div>
			))}
		</div>
	);
}
