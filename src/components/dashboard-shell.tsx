import { cn } from "@/lib/utils";
import React from "react";

interface DashBoardShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function DashBoardShell({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("gtid items-center gap-8")} {...props}>
      {children}
    </div>
  );
}
