import "../app/global.css";
import { Raleway, Inter, Roboto_Serif } from "next/font/google";

const roboto_serif = Roboto_Serif({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_serif.className}>{children}</body>
    </html>
  );
}
