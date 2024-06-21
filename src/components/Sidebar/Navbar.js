import React from 'react';

const Navbar = ({user}) => {
  const signOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
        <a className="navbar-brand brand-logo" href="/dashboard">
          <img src="/assets/images/logo.svg" alt="logo" />
        </a>
        <a className="navbar-brand brand-logo-mini" href="/dashboard">
          <img src="/assets/images/logo-mini.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="mdi mdi-menu"></span>
        </button>
        <div className="search-field d-none d-md-block">
          <form className="d-flex align-items-center h-100" action="/">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <span className="input-group-text border-0 mdi mdi-magnify"></span>
              </div>
              <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
            </div>
          </form>
        </div>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" id="profileDropdown" href="/" data-bs-toggle="dropdown" aria-expanded="false">
              <div className="nav-profile-img">
                <img src="/assets/images/faces/face1.jpg" alt="imagess" />
                <span className="availability-status online"></span>
              </div>
              <div className="nav-profile-text">
                <p className="mb-1 text-black">{user.user.name.toUpperCase()}</p>
              </div>
            </a>
            <div className="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
              <div className="dropdown-item">
                <i className="mdi mdi-cached me-2 text-success"></i> change password
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item" onClick={signOut}>
                <i className="mdi mdi-logout me-2 text-primary"></i> Signout
              </div>
            </div>
          </li>
          <li className="nav-item d-none d-lg-block full-screen-link">
            <div className="nav-link">
              <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="/" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="mdi mdi-email-outline"></i>
              <span className="count-symbol bg-warning"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list" aria-labelledby="messageDropdown">
              <h6 className="p-3 mb-0">Messages</h6>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img src="/assets/images/faces/face4.jpg" alt="imagess" className="profile-pic" />
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                  <p className="text-gray mb-0">1 Minutes ago</p>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <img src="/assets/images/faces/face2.jpg" alt="imagess" className="profile-pic" />
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                  <p className="text-gray mb-0">15 Minutes ago</p>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item" href="/">
                <div className="preview-thumbnail">
                  <img src="/assets/images/faces/face3.jpg" alt="imagess" className="profile-pic" />
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                  <p className="text-gray mb-0">18 Minutes ago</p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <h6 className="p-3 mb-0 text-center">4 new messages</h6>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="/" data-bs-toggle="dropdown">
              <i className="mdi mdi-bell-outline"></i>
              <span className="count-symbol bg-danger"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-end navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <h6 className="p-3 mb-0">Notifications</h6>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item" href="/">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="mdi mdi-calendar"></i>
                  </div>
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                  <p className="text-gray ellipsis mb-0">Just a reminder that you have an event today</p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item preview-item" href="/">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="mdi mdi-cog"></i>
                  </div>
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                  <p className="text-gray ellipsis mb-0">Update dashboard</p>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-info">
                    <i className="mdi mdi-link-variant"></i>
                  </div>
                </div>
                <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                  <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                  <p className="text-gray ellipsis mb-0">New admin wow!</p>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <h6 className="p-3 mb-0 text-center">See all notifications</h6>
            </div>
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
