import "./globals.css";
import Header from "@/widgets/Header/Header";
import Footer from "@/widgets/Footer/Footer";

export const metadata = {
  title: "Liberia Duty Free",
  description: "A travel retail operator rooted in precision",
    icons: {
        icon: "/logo2.jpeg",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
