import {
  getMostPopularProducts,
  getNewestProducts,
} from "../../_actions/productFetch";
import ProductGridSection from "./ProductGridSection";

export default function PopularAndNewProducts() {
  return (
    <div className="space-y-6">
      <div>
        <ProductGridSection
          productFetcher={getMostPopularProducts}
          title="Most Popular"
        />
      </div>
      <div>
        <ProductGridSection productFetcher={getNewestProducts} title="Newest" />
      </div>
    </div>
  );
}
