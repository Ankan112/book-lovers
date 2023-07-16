import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";
import { setUser } from "../../redux/features/user/userSlice";

const Header = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-books">All Books</Link>
            </li>
            {user.email && (
              <li>
                <Link to="/new-book">Add New Book</Link>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Book Lovers</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-books">All Books</Link>
          </li>
          {user.email && (
            <li>
              <Link to="/new-book">Add New Book</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          {!user.email && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign up</Link>
              </li>
            </>
          )}
          {user.email && (
            <button onClick={handleLogOut} className="btn btn-primary">
              Log out
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
