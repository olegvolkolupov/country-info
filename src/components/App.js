import React, { useEffect } from 'react';

import ContriesInfo from './ContriesInfo';

import './global.css';

export default function App() {
  useEffect(()=>{
    document.title = 'Countries info';
  },[]);
  return (
    <>
      <ContriesInfo />
    </>
  )
}
