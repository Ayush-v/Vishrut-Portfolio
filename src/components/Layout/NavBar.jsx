import { Link } from "react-router-dom";

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
          {/* <div className="flex items-center gap-5">
            <button>hi</button>
            <button>hi</button>
            <button>hi</button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
