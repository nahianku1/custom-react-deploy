import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
