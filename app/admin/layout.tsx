// app/admin/layout.tsx
import { redirect } from "next/navigation";
import { Nav, NavLink } from "@/components/Nav";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // Fetch the authentication data
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  // Fetch the user's role from the database
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { role: true },
  });

  if (user?.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <>
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
        <div className="flex">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Nav>
      <div className="my-6 container">{children}</div>
    </>
  );
};

export default AdminLayout;
