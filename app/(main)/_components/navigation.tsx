"use client";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";
import { useMutation, useQuery } from "convex/react";
import {
  ChevronsLeft,
  MenuIcon,
  PlusCircle,
  Search,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useMediaQuery } from "usehooks-ts";
import { Item } from "./item";
import { UserItem } from "./useritem";

export const Navigation = () => {
  const pathName = usePathname();
  const isMobile = useMediaQuery("(max-width: 764px)");
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const documents = useQuery(api.documents.get);
  const create = useMutation(api.documents.create);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [isMobile, pathName]);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let userWidth = event.clientX;
    if (userWidth < 240) userWidth = 240;
    if (userWidth > 480) userWidth = 480;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${userWidth}px`;
      navbarRef.current.style.setProperty("left", `${userWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${userWidth}px)`
      );
    }
  };
  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      sidebarRef.current.style.opacity = "100";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      sidebarRef.current.style.opacity = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  };
  const createHandle = () => {
    const promise = create({ title: "untitled" });
    toast.promise(promise, {
      loading: "Creating a new note ...",
      success: "New note created",
      error: "Failed to create a new note",
    });
  };
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "h-full w-60 flex flex-col relative z-[99999] bg-secondary group/sidebar",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0 opacity-0"
        )}
      >
        {/* //left ChevronsLeft icon on sidebar element  */}
        <div
          onClick={collapse}
          role="button"
          className={cn(
            "w-6 h-6 text-muted-foreground absolute top-3 right-3 group-hover/sidebar:opacity-100 hover:bg-neutral-300 dark:hover:bg-neutral-600 rounded-sm opacity-0 transition",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="w-6 h-6" />
        </div>

        <div className="div">
          <UserItem />
          <Item label="Search" Icon={Search} isSearch onClick={() => {}} />
          <Item label="Settings" Icon={Settings} onClick={() => {}} />
          <Item onClick={createHandle} label="new note" Icon={PlusCircle} />
        </div>
        <div className="ml-4">
          {documents?.map((document) => (
            <p key={document._id}>{document.title}</p>
          ))}
        </div>

        {/* resize bar of right  */}
        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="opacity-0 group-hover/sidebar:opacity-100 absolute h-full w-1 top-0 right-0 bg-primary/10 cursor-ew-resize transition   "
        />
      </aside>
      <div
        ref={navbarRef}
        role="button"
        className={cn(
          " absolute top-0 left-60 w-[calc(100% - 240px)] z-[99999]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="bg-transparent w-full px-3 py-2">
          {isCollapsed && (
            <MenuIcon
              onClick={resetWidth}
              role="button"
              className="w-6 h-6 text-muted-foreground"
            />
          )}
        </nav>
      </div>
    </>
  );
};
