import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import FundoElement from "./FundoElement";

const Content = () => {
  const [investmentsInfo, setinvestmentsInfo] = useState([]);
  const [reportsInfo, setreportsInfo] = useState([]);
  const [percentageData, setpercentageData] = useState([]);

  function compare(a, b) {
    if (a.month < b.month) {
      return -1;
    }
    if (a.month > b.month) {
      return 1;
    }
    return 0;
  }

  function compare1(a, b) {
    if (a.investmentId < b.investmentId) {
      return -1;
    }
    if (a.investmentId > b.investmentId) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    const getDatas = async () => {
      try {
        const responseInvestment = await axios.get(
          "http://localhost:3500/investments"
        );
        const responseReports = await axios.get(
          "http://localhost:3500/reports"
        );
        const percentageData = await axios.get(
          "http://localhost:3500/percentage"
        );
        const investimentData = responseInvestment.data;
        const reportsData = responseReports.data;
        reportsData.sort(compare);
        reportsData.sort(compare1);
        setinvestmentsInfo(investimentData);
        setreportsInfo(reportsData);
        setpercentageData(percentageData.data);
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
          percentageData={percentageData}
        />
      ))}
    </main>
  );
};

export default Content;
