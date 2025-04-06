import PublicHeader from "@/components/public-header";
import PublicFooter from "@/components/public-footer";
import LandingV1 from "@/components/landing/LandingV1";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />

      <LandingV1 />

      <PublicFooter />
    </div>
  );
}
