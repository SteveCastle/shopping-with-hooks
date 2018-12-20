import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import {
  ShopProvider,
  CollectionProvider,
  useShop,
  useCart,
  useProduct,
  useUser,
  useCollection
} from "./shop";

const Container = styled.div`
  background: #f3f3f3;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  background: white;
  flex: 1 1 0;
  margin: 10px;
  padding: 10px;
`;

const SectionHeader = styled.h2``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const TextInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
`;

const ShopSearchWidgets = () => {
  const shop = useShop() || {};
  const collection = useCollection() || {};
  return (
    <div>
      <SectionHeader>{`${shop.title} Widget`}</SectionHeader>
      <Form>
        <TextInput />
        <TextInput />
      </Form>
    </div>
  );
};

const ShopCollection = () => {
  const shop = useShop() || {};
  const { results } = useCollection() || {};
  debugger;
  return (
    <div>
      <SectionHeader>{`${shop.title} Collection`}</SectionHeader>
      {results.map(product => (
        <h3 key={product.title}>{product.title}</h3>
      ))}
    </div>
  );
};

const ProductDetail = () => {
  const shop = useShop() || {};
  const [product] = useProduct() || {};
  return (
    <div>
      <SectionHeader>{`${shop.title} Detail`}</SectionHeader>
      <h3>{product.title}</h3>
    </div>
  );
};

const User = () => {
  const shop = useShop() || {};
  const [user] = useUser() || {};
  return (
    <div>
      <SectionHeader>{`${shop.title} User`}</SectionHeader>
      <h3>{user.name}</h3>
    </div>
  );
};

const Cart = () => {
  const shop = useShop() || {};
  const [cart] = useCart() || {};
  return (
    <div>
      <SectionHeader>{`${shop.title} Cart`}</SectionHeader>
      {cart.map(product => (
        <h3 key={product.title}>{product.title}</h3>
      ))}
    </div>
  );
};

function App() {
  return (
    <Container>
      <CollectionProvider>
        <Row>
          <Column>
            <ShopSearchWidgets />
          </Column>
          <Column>
            <ShopCollection />
          </Column>
        </Row>
      </CollectionProvider>
      <Row>
        <Column>
          <ProductDetail />
        </Column>
      </Row>
      <Row>
        <Column>
          <User />
        </Column>
      </Row>
      <Row>
        <Column>
          <Cart />
        </Column>
      </Row>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ShopProvider storeId={144444}>
    <App />
  </ShopProvider>,
  rootElement
);
