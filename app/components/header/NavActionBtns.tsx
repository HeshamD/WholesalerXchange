"use client";
import Link from "next/link";
import Button from "../Button";
import { useSession } from "next-auth/react";

const NavActionBtns = () => {
  const { status, data: session } = useSession();
  return (
    <div className="lg:flexCenter hidden">
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">
          <Button
            type="button"
            title="login"
            icon="/user.svg"
            varient="btn_dark_green"
          />
        </Link>
      )}

      {status === "authenticated" && (
        <Link href="/api/auth/signout">
          <Button
            type="button"
            title="logout"
            icon="/user.svg"
            varient="btn_dark_green"
          />
        </Link>
      )}
    </div>
  );
};

export default NavActionBtns;
