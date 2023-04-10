import React from 'react';
import Menu from './menu/Menu';
import TotalPosts from './totalPosts/TotalPosts';
import TotalUser from './totalUsers/TotalUsers';

function Dashboard() {
  return (
    <div style={{display: 'flex'}}>
        <Menu />
        <TotalUser />
        <TotalPosts />
    </div>
  );
}

export default Dashboard;