import { useState } from "react";
import { Toaster } from "sonner";
import { LandingPage } from "./components/LandingPage";
import { DonationPage } from "./components/DonationPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { AdminDashboard } from "./components/AdminDashboard";
import { AdminLogin } from "./components/AdminLogin";
import { Navigation } from "./components/Navigation";
import { RequestPage } from "./components/RequestPage";
import { Analytics } from "@vercel/analytics/react";


type Page = "home" | "donate" | "request" | "about" | "contact" | "admin";


export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    // Check if URL contains /admin
    if (window.location.pathname === "/admin") {
      return "admin";
    }
    return "home";
  });
  
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Listen for URL changes
  useState(() => {
    const handlePopState = () => {
      if (window.location.pathname === "/admin") {
        setCurrentPage("admin");
      } else {
        setCurrentPage("home");
        setIsAdminAuthenticated(false); // Reset admin auth when leaving admin
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  });

  // Update URL when page changes
  const handleNavigate = (page: Page) => {
    if (page === "admin") {
      window.history.pushState({}, "", "/admin");
    } else {
      window.history.pushState({}, "", "/");
      setIsAdminAuthenticated(false); // Reset admin auth when leaving admin
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
        case "home":
        return <LandingPage onNavigate={handleNavigate} />;
        case "donate":
        return <DonationPage />;
        case "about":
        return <AboutPage />;
        case "contact":
        return <ContactPage />;
        case "request":
        return <RequestPage />;
        case "admin":
        if (!isAdminAuthenticated) {
            return <AdminLogin onAuthenticated={() => setIsAdminAuthenticated(true)} />;
        }
        return <AdminDashboard />;
        default:
        return <LandingPage onNavigate={handleNavigate} />;
    }   
  };

  // Don't show navigation for admin pages
  const showNavigation = currentPage !== "admin";

  return (
    <div className="min-h-screen bg-white">
      {showNavigation && (
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      <main>
        {renderPage()}
      </main>
      <Toaster position="top-right" />
      <Analytics />
    </div>
  );
}
