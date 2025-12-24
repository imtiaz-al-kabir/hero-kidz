"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthButtons = () => {
  const session = useSession();
  return (
    <div>
      {session.status == "authenticated" ? (
        <>
          <button 
            onClick={() => signOut()} 
            className="btn btn-primary rounded-full px-6 font-bold shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105"
          >
            Logout
          </button>
        </>
      ) : (
        <Link href={"/login"}>
          <button className="btn btn-primary btn-outline rounded-full px-6 font-bold border-2 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default AuthButtons;
