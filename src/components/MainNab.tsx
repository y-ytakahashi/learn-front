"use client";
import Link from "next/link";
import { MarketingCongig } from "../../types";
import MobileNav from "./MobileNav";
import { useState } from "react";

interface Props {
  items: MarketingCongig;
  children?: React.ReactNode;
}

export default function MainNab({ items }: Props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex py-4 gap-4">
      <Link href={"/"} className="hidden md:flex items-center space-x-2">
        <span className="font-bold hidden sm:inline-block">Post Writer</span>
      </Link>
      <nav className="md:flex gap-6 hidden">
        {items?.navitems.map((item, index) => (
          <Link key={index} href={item.href}>
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  );
}
