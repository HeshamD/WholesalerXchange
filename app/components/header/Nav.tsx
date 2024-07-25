import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import NavActionBtns from "./NavActionBtns";
import MobileNav from "./MobileNav";

const Nav = () => {
  return (
    <header>
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        {/* logoSVG */}
        <Link href="/">
          <Image src="/header-logo.svg" alt="Logo" width={130} height={29} />
        </Link>
        {/* links */}
        <NavLinks />
        {/* action btn  */}
        <NavActionBtns />
        {/* mobileNav */}
        <MobileNav />
      </nav>
    </header>
  );
};

export default Nav;
