export type siteConfig = {
  name: string;
  description: string;
  url: string;
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
