"use client";
import { Button } from "@/components/ui/button";
import styles from "./not-fount.module.css";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        <span className={styles.statusCode}>404</span>
      </h1>
      <h3 className="text-2xl font-semibold">Page Not Found</h3>
      <p>The page you are looking for does not exist.</p>
      <Button
        className="mt-4 px-10 py-6 text-xl font-bold"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Homepage
      </Button>
    </div>
  );
};

export default NotFound;
