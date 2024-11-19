import Icons from "@/components/icon";

export type SiteConfig = {
  name: string;
  description: string;
  url: tring;
  ogImage: string;
  links: {
    x: string;
    github: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  disable?: boolean;
};

export type MarketingCongig = {
  navitems: NavItem[];
};

export type SidebarNavItem = {
  title: string;
  disable?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavItem[];
    }
);

export type DashboradConfig = {
  navitems: NavItem[];
  sidebarNav: SideBarNavItem[];
};
