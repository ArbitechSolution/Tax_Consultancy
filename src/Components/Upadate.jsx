import React from 'react';
import HomeUpdate from './Update/Home_page_update/HomeUpdate';
import Page from './Update/Paginging/page';
import Recent_update from './Update/Recent_Update/Recent_update';

export default function Upadate() {
  return <div>
      <HomeUpdate/>
      <Recent_update/> 
      {/* <Page/> */}
  </div>;
}
