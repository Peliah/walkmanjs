import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { userId } = await auth();

    if (!userId) {
        redirect("/");
    }

    return (
        <SidebarProvider className="font-sans">
            <DashboardSidebar />
            <SidebarInset className="bg-[#FBFBFB] font-sans">{children}</SidebarInset>
        </SidebarProvider>
    );
}
