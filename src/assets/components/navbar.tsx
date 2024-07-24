import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };
  return (
    <div className="flex flex-row w-full justify-between px-5 py-7 shadow-lg bg-gray-800 text-white font-bold">
      <h2 className=" text-base">MHD Fajar Ramadhan</h2>
      <div className="flex flex-row gap-10"></div>
      <Link to={"/"}>Home</Link>
      <Link to={"/movie"}>Movie</Link>
      <Link to={"/tv-show"}>TV Show</Link>
      <div onClick={handleLogout}>Logout</div>
    </div>
  );
};

export default Navbar;
