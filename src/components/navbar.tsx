import { useRef, useState } from "react";
import { navLinks } from "../lib/constants";
import { RiMenu3Fill } from "react-icons/ri";
import PrimaryButton from "./ui/primary-button";
import MaxWidthWrapper from "./max-width-wrapper";
import { useOnClickOutside } from "../hooks/use-on-click-outside";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  useOnClickOutside(menuRef, () => setToggleMenu(false));

  return (
    <nav className="fixed top-0 left-0 z-[4] w-full flex items-center justify-center shadow-md bg-white">
      <MaxWidthWrapper>
        {/* Desktop */}
        <div className="w-full h-16 hidden md:flex md:px-5 xl:px-0 items-center justify-between">
          <span className="lg:w-[228px] text-left text-2xl font-semibold tracking-wide">
            Niled.
          </span>
          <div className="flex items-center justify-center font-medium">
            {navLinks.map((link) => (
              <span
                key={link.id}
                className="px-5 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                {link.name}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <button className="w-24 py-2 rounded-full bg-transparent hover:bg-gray-100 transition-colors duration-200">
              Login
            </button>
            <PrimaryButton text="Sign up" />
          </div>
        </div>
        {/* Mobile */}
        <div className="w-full h-16 px-5 flex md:hidden items-center justify-between">
          <span className="flex-1 text-left text-2xl font-semibold tracking-wide">
            Niled.
          </span>
          <div className="relative size-10 hover:bg-gray-100 border transition-colors duration-200 rounded-lg p-2">
            <button
              type="button"
              onClick={() => setToggleMenu(true)}
              className="size-full"
            >
              <RiMenu3Fill className="size-full" />
            </button>
            {toggleMenu && (
              <div
                ref={menuRef}
                className="w-44 shadow-lg rounded-lg bg-white absolute top-12 right-0 border divide-y flex flex-col items-start justify-start"
              >
                {navLinks.map((link) => (
                  <span
                    key={link.id}
                    className="w-full px-5 py-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    {link.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
