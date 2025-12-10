import { DocsSidebar } from "@/components/docs/docs-sidebar"
import { Footer } from "@/components/footer"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider defaultOpen={true}>
            <div className="flex min-h-screen w-full bg-[#FBFBFB] font-sans">
                <DocsSidebar />
                <SidebarInset className="flex flex-col font-sans">
                    {/* Mobile header with trigger */}
                    <header className="sticky top-16 z-30 flex h-14 items-center gap-4 border-b border-[#1E3E62]/10 bg-white/80 backdrop-blur-sm px-6 md:hidden">
                        <SidebarTrigger className="-ml-2 text-[#0B192C]" />
                        <span className="font-semibold text-[#0B192C]">Documentation</span>
                    </header>

                    <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-8 lg:py-12">
                        {children}
                    </main>
                    <Footer />
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}
