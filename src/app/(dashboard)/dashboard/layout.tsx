import DashBoradNav from "@/components/dashboard-nav";
import MainNab from "@/components/MainNab";
import SiteFooter from "@/components/SiteFooter";
import { dashbordConfig } from "config/dashboard";

const Marketinglayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex items-center justify-between ">
          {/* ここで定義している型が誤っているので後で修正が必要 */}
          {/* <MainNab items={dashbordConfig.navitems} /> */}
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden md:flex w-[200px] ">
          <DashBoradNav items={dashbordConfig.sidebarNav} />
        </aside>
        <main className="flex flex-col w-full flex-1 overflow-hidden">
          {children}
        </main>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Marketinglayout;
