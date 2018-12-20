import React, { useContext, useState } from "react";

// Current Global Shop Context.
const ShopContext = React.createContext();

// Context to manage state of an active collection search, filter, and sort state.
const CollectionContext = React.createContext();

// Shop provider should wrap the entire app, it takes a config object as a prop.
export const ShopProvider = ({ config, children }) => {
  const title = "Bobs Burgers";
  const [user] = useState({ name: "My User" });
  const [cart] = useState([{ title: "My Product" }]);
  return (
    <ShopContext.Provider value={{ title, user, cart }}>
      {children}
    </ShopContext.Provider>
  );
};

// Collection provider should be placed inside a ShopProvider component.
// collection results or filter,search,sort ui. It also will maintain a history.
export const CollectionProvider = ({ config, children }) => {
  const [filters] = useState({});
  const [results] = useState([
    { title: "My Product" },
    { title: "My Second Product" },
    { title: "My Third Product" }
  ]);
  return (
    <CollectionContext.Provider value={{ filters, results }}>
      {children}
    </CollectionContext.Provider>
  );
};

// Demo hook to get shop functionality.
// More specific ones will follow.
export const useShop = () => {
  const context = useContext(ShopContext);
  return context;
};

// Hook to get collection functionality.
// Results of a specific collection and collection actions.
export const useCollection = () => {
  const context = useContext(CollectionContext);
  return context;
};

// Hook to inject cart functionality.
// Returns global cart state, and actions to manipulate the cart.
export const useUser = () => {
  const { user } = useContext(ShopContext);
  return [user];
};

// Hook to inject cart functionality.
// Returns global cart state, and actions to manipulate the cart.
export const useProduct = () => {
  const [product] = useState({ title: "My Product" });
  return [product];
};

// Hook to inject cart functionality.
// Returns global cart state, and actions to manipulate the cart.
export const useCart = () => {
  const { cart } = useContext(ShopContext);
  return [cart];
};
