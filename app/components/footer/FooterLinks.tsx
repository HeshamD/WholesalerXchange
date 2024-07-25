import Link from "next/link";
import FooterColumn from "./FooterColumn";
import { FOOTER_LINKS, SOCIALS, FOOTER_CONTACT_INFO } from "./constants";
import Image from "next/image";

const FooterLinks = () => {
  return (
    <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
      {FOOTER_LINKS.map((columns, index) => (
        <FooterColumn title={columns.title} key={index}>
          <ul className="regular-14 flex flex-col gap-4 text-gray-30">
            {columns.links.map((link, linkIndex) => (
              <Link href="/" key={linkIndex}>
                {link}
              </Link>
            ))}
          </ul>
        </FooterColumn>
      ))}

      <div className="flex flex-col gap-5">
        <FooterColumn title={FOOTER_CONTACT_INFO.title}>
          {FOOTER_CONTACT_INFO.links.map((link) => (
            <Link
              href="/"
              key={link.label}
              className="flex gap-4 md:flex-col lg:flex-row"
            >
              <p className="whitespace-nowrap">{link.label}:</p>
              <p className="medium-14 whitespace-nowrap text-blue-70">
                {link.value}
              </p>
            </Link>
          ))}
        </FooterColumn>
      </div>
      {/* End of contact Info */}
      <div className="flex flex-col gap-5">
        <FooterColumn title={SOCIALS.title}>
          <ul className="regular-14 flex gap-4 text-gray-30">
            {SOCIALS.links.map((link) => (
              <Link href="/" key={link}>
                <Image src={link} alt="logo" width={24} height={24} />
              </Link>
            ))}
          </ul>
        </FooterColumn>
      </div>
    </div>
  );
};

export default FooterLinks;
