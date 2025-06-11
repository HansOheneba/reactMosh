import React, { ReactNode } from 'react'
interface AlertProps {
    children: ReactNode;
}

const Alert = ({children}: AlertProps ) => {
  return (
    <div className={`alert alert-warning alert-dismissible fade show`} role="alert">
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      {children}
    </div>
  );
}

export default Alert