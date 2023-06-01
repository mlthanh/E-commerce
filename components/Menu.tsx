import Image from "next/image";
import logo from "../assets/logo-3.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBox,
  faBoxesStacked,
  faTruckRampBox,
  faParachuteBox,
  faPeopleCarryBox,
  faBoxOpen,
  faBagShopping,
  faShoppingBag,
  faList12,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <aside className="p-4 font-bold text-light">
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="Logo" className="w-10 h-10"></Image>
        <span>MLTstore Admin</span>
      </Link>

      <nav className="flex flex-col gap-20 mt-[100px] ml-4">
        <Link href="/" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faHouseChimney} className="text-light" />
          Dashboard
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBoxOpen} className="text-light" />
          Products
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faList12} className="text-light" />
          Orders
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faGear} className="text-light" />
          Settings
        </Link>
      </nav>
    </aside>
  );
}

export default Menu;
