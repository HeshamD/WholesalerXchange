import authOptions from "@/app/api/auth/authOptions";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import { getServerSession } from "next-auth";
export default async function Hero() {
  const session = await getServerSession(authOptions);
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {session && <span>{session.user!.name}</span>}
      <div className="hero-map" />
      {/* left content */}
      <LeftContent />
      {/* right content */}
      <RightContent />
    </section>
  );
}
