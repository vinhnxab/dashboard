import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';

export default function SideNav() {
  return (
    <>
      <div className="sidenav-header">
        <i
          className="fas fa-times position-absolute d-none d-xl-none end-0 top-0 cursor-pointer p-3 text-white opacity-5"
          aria-hidden="true"
          id="iconSidenav"
        ></i>
        <Link className="navbar-brand m-0" href="/">
          <AcmeLogo />
        </Link>
      </div>
      <hr className="horizontal light mt-0" />
      <div className="navbar-collapse ps collapse h-auto w-auto">
        <ul className="navbar-nav">
          <NavLinks />
        </ul>
      </div>
    </>
  );
}
