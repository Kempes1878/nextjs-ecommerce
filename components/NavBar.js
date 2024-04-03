import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DataContext } from "../store/GlobalState";
import Cookie from "js-cookie";

function NavBar() {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart } = state;

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Logged out!" } });
    return router.push("/");
  };

  const adminRouter = () => {
    return (
      <>
        <Link href="/users" className="dropdown-item">
          Users
        </Link>
        <Link href="/create" className="dropdown-item">
          Products
        </Link>
        <Link href="/categories" className="dropdown-item">
          Categories
        </Link>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={auth.user.avatar}
            alt={auth.user.avatar}
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              transform: "translateY(-3px)",
              marginRight: "3px",
            }}
          />{" "}
          {auth.user.name}
        </a>

        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/profile" className="dropdown-item">
            Profile
          </Link>
          {auth.user.role === "admin" && adminRouter()}
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </li>
    );
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <style jsx>{`
        .navbar::after {
          display: block;
          position: absolute;
          z-index: 1001;
          content: "";
          top: 0;
          left: 50%;
          margin-left: -50vw;
          width: 100vw;
          height: 64px;
          box-shadow: 0 0 6px rgba(2, 2, 2, 0.2);
        }
      `}</style>

      <Link href="/">ECOMMERCE</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{
          zIndex: "9999",
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
        style={{
          zIndex: "99999",
        }}
      >
        <ul className="navbar-nav p-1">
          <li className="nav-item">
            <Link href="/cart" className={"nav-link" + isActive("/cart")}>
              <i
                className="fas fa-shopping-cart position-relative"
                aria-hidden="true"
              >
                <span
                  className="position-absolute"
                  style={{
                    padding: "2px 8px",
                    background: "#ed143dc2",
                    borderRadius: "50%",
                    top: "-14px",
                    right: "6px",
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  {cart.length}
                </span>
              </i>{" "}
              Cart
            </Link>
          </li>
          {Object.keys(auth).length === 0 ? (
            <li className="nav-item">
              <Link href="/signin" className={"nav-link" + isActive("/signin")}>
                <i className="fas fa-user" aria-hidden="true"></i> Sign in
              </Link>
            </li>
          ) : (
            loggedRouter()
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
