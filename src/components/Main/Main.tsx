import React from 'react';
import Dialogs from "./Dialogs/Dialogs";
import Body from "./Body/Body";

const Main: React.FC = () => {
  return (
    <div className='main-display'>
      <div className="main-display__dialogs">
        <Dialogs/>
      </div>
      <div className="main-display__body">
        <Body/>
      </div>
    </div>
  );
};

export default Main;