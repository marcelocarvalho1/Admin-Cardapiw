import { dashboardData, sysAdminData, products } from "../data/mockData";

export function fetchDashboardData() {
  return new Promise<typeof dashboardData>((resolve) => {
    setTimeout(() => resolve(dashboardData), 500);
  });
}

export function fetchSysAdminData() {
  return new Promise<typeof sysAdminData>((resolve) => {
    setTimeout(() => resolve(sysAdminData), 500);
  });
}

export function fetchProducts() {
  return new Promise<typeof products>((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}
