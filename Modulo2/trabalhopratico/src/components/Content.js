import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FundoElement from "./FundoElement";

const Content = () => {
  const [investmentsInfo, setinvestmentsInfo] = useState([]);
  const [reportsInfo, setreportsInfo] = useState([]);

  useEffect(() => {
    const getDatas = async () => {
      try {
        const responseInvestment = await axios.get(
          "http://localhost:3500/investments"
        );
        const responseReports = await axios.get(
          "http://localhost:3500/reports"
        );
        const investimentData = responseInvestment.data;
        const reportsData = responseReports.data;
        setinvestmentsInfo(investimentData);
        setreportsInfo(reportsData);
      } catch (error) {
        console.log(error);
      }
    };

    getDatas();
  }, []);

  return (
    <main>
      {investmentsInfo.map((item) => (
        <FundoElement
          item={item}
          key={item.id}
          reportsInfo={reportsInfo}
          setreportsInfo={setreportsInfo}
        />
      ))}
    </main>
  );
};

export default Content;
