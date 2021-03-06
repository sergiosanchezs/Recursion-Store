import styled from 'styled-components';
import { Button as MaterialBtn } from '@material-ui/core';

import { Link } from 'react-router-dom';

import { shade } from 'polished';

interface ProductColorProps {
  colorHex: string;
  selected: boolean;
}

export const Container = styled.div`
  padding: 32px;
  margin-left: -32px;
`;

export const ProductImage = styled.div`
  height: 400px;
  width: 350px;
  border-radius: 5px;
  position: relative;
  margin-bottom: 8px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 350px 400px;

  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const ProductName = styled(Link)`
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--text-color);
  transition: color 0.3s;

  :hover {
    color: ${shade(0.6, '#583874')};
  }
`;

export const EditProductButton = styled(MaterialBtn)`
  position: absolute;

  text-transform: uppercase;
  width: 40%;
  transition: background-color 0.3s;
  margin: 5px;

  padding: 6px 8px;
  background: rgba(161, 34, 53, 0.9);
  color: #fff;

  font-family: Roboto, Ubunto, sans-serif;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background: ${shade(0.3, 'rgba(161, 34, 53, 0.9)')};
  }
`;

export const ProductPrice = styled.p`
  margin: 3px 0 9px;
  font-weight: 600;
  font-size: 1rem;
  color: #e06b50;
`;

export const AvailableColors = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorContainer = styled.div`
  max-width: 350px;

  & + div {
    margin-left: 6px;
  }
`;

export const ProductColor = styled.button<ProductColorProps>`
  background: ${props => props.colorHex};
  border-radius: 50%;
  border: ${props =>
    props.selected ? '3px solid #e06b50' : `3px solid ${props.colorHex}`};

  height: 27px;
  width: 27px;

  box-shadow: -1px -3px 36px -5px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: -1px -3px 36px -5px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: -1px -3px 36px -5px rgba(0, 0, 0, 0.6);

  &:focus {
    outline: none;
  }
`;
