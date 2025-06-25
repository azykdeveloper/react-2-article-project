import { NavLink } from "react-router";

function AppNavbar() {
  return (
    <>
      <header className="z-index-3 fixed-top">
        <div className="container border-bottom py-3 ">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <NavLink
            to={"/"}
              end
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none px-3 py-1 fw-bold text-uppercase letter-spacing-5 font-monospace bg-dark"
              style={{ letterSpacing: "3px" }}
            >
              Maqola
            </NavLink>

            <div>
              <NavLink to={"/login"} className="btn btn-outline-dark me-2" role="button" >
                Kirish
              </NavLink>
              <NavLink to={"/register"} className="btn btn-outline-primary" role="button" >
                Ro'yxatdan o'tish
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default AppNavbar;
