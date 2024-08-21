"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import Preloader from "../PreLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const hideHeaderFooter =
    router.pathname === "/InquiryForm" ||
    router.pathname === "/login" ||
    router.pathname === "/InquiryDataListing";

  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
      <ScrollToTop />
    </>
  );
}
