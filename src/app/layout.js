import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <SignedIn>
        <html lang="en">
          <body className="bg-gray-l">
            <div className="flex">
              <Sidebar />
              <div className="">{children}</div>
            </div>
          </body>
        </html>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </ClerkProvider>
  );
}
