import Menu from "@/components/Menu";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="flex items-center w-screen h-screen bg-blue-900">
        <div className="w-full text-center">
          <button
            className="p-2 px-4 bg-white rounded-lg"
            onClick={() => signIn("google")}
          >
            Login with google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-900">
      <Menu />
      <i className="text-green-500 fa fa-fan text-7xl"></i>
      logged in {session.user?.email}
    </div>
  );
}
