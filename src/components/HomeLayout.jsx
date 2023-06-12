import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from './Navbar';

function HomeLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === 'loading';
  console.log(67, isLoading);
  return (
    <div>
      <Navbar />
      <div className="page">
        {isLoading ? <div className="loading" /> : <Outlet />}
      </div>
    </div>
  );
}

export default HomeLayout;
