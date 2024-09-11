import Header from '../../../components/faculty_components/fac_landing_components/Header';
import Table from '../../../components/faculty_components/fac_landing_components/Table';

import React from 'react';
import './fac_landing.css';

const Faclanding = () => {
  return (
    <div className="main">
      <Header />
      <p id="intro">WELCOME (Branch NAME)</p>
      <Table />
    </div>
  );
};

export default Faclanding;
