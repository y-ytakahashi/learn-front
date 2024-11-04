import MainNab from "@/components/MainNab";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { marketingConfig } from "../../../config/marketing";

const Marketinglayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="container z-40 bg-background">
        <div className="h-20 py-6 flex items-center">
          <nav>
            <MainNab items={marketingConfig} />
            <Link
              href={"/login"}
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
              )}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Marketinglayout;
