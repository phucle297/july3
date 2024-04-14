"use client";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <main className={""}>
      <Button
        onClick={() => {
          toast.success("Hello World");
        }}
      >
        Test
      </Button>
    </main>
  );
}
