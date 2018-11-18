import React from 'react';

const AdminLayout = (props) => {
    return (
      <div className="admin-container">
        <div className="admin-left-nav">
          nav
        </div>
        <div className="admin-right">
          {props.children}
        </div>
      </div>
    );
}

export default AdminLayout;
