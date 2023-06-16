import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link
        className="px-2 py-1 bg-gray-300 rounded-md text-dark"
        href={"/products/new"}
      >
        Add new product
      </Link>
    </Layout>
  );
}
