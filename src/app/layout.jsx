import Header from "@/Components/Header/Header";
import "./globals.css";
import Provider from "./Provider";
import Navbar from "@/Components/Navbar/Navbar";
import SearchBox from "@/Components/SearchBox";

export const metadata = {
  title: "IMDB Website",
  description: "Latst movies and updates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
