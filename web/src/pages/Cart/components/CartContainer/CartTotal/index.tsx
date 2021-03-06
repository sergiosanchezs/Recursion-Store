import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useHistory } from 'react-router-dom';
import Button from '../../../../../components/Button';
import formatToDollars from '../../../../../utils/formatToDollars';
import { Product } from '../../..';

import { Container } from './styles';
import { ProductApiProps } from '../CartItemContainer';
import api from '../../../../../services/api';
import { useAuth } from '../../../../../contexts/AuthContext';

interface CartTotalProps {
  products: Product[];
  isEmpty: boolean;
}

const CartTotal: React.FC<CartTotalProps> = ({ products, isEmpty }) => {
  const [productsApi, setProductsApi] = useState<ProductApiProps[]>([]);
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('products');

      setProductsApi(response.data);
    }

    loadProducts();
  }, []);

  const totalCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const qtyTotal = product.items.reduce((accumulatorItem, item) => {
        return accumulatorItem + item.quantity;
      }, 0);
      const productApi = productsApi.find(p => p._id === product.productId);
      let subTotal = 0;
      if (productApi) {
        subTotal = productApi.price * qtyTotal;
      }

      return accumulator + subTotal;
    }, 0);

    localStorage.setItem('@Recursion:cart-total', total.toString());

    return total;
  }, [products, productsApi]);

  const handleSendToCheckout = useCallback(() => {
    if (user) {
      history.push('/checkout');
    } else {
      history.push('/login');
    }
  }, [history, user]);

  return (
    <>
      <Container>
        <span>Subtotal: </span>
        <h1>{formatToDollars(totalCart)}</h1>
        <Button disabled={isEmpty} onClick={handleSendToCheckout}>
          Checkout
        </Button>
        <form action="">
          <input type="text" placeholder="Enter Coupon" />
          <Button>Apply</Button>
        </form>
      </Container>
    </>
  );
};

export default CartTotal;
