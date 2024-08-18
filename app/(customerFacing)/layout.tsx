import { Header } from "@/app/(customerFacing)/_components/Header";
import { SubHeader } from "./_components/SubHeader";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container mx-auto h-screen ">
        <Header />
        <SubHeader />
        {children}
      </div>
    </>
  );
}
