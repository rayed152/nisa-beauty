import { formatCurrency, formatNumber } from "@/lib/formatters";
import { getSalesData } from "../actions/getSalesData";
import { DashboardCard } from "./_components/DashboardCard";
import { getUserData } from "../actions/getUserData";
import getProductData from "../actions/getProductData";

const AdminDashboard = async () => {
  const [salesData, userData, productData] = await Promise.all([
    getSalesData(),
    getUserData(),
    getProductData(),
  ]);

  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
        body={formatCurrency(salesData.amount)}
      />
      <DashboardCard
        title="Customers"
        subtitle={`${formatCurrency(
          userData.avarageValuePerUser
        )} Avarage Value`}
        body={formatNumber(userData.userCount)}
      />
      <DashboardCard
        title="Customers"
        subtitle={`${formatCurrency(productData.inactiveCount)} Inactive`}
        body={formatNumber(productData.activeCount)}
      />
    </div>
  );
};

export default AdminDashboard;
