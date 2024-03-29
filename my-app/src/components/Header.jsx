import React from 'react';

const Header = () => {
    return (
        <div>
        <div style={{boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)", backgroundColor: "#ffdc34"}} className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow">
      <h3 className="my-0 mr-md-auto font-weight-normal">Butterfly</h3>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="#">Features</a>
        <a className="p-2 text-dark" href="#">Enterprise</a>
        <a className="p-2 text-dark" href="#">Support</a>
        <a className="p-2 text-dark" href="#">Pricing</a>
      </nav>
      <a className="btn btn-outline-primary" href="#">Sign up</a>
    </div>
        </div>
    );
};

export default Header;