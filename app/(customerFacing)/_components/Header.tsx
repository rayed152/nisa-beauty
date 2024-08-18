// components/Header.jsx
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full transition duration-300 ease-in-out sm:flex-row">
      {/* Left Section with Logo */}
      <div className="flex items-center w-1/2">
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={150}
          className="transition duration-300 ease-in-out logo"
        />
      </div>

      {/* Header Links */}
      <div className="flex flex-col items-center sm:items-end space-y-2 w-1/2">
        {/* Right Section with SignIn/SignOut and Search */}
        <div className="flex gap-3">
          <SignedOut>
            <div className="bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-400 transition duration-300">
              <SignInButton />
            </div>
          </SignedOut>
          <SignedOut>
            <div className="bg-[#678A46] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#5C776B] transition duration-300">
              <SignUpButton />
            </div>
          </SignedOut>

          <SignedIn>
            <div className="font-bold">
              <UserButton />
            </div>
          </SignedIn>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-96">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <CiSearch className="w-4 h-4 text-gray-500 transition duration-300 ease-in-out search-icon" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="p-[10px] text-md w-full outline-none rounded-xl border border-gray-300 transition duration-300 ease-in-out search-input"
          />
        </div>
      </div>
    </div>
  );
};
