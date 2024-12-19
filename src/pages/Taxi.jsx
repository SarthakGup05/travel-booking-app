import React from "react";
import Header from "../components/taxi/Hero";
import CabServices from "../components/taxi/Services";
import CabOptions from "../components/taxi/Caboptions";
import AirportRatesTable from "../components/taxi/AirportRates";
import LocalTravelRatesTable from "../components/taxi/LocalRates";
import OutstationJourneyRatesTable from "../components/taxi/Outstation";
import TermsAndConditions from "../components/taxi/TermsConditions";

const Taxi = () => {
  return (
    <>
      <Header />
      <CabServices/>
      <CabOptions/>
      <AirportRatesTable/>
      <LocalTravelRatesTable/>
      <OutstationJourneyRatesTable/>
      <TermsAndConditions/>

    </>
  );
};

export default Taxi;
