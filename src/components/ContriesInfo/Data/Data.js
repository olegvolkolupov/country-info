import React from 'react';

import List from './List/List';
import Table from './Table';

export default function Data({countryInfo, onHandleLink}) {
  return (
    <>
      {(countryInfo.length > 1 && <List contriesList={countryInfo} onHandleLink={onHandleLink} />)}
      {(countryInfo.length === 1 &&  <Table countryInfo={countryInfo[0]} />)}
    </>
  )
}
