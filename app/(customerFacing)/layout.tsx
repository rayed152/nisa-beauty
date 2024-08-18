import { Nav, NavLink } from "@/components/Nav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/orders">My Orders</NavLink>
        <div className="flex">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}
