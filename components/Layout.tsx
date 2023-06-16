import Menu from "@/components/Menu";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { data: session } = useSession();
  // if (!session) {
  //   return (
  //     <div className="flex items-center w-screen h-screen bg-light">
  //       <div className="w-full text-center">
  //         <button
  //           className="p-2 px-4 bg-white rounded-lg"
  //           onClick={() => signIn("google")}
  //         >
  //           Login with google
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="flex min-h-screen min-w-screen bg-wrapper">
      <div className="hidden lg:block">
        <Menu />
      </div>
      <div className="flex flex-col flex-grow gap-2 ">
        <Header />
        <div className="flex-grow px-5 py-10 mb-5 mx-5 sm:p-10 sm:mb-10 lg:mr-10 lg:mx-0 bg-white rounded-[35px] shadow-offset-left ">
          {children}
        </div>
      </div>
    </div>
  );
}
