import React, { useEffect, useState } from 'react';

import { Container, Form } from './styles';

interface ShippingFormProps {
  isShippingFormFilled(formFilled: boolean): void;
  handleIsSameAddress(): void;
  handleAddressData(
    addressData: string,
    countryData: string,
    postalData: string,
    stateData: string,
    cityData: string,
  ): void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({
  isShippingFormFilled,
  handleIsSameAddress,
  handleAddressData,
}) => {
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [postal, setPostal] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (
      address === '' ||
      country === '' ||
      postal === '' ||
      state === '' ||
      city === ''
    ) {
      isShippingFormFilled(false);
    } else {
      isShippingFormFilled(true);
    }

    handleAddressData(address, country, postal, state, city);
  }, [
    address,
    country,
    postal,
    state,
    city,
    handleAddressData,
    isShippingFormFilled,
  ]);

  return (
    <>
      <Container>
        <h3>Shipping Address</h3>
        <Form>
          <span>Address</span>
          <input
            type="text"
            className="main-input"
            placeholder="Ex. 101 Egliton Ave."
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <div>
            <div className="input">
              <span>Country</span>
              <input
                type="text"
                placeholder="Ex. Canada"
                value={country}
                onChange={e => setCountry(e.target.value)}
              />
            </div>
            <div className="input next-input">
              <span>Postal Code</span>
              <input
                type="text"
                placeholder="Ex. M4B 2P1"
                value={postal}
                onChange={e => setPostal(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="input">
              <span>State</span>
              <input
                type="text"
                placeholder="Ex. Ontario"
                value={state}
                onChange={e => setState(e.target.value)}
              />
            </div>
            <div className="input next-input">
              <span>City</span>
              <input
                type="text"
                placeholder="Ex. Toronto"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </div>
          </div>
        </Form>
        <div>
          <input type="checkbox" onChange={handleIsSameAddress} />
          <span>Use this address as billing address</span>
        </div>
      </Container>
    </>
  );
};

export default ShippingForm;
