"use client";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import { default as Logo } from "@/assets/images/july.png";
import { default as LogoWhite } from "@/assets/images/julywhite.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { NavBarLinks } from "../configs/nav-bar";
import { PATH } from "../configs/path";
import { useCheckDarkMode } from "../hooks/useCheckDarkMode";
import { ENavBar, NavBarEnum } from "@/constant/nav-bar";
import { cn } from "@/lib/utils";
import ThemeColors from "./theme-colors";
import ThemeToggle from "./theme-toggle";
import { TLink, nestedLinkSchema } from "@/types/links";
import Link from "next/link";
import Image from "next/image";
import { useViewportSize } from "@mantine/hooks";

const Navbar = () => {
  const { width } = useViewportSize();
  const [openMenu, setOpenMenu] = useState(false);
  const [tabActive, setTabActive] = useState<ENavBar>(NavBarEnum.enum.home);
  const isDarkMode = useCheckDarkMode();
  const pathname = usePathname();
  const router = useRouter();
  const [imgSrc, setImgSrc] = useState(Logo);
  useEffect(() => {
    setTabActive(
      pathname
        .split("/")[1]
        .split("?")[0]
        .replaceAll("-", "_")
        .toLowerCase() as ENavBar
    );
  }, [pathname]);
  useEffect(() => {
    setImgSrc(isDarkMode ? LogoWhite : Logo);
  }, [isDarkMode]);

  return (
    <div className="container mx-auto flex h-full flex-1 items-center justify-between gap-x-2 px-4">
      <Link
        className="flex h-1/2 cursor-pointer items-center space-x-4"
        href={PATH.HOME}
      >
        <h1 className={clsx("h-full text-2xl font-semibold")}>
          <Image alt="logo" className="h-full w-full" src={imgSrc} priority />
        </h1>
      </Link>
      {width > 768 && (
        <div className="group flex items-center gap-6">
          {NavBarLinks.map((link: TLink) => {
            // check if link has children
            const { success } = nestedLinkSchema.safeParse(link);
            if (success) {
              const linkNested = nestedLinkSchema.parse(link);
              return (
                <DropdownMenu key={nanoid()}>
                  <DropdownMenuTrigger>
                    <span
                      className={cn(
                        "text-lg font-semibold transition-all duration-300 hover:text-[hsl(var(--primary))]",
                        {
                          ["text-[hsl(var(--primary))]"]:
                            tabActive ===
                            link.link.slice(1).replaceAll("-", "_"),
                        }
                      )}
                    >
                      {link.title}
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {linkNested.children.map((child) => {
                      return (
                        <DropdownMenuItem
                          key={nanoid()}
                          onClick={() => {
                            setOpenMenu(false);
                            router.push(child.link);
                          }}
                        >
                          <p className="w-full cursor-pointer text-lg font-semibold transition-all duration-300 hover:text-[hsl(var(--primary))]">
                            {child.title}
                          </p>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link
                key={nanoid()}
                className="flex items-center gap-2"
                href={link.link}
              >
                <span
                  className={cn(
                    "text-lg font-semibold transition-all duration-300 hover:text-[hsl(var(--primary))]",
                    {
                      ["text-[hsl(var(--primary))]"]:
                        tabActive === link.link.slice(1).replaceAll("-", "_"),
                    }
                  )}
                >
                  {link.title}
                </span>
              </Link>
            );
          })}
        </div>
      )}

      <div className="group flex items-center gap-2">
        <ThemeColors />
        <ThemeToggle />

        {width <= 768 && (
          <DropdownMenu open={openMenu} onOpenChange={setOpenMenu}>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <X
                  className={clsx(
                    "h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all duration-300",
                    openMenu && "rotate-90 scale-100"
                  )}
                />
                <Menu
                  className={clsx(
                    "absolute h-[1.2rem] w-[1.2rem] transition-all duration-300",
                    openMenu && "rotate-90 scale-0"
                  )}
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-screen">
              {NavBarLinks.map((link: TLink) => {
                const { success } = nestedLinkSchema.safeParse(link);
                if (success) {
                  const linkNested = nestedLinkSchema.parse(link);
                  return (
                    <DropdownMenuItem
                      key={nanoid()}
                      onClick={() => {
                        setOpenMenu(false);
                      }}
                    >
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <span className="text-lg font-semibold transition-all duration-300 hover:text-[hsl(var(--primary))]">
                            {link.title}
                          </span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-screen">
                          {linkNested.children.map((child) => (
                            <DropdownMenuItem
                              key={nanoid()}
                              onClick={() => {
                                setOpenMenu(false);
                                router.push(child.link);
                              }}
                            >
                              <p className="w-full cursor-pointer text-lg font-semibold transition-all duration-300 hover:text-[hsl(var(--primary))]">
                                {child.title}
                              </p>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </DropdownMenuItem>
                  );
                }
                return (
                  <DropdownMenuItem
                    key={nanoid()}
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                  >
                    <Link className="flex items-center gap-2" href={link.link}>
                      <span
                        className={cn(
                          "text-lg font-semibold transition-all duration-300 hover:text-[hsl(var(--primary))]",
                          {
                            ["text-[hsl(var(--primary))]"]:
                              tabActive ===
                              link.link.slice(1).replaceAll("-", "_"),
                          }
                        )}
                      >
                        {link.title}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default Navbar;
