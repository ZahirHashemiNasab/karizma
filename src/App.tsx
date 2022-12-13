import "./App.css";
import { useSelector } from "react-redux";
import { useGetProductsQuery, useGetUsersQuery } from "./store/services/shop";
import { useEffect, useState } from "react";
import BoxView from "./components/Box";
import BoxList from "./components/BoxList";

function App() {
  const state = useSelector((state: any) => state);
  const products = useGetProductsQuery("shop");
  const users = useGetUsersQuery("shop");
  const [userState, setUserState] = useState([]);
  const [productState, setProductState] = useState([]);
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    setProductState(products.data);
  }, [products.data]);
  useEffect(() => {
    setUserState(users.data);
  }, [users.data]);
  return (
    <div className="App">
      <BoxView
        id={id}
        setId={setId}
        data={users.data}
        setDataState={setUserState}
        dataState={userState}
        type="users"
      />
      <BoxView
        id={id}
        setId={setId}
        data={products.data}
        setDataState={setProductState}
        dataState={productState}
        type="products"
      />
      <BoxList state={state?.karizma?.list} />
    </div>
  );
}

export default App;
