import { MobileNav } from "./components/nav/mobile/mobileNav";
import "./styles/globals.css";
import StyledComponentsRegistry from "@/lib/registry";

//Meta Information for Web Application

export const metadata = {
    title: "NGC foundation",
    description: "NGC foundation web application",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* Icon to be display on browser tab */}
            <link
                rel="icon"
                href="/icon?<generated>"
                type="image/<generated>"
                sizes="<generated>"
            />
            <body>
                <StyledComponentsRegistry>
                    {/* To make sure the Nav remains on screen during routing */}
                    <nav>
                        <MobileNav />
                    </nav>
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
