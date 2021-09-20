import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink
          activeClassName="active"
          className="navbar-brand"
          to="/"
          exact
        >
          AnimeWorld
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/anime"
              exact
            >
              Anime
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/manga"
              exact
            >
              Manga
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );

};
