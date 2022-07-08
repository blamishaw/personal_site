import React from 'react';
import Header from './Header';
import Body from './Body';
import ProfileCard from './ProfileCard';
import '../styles/app.scss'

const App = () => {
  return (
    <div className='container'>
       <Header />
       <Body />
       <ProfileCard />
       <h1 className='footer-grid-area'></h1>
    </div>
   
  );
}

export default App;
