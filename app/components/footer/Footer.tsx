import Link from "next/link";
import Image from "next/image";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="./footer-logo.svg" alt="logo" width={74} height={29} />
          </Link>
          <FooterLinks />
        </div>
        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 Wholesaler Xchange | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
