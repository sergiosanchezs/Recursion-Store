import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, SeeProduct } from './styles';
import api from '../../../../services/api';

export interface ItemProps {
  color: string;
  imageColor: string; // HEX
  productImages: Array<{
    imageUrl: string;
  }>;
  sizes: Array<{
    sizeTag: string;
    quantity: number;
  }>;
}

export interface Product {
  _id: string;
  items: ItemProps[];
  name: string;
  price: number;
}

const ProductOverview: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <Container>
        <SeeProduct
          style={{
            backgroundImage: `url(http://localhost:3333/files/db9f69d2dcf820c89151-blueDress.jpg)`,
          }}
        >
          <strong>Dresses</strong>
          <Link to="products">See Products</Link>
        </SeeProduct>
        <SeeProduct
          style={{
            backgroundImage: `url(http://localhost:3333/files/d96223fe3cb566e13ff4-blackSweater.jpg)`,
          }}
        >
          <strong>Sweater</strong>
          <Link to="products">See Products</Link>
        </SeeProduct>
        <SeeProduct
          style={{
            backgroundImage: `url(http://localhost:3333/files/12b0c62915d402132fb6-polo_shirt_blue_1.jpg)`,
          }}
        >
          <strong>Kids</strong>
          <Link to="products">See Products</Link>
        </SeeProduct>
        <SeeProduct
          style={{
            backgroundImage: `url(data:image/jpeg;base64,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)`,
          }}
        >
          <strong>Face Musk</strong>
          <Link to="products">See Products</Link>
        </SeeProduct>
      </Container>
    </>
  );
};

export default ProductOverview;

// background: url('https://digital.michaelkors.com/refreshes/2020/holiday/refresh1/global/desktop/homepage/HP_PROMO_11-1.jpg')
//     no-repeat center;
