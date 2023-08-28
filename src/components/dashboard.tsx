import React from "react";
import { DashboardTitle } from "./header";
import { Boxes } from "./Boxes";
import { DataTable } from "./table";

export const Dashboard = () => {
  return (
    <main>
      <DashboardTitle />
      <Boxes />
      <DataTable />
    </main>
  );
};
