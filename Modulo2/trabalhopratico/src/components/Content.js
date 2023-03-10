import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FundoElement from "./FundoElement";

const Content = () => {
  const [fundoElement, setfundoElement] = useState([]);

  useEffect(() => {
    const getInvestiments = async () => {
      try {
        const response = await axios.get("http://localhost:3500/investments");
        const data = response.data;
        setfundoElement(data);
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getInvestiments();
  }, []);

  return (
    <main>
      {fundoElement.map((item) => (
        <FundoElement item={item} key={item.id} />
      ))}
    </main>
  );
};

export default Content;
