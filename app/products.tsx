// pages/api/products.tsx
import type { NextApiRequest, NextApiResponse } from 'next';
import products, { Product } from '../app/products/products';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    if (req.query.id) {
      const product = products.find((p) => p.id === parseInt(req.query.id as string));
      return res.status(200).json(product || {});
    }
    return res.status(200).json(products);
  }

  if (req.method === 'POST') {
    const newProduct: Product = req.body;
    newProduct.id = products.length + 1;
    products.push(newProduct);
    return res.status(201).json(newProduct);
  }

  if (req.method === 'PUT') {
    const { id } = req.query;
    const index = products.findIndex((p) => p.id === parseInt(id as string));
    if (index === -1) return res.status(404).json({ message: 'Not found' });

    products[index] = { ...products[index], ...req.body };
    return res.status(200).json(products[index]);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    const index = products.findIndex((p) => p.id === parseInt(id as string));
    if (index === -1) return res.status(404).json({ message: 'Not found' });

    products.splice(index, 1);
    return res.status(204).end();
  }

  res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}