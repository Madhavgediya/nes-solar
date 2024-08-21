// src/components/ProtectedRoute.tsx
import React from "react";
import { useRouter } from "next/router";
import { auth } from "@/config/firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const WithAuth = (WrappedComponent: React.FC) => {
  const AuthHOC: React.FC = (props) => {
    const [loading, setLoading] = React.useState(true);
    const router = useRouter();

    React.useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push("/login");
        } else {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return <div>Loading...</div>; // Show loading state while checking authentication
    }

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default WithAuth;
