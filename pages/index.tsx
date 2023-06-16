import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-between text-dark"></div>
    </Layout>
  );
}
