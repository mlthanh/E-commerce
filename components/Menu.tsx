import Image from "next/image";
import logo from "../assets/logo-3.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBoxOpen,
  faList12,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function Menu() {
  const inactiveLink = " flex items-center gap-2 p-4";
  const activeLink =
    inactiveLink + " bg-white text-dark rounded-l-2xl shadow-lg";
  const router = useRouter();
  const { pathname } = router;

  return (
    <aside className="p-4 pr-0 mt-[24px] font-bold text-primary">
      <Link
        href="/"
        className="flex items-center justify-center gap-1 px-4 rounded-full text-light bg-dark"
      >
        <Image src={logo} alt="Logo" className="w-12 h-12 " />
        <motion.span
          className="text-sm uppercase text-light"
          whileHover={{
            color: [
              "#fff",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#fff",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          MLTstore
        </motion.span>
      </Link>

      <nav className="flex flex-col gap-5 mt-[100px]">
        <Link
          href={"/"}
          className={pathname === "/" ? activeLink : inactiveLink}
        >
          <FontAwesomeIcon icon={faHouseChimney} />
          Dashboard
        </Link>

        <Link
          href={"/products"}
          className={pathname.includes("/products") ? activeLink : inactiveLink}
        >
          <FontAwesomeIcon icon={faBoxOpen} />
          Products
        </Link>
        <Link
          href={"/orders"}
          className={pathname.includes("/orders") ? activeLink : inactiveLink}
        >
          <FontAwesomeIcon icon={faList12} />
          Orders
        </Link>
        <Link
          href={"/settings"}
          className={pathname.includes("/settings") ? activeLink : inactiveLink}
        >
          <FontAwesomeIcon icon={faGear} />
          Settings
        </Link>
      </nav>
    </aside>
  );
}

export default Menu;
