import React from "react";

 function MainLayout({ children }) {
  return (
    <div className="main-layout d-flex justify-content-center align-items-center">
      <div className="layout-content d-flex align-items-center justify-content-between">
        {children}
      </div>
    </div>
  );
}
export default MainLayout;
