import React from 'react';

function Menu() {
  return (
    <div style={{ width: '200px' }}>
      <ul style={{ textAlign: 'left' }}>
        <li>Manage User
          <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
            <li><a href="/list-user">List User</a></li>
            <li><a href="/add-user">Add User</a></li>
          </ul>
        </li>
        <li>Manage Posts
          <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
            <li><a href="/list-posts">List Posts</a></li>
            <li><a href="/add-posts">Add Posts</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Menu;