import { NavLink, Outlet } from "react-router-dom";
import "./pageWrapper.css";
const PageWrapper = () => {
  return (
    <>
      <nav>
        <ul className="Nav-links">
          <div className="logo">
            <NavLink to="/">
              <img
                className="img"
                src="./public/281786_super_hero_superman_icon.png"
              />
            </NavLink>
            <p className="logo-name">SuperHero Hunter</p>
          </div>
          <div className="nav-links">
            <NavLink to="/">
              <button>Home</button>
            </NavLink>
            <NavLink to="/superheros">
              <button>Superheros</button>
            </NavLink>
            <NavLink to="/favorites">
              <button>Favorites</button>
            </NavLink>
          </div>
        </ul>
      </nav>
      <Outlet />
      <footer className="Footer">
        <div className="logo-footer">
          <NavLink to="/">
            <img
              className="img-footer"
              src="./public/281786_super_hero_superman_icon.png"
            />
          </NavLink>
        </div>
      </footer>
    </>
  );
};
export default PageWrapper;
