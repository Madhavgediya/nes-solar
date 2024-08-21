import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";
import { useRouter } from "next/router";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const hideHeaderFooter = router.pathname === "/InquiryForm";
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {" "}
      <div className="fixed bottom-4 right-5 z-[99] flex items-center">
        {isVisible && (
          <>
            <div
              onClick={scrollToTop}
              aria-label="scroll to top"
              className="flex h-12 w-12 z-[999] cursor-pointer items-center justify-center rounded-full bg-[#203f69] text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp max-sm:hidden"
            >
              <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
            </div>
          </>
        )}
        {!hideHeaderFooter && (
          <div className={`${styles.quickLinkMob}`}>
            <article>
              {" "}
              <Link href="/InquiryForm" className={`${styles.dealerLocator}`}>
                Get a Quote
              </Link>
            </article>
          </div>
        )}
      </div>
    </>
  );
}
