import ModeToggle from "@/components/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/layouts/sidebar/app-sidebar";
import { Outlet } from "react-router";

export default function DefaultLayout() {
  return (
    <>
      <div className="relative flex min-h-svh flex-col bg-background">
        {/* Layout */}
        {/* Sidebar */}

        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            {/* <header className="flex h-16 sticky shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"> */}
            {/* <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"> */}
            <header className="bg-background sticky inset-x-0 top-0 isolate z-10 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              {/* <header className="bg-background sticky inset-x-0 top-0 isolate z-10 flex shrink-0 items-center gap-2 border-b"> */}
              {/* <div className="flex flex-row"> */}
              <div className="flex h-14 w-full items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1.5" />
                <Separator
                  orientation="vertical"
                  // className="mr-2 h-4"
                  className="mr-2 data-[orientation=vertical]:h-4"
                />

                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">
                        Building Your Application
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className="mr-auto flex items-center gap-2 px-4">
                <ModeToggle iconOnly showLabel />
              </div>
              {/* </div> */}
            </header>
            {/* routes components */}
            <Outlet />
          </SidebarInset>
        </SidebarProvider>
      </div>
    </>
  );
}
