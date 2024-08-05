import { Wrapper } from "./Wrapper";
import "./globals.css";
import Header from "./header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body style={{overflow: "hidden"}}>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
