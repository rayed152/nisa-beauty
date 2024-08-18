import React from "react";
import { PageHeader } from "../_components/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductsTable from "./_components/ProductsTable";

export default function AdminProductPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <PageHeader>Products</PageHeader>
        <Button>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>
      <ProductsTable />
    </>
  );
}
