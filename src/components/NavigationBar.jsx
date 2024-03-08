import { Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function NavigationBar() {
  return (
    <Navbar
      variant="gradient"
      color="indigo"
      placeholder={""}
      className="mx-auto  px-4 py-2 lg:px-8 lg:py-4 my-4"
    >
      <div className="container mx-auto flex items-center justify-between ">
        <Typography
          placeholder={""}
          variant="h5"
          color="white"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          GHM
        </Typography>
        <Link
          to="/login"
          className="font-semibold text-gray-100 hover:underline focus:outline-none text-md bg-cyan-500 px-4 py-1 rounded-md"
        >
          Login
        </Link>
      </div>
    </Navbar>
  );
}
