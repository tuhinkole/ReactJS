import React from 'react'
import PropTypes from 'prop-types';


const Header=props=> {

    const {name}=props;
  return (
    <div>
        <h1>{name}</h1>
      
    </div>
  )
}

Header.defaultProps = {
    name:"My App"
};

Header.propTypes={
    name:PropTypes.string.isRequired
};

export default Header;
