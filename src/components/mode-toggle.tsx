import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import React from "react";

export default function ModeToggle({
  showLabel = false,
  iconOnly = false,
}: {
  showLabel?: boolean;
  iconOnly?: boolean;
}) {
  const { setMode, mode } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setMode(mode === "dark" ? "light" : "dark");
  }, [mode, setMode]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {iconOnly ? (
            <Button
              variant="ghost"
              className={cn(
                "group/toggle h-8 w-8 px-0",
                showLabel && "px-5 w-16"
              )}
              onClick={toggleTheme}
            >
              <SunIcon className="hidden [html.dark_&]:block" />
              <MoonIcon className="hidden [html.light_&]:block" />
              <span className="sr-only">Toggle theme</span>
              {showLabel && <label htmlFor="theme">{mode}</label>}
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setMode("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setMode("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setMode("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <label>Theme Mode</label>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
