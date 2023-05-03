import Header from "@/Components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./Provider";
import Navbar from "@/Components/Navbar/Navbar";
import SearchBox from "@/Components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Website",
  description: "Latst movies and updates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Provider>
      </body>
    </html>
  );
}
