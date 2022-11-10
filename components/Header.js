import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div className="bg-[#06202a] text-gray-300 h-full w-full pt-5">
      <header className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} to="/" />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} to="/about" />
          <HeaderItem
            title="VERIFIED"
            Icon={BadgeCheckIcon}
            to="/course/preview"
          />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} to="/brad" />
          <HeaderItem title="SEARCH" Icon={SearchIcon} to="/" />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} to="/" />
        </div>
        <Image
          src="https://links.papareact.com/ua6"
          className="object-contain"
          alt="hulu logo..."
          width={200}
          height={100}
        />
      </header>
    </div>
  );
};

export default Header;
