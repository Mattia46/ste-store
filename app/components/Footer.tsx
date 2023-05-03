import { BsFacebook } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';

export const Footer = () => {
  return (
    <div className="text-2xl self-center justify-center flex p-4 lg:w-64 lg:text-4xl">
      <div className="flex w-48 md:w-96  justify-between">
        <a aria-label="Phone" href="tel:085 431 3666">
          <MdCall />
        </a>
        <a rel="noreferrer" target="_blank" href="mailto:hydrohousesrl@gmail.com">
          <BsFacebook />
        </a>
        <a rel="noreferrer" href="https://www.google.com/maps/dir/?api=1&amp;destination=Via%20Tiburtina%20Valeria,%20427,%2065129%20Pescara%20PE,%20Italy" target="_blank">
          <ImLocation />
        </a>
        <a href="mailto:hydrohousesrl@gmail.com">
          <MdEmail />
        </a>
      </div>
    </div>
  )
};
