import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import Image from "next/image";

import defaultAvatar from "../public/default-avatar.png";

export default function Header() {
  const { data: session } = useSession();
  return (
    <div className="flex justify-between py-10 ml-6 text-dark">
      <div className="flex items-center gap-2">
        <Image
          src={session?.user?.image || defaultAvatar}
          alt="avatar"
          className="w-10 h-10 border border-solid rounded-full ring ring-blue-300"
          width={40}
          height={40}
        />

        <h2>
          Hello,
          <br /> <b>{session?.user?.name}</b>{" "}
        </h2>
      </div>
    </div>
  );
}
