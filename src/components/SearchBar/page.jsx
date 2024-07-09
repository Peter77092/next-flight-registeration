'use client'
import { useState } from 'react';
import MenuTab from './MenuTab'
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

const SearchBar = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');

  return (
    <div className='w-full rounded-2xl border border-slate-300 flex flex-col'>
      <MenuTab setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

      <div className='xs:p-5 py-1 px-[1px]'>
        {selectedTab === 'tab1' && <Tab1 />}
        {selectedTab === 'tab2' && <Tab2 />}
        {/* {selectedTab === 'tab3' && <Tab3 />} */}
        {/* {selectedTab === 'tab4' && <Tab4 />} */}
      </div>
    </div>
  )
}

export default SearchBar