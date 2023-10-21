import React, { useEffect, useState } from "react";
import UserContext from "./Context";
import {
  CreateAccountView,
  CurrencyConvertor,
} from "../ApiEndPoint/ApiCalling";
import xmlJs from "xml-js";

const State = (props) => {
  const [crateUserXmlView, setcreateUserXmlView] = useState({});
  const [Mode, setMode] = useState("semi-dark");
  const [PartsCatalougueCart, setPartsCatalougueCart] = useState([]);
  const [UserInformatio, setUserInformatio] = useState({});
  const [PartsCatloguelength, setPartsCatloguelength] = useState(0);
  const [Currencyconvert, setCurrencyconvert] = useState("");
  const [PresentCurrency, setPresentCurrency] = useState("INR");
  const [Userlanguage, setUserlanguage] = useState(navigator.language);

  let user = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    debugger;
    console.log(Userlanguage);
    let user = JSON.parse(localStorage.getItem("userData"));
    console.log(user);
    console.log(user?.locale);
    setUserlanguage(user?.locale);
    setUserInformatio(user);
    CurrencyConvertor(user?.currency)
      .then((res) => {
        // console.log(res?.rates);
        let fromRate = res?.rates[PresentCurrency];
        let toRate = res?.rates[user?.currency];
        const value = toRate / fromRate;
        // const value = ((toRate / fromRate) * 500).toFixed(2);
        setCurrencyconvert(value);
      })
      .catch((err) => {
        console.log(err);
      });

    // CreateAccountView()
    //   .then((res) => {
    //     const jsonData = xmlJs.xml2json(res.data, { compact: true, spaces: 2 });
    //     console.log(res);
    //     setcreateUserXmlView(jsonData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [user?.currency, user?.locale]);
  return (
    <UserContext.Provider
      value={{
        Currencyconvert,
        Userlanguage,
        setUserlanguage,
        setCurrencyconvert,
        setPresentCurrency,
        PresentCurrency,
        crateUserXmlView,
        setMode,
        Mode,
        setPartsCatalougueCart,
        PartsCatalougueCart,
        setUserInformatio,
        setPartsCatloguelength,
        PartsCatloguelength,
        UserInformatio,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default State;
