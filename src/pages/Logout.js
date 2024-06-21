import React from 'react'

const Logout = () => {
    localStorage.removeItem('token');
    window.location.reload();
    return (
      <div>Logout</div>
    )
}

export default Logout;