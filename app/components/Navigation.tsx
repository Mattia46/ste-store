import { useState } from 'react';
import { Footer } from "@components/Footer";
import { Outlet, Link, Form } from "@remix-run/react";
import { BiMenu } from 'react-icons/bi';
import { MdAccountCircle } from 'react-icons/md';

export const Navigation = ({ user }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="md:flex md:flex-col md:h-screen">
      <header className="bg-gray-600 h-16 top-0 fixed w-full z-50">
        <div className="flex items-center justify-between p-4">
          <Link className="flex items-center text-white text-2xl" to="/">Cornerman</Link>
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="block text-white text-3xl hover:text-white focus:text-white focus:outline-none">
            <BiMenu />
          </button>
        </div>
        { isOpen && <nav className="md:float-right bg-gray-600 md:w-72 relative z-50">
          <div className="px-2 pt-2 pb-4 sm:p-0" onClick={() => setIsOpen(false)}>
            <Link className="mt-1 block px-4 py-1 text-white font-semibold rounded hover:bg-gray-800" to="marrow">Marrow Records</Link>
            <Link className="mt-1 block px-4 py-1 text-white font-semibold rounded hover:bg-gray-800" to="ritmo">Ritmo del Barrio</Link>
            <Link className="mt-1 block px-4 py-1 text-white font-semibold rounded hover:bg-gray-800" to="friends">Friends of Cornerman</Link>
            <Link className="mt-1 block px-4 py-1 text-white font-semibold rounded hover:bg-gray-800" to="events">Events</Link>
            <Link className="mt-1 block px-4 py-1 text-white font-semibold rounded hover:bg-gray-800" to="about">About</Link>
          </div>
          <div className="px-4 py-5 border-t border-gray-800">
            <div className="flex">
              <MdAccountCircle className="text-3xl text-white" />
              { user && <p className="mt-1 px-2 hidden md:block text-white">{user.email}</p> }
            </div>
            <div className="mt-4" onClick={() => setIsOpen(false)}>
              { user
                ? <Form action="/logout" method="post">
                  <button type="submit"
                    className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
                    Logout
                  </button>
                </Form>
                : <Link className="mt-1 block w-full py-1 text-white font-semibold rounded hover:bg-gray-800" to="login">Login</Link>
              }

            </div>
          </div>
        </nav> }
      </header>
      <div className="grow mt-16" onClick={() => setIsOpen(false)}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
};
