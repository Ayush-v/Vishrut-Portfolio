import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

export default function NavBar() {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-3xl">
                Vishrut
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-5 text-xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx("", {
                  "underline text-primary": isActive,
                  "no-underline": !isActive,
                })
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/allWork"
              className={({ isActive }) =>
                clsx("", {
                  "underline text-primary": isActive,
                  "no-underline": !isActive,
                })
              }
            >
              All Work
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
