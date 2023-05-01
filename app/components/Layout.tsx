import { Outlet, Link, Form } from "@remix-run/react";
import { Footer } from "@components/Footer";

const Links = () => (
  <>
    <Link className="hover:bg-blue-200 active:bg-blue-600" to="marrow">Marrow Records</Link>
    <Link className="hover:bg-blue-200 active:bg-blue-600" to="ritmo">Ritmo del Barrio</Link>
    <Link className="hover:bg-blue-200 active:bg-blue-600" to="friends">Friends of Cornerman</Link>
    <Link className="hover:bg-blue-200 active:bg-blue-600" to="events">Events</Link>
    <Link className="hover:bg-blue-200 active:bg-blue-600" to="about">About</Link>
  </>
);

export const Layout = ({ user }: any) => {
  return (
    <div className="px-4 pb-4 flex w-full flex-col h-screen pt-4 bg-slate-50 sm:px-6 sm:pb-14 sm:pt-8 lg:px-8 lg:pb-12 lg:pt-8">
      <header className="flex items-center justify-between mb-8 bg-indigo-400 p-4 text-white">
        <Link className="flex items-center text-black text-2xl" to="/">Cornerman</Link>
        { user && <p className="hidden md:block">{user.email}</p> }
        { user
          ? <Form action="/logout" method="post">
            <button type="submit"
              className="rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600">
              Logout
            </button>
          </Form>
          : <Link className="rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600" to="login">Login</Link>
        }
      </header>
      <div className="flex h-full">
        <div className="hidden md:block">
          <div className="flex flex-col w-96 h-full bg-indigo-300">
            <Links />
          </div>
        </div>

        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
