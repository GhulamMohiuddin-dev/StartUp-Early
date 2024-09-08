import React from 'react';
import TopHeader from './TopHeader';
import SearchBar from './SearchBar';
import UpcomingEvents from './UpcomingEvents';
import Events from './Events';



const MainContent = () => {
  return (
    <div className="pt-5 pb-10 gap-10 flex flex-col md:pl-30 lg:pl-0 xs:item-center" >
      <TopHeader/>
      <SearchBar/>
      <UpcomingEvents/>
      <Events/>
    </div>
  );
};

export default MainContent;
