import { DashboradConfig } from "types";

export const dashbordConfig: DashboradConfig = {
  navitems: [
    {
      title: "ドキュメント",
      href: "/docs",
    },
    {
      title: "サポート",
      href: "/support",
    },
  ],
  sidebarNav: [
    {
      title: "記事投稿",
      hfref: "/dashbord",
      icon: "post",
    },
    {
      title: "お支払い",
      hfref: "/dashbord/billing",
      icon: "billing",
    },
    {
      title: "設定",
      hfref: "/dashbord/settings",
      icon: "setting",
    },
  ],
};
