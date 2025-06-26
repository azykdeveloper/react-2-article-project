import { useSelector } from "react-redux";
import { NavLink } from "react-router";

function AppNavbar() {
  const auth = useSelector((state) => state.auth);
  return (
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

          {auth.isAuthenticated ? (
            <div class="dropdown">
              <span
                class="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {auth.user.username}
              </span>
              <ul class="dropdown-menu">
                <li>
                  <NavLink
                    to={"/new-article"}
                    className="dropdown-item text-primary"
                    aria-current="page"
                  >
                    Yangi maqola
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to={"/profile"} className="dropdown-item">
                    Profil
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to={"/logout"} className="dropdown-item text-danger" >
                    Chiqish
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <NavLink
                to={"/login"}
                className="btn btn-outline-dark me-2"
                role="button"
              >
                Kirish
              </NavLink>
              <NavLink
                to={"/register"}
                className="btn btn-outline-primary"
                role="button"
              >
                Ro'yxatdan o'tish
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default AppNavbar;
