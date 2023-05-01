import { MdAccountCircle } from 'react-icons/md';
import { Outlet, Link } from "@remix-run/react";
import { Footer } from "@components/Footer";

export const Layout = ({ user }: any) => {
  return (
    <div className="px-4 pb-4 flex w-full flex-col h-screen pt-4 bg-slate-50 sm:px-6 sm:pb-14 sm:pt-8 lg:px-8 lg:pb-12 lg:pt-8">
      <div className="text-2xl text-slate-500 lg:text-6xl flex justify-between items-center">
        <Link to="/" className="w-48 lg:w-1/3"><img src="logo.png" alt="logo"/></Link>
        { user
          ? <Link to="account"><MdAccountCircle /></Link>
          : <Link to="login"><MdAccountCircle /></Link>
        }
      </div>
      <div className="mt-4 lg:mt-12 flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
