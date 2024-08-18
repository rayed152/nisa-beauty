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
      <div className="container mx-auto min-h-screen ">
        <Header />
        <SubHeader />
        {children}
      </div>
    </>
  );
}

// import { Header } from "@/app/(customerFacing)/_components/Header";
// import { SubHeader } from "./_components/SubHeader";
// import { Suspense } from "react";
// import DelayedRender from "./_components/DelayedRender";
// import Loading from "./_components/Loading";

// export const dynamic = "force-dynamic";

// export default function Layout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <>
//       {/* <Suspense
//         fallback={
//           <div>
//             <Loading />
//           </div>
//         }> */}
//         <div className="container mx-auto min-h-screen ">
//           <Header />
//           <SubHeader />

//           <DelayedRender>{children}</DelayedRender>
//         </div>
//       {/* </Suspense> */}
//     </>
//   );
// }
