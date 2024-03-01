import { NavLink, Outlet } from "react-router-dom";
import "./pageWrapper.css";

const PageWrapper = () => {
  return (
    <>
      <nav>
        <ul className="Nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/superheros">Superheros</NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default PageWrapper;
