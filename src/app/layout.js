import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["greek"] });

export const metadata = {
  title: "Recordatorio de Turnos",
  description: "recordadorio de turnos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
