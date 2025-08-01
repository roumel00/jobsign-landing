import Navbar from "./navbar";
import Footer from "./footer";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
} 