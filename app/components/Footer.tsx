import { BsFacebook } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { MdCall } from 'react-icons/md';

export const Footer = () => {
  return (
    <div className="text-2xl self-center justify-center fixed bg-gray-400 md:bg-transparent w-full bottom-0 flex p-2">
      <div className="flex w-48 md:w-96 text-white md:text-black md:text-3xl justify-between">
        <a aria-label="Phone" href="tel:085 431 3666">
          <MdCall />
        </a>
        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/stefano.marro">
          <BsFacebook />
        </a>
        <a href="mailto">
          <MdEmail />
        </a>
      </div>
    </div>
  )
};
