import { Navbar } from "@/components/navbar";
import { FooterSection } from "@/components/footer";



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <main id="main-content">
                {children}
            </main>
            <FooterSection />
        </>
    );
}


