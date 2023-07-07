import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { ci } = req.body;

	const token = jwt.sign({ ci: ci }, process.env.JWT_KEY!, {
		algorithm: 'HS256',
	});

	return res.status(200).json({ token });
}
