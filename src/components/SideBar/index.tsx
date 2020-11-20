import React from "react";
import { Layout } from "antd";
import { CategoryType } from "../../common/types";
import Filter from "../Filter";

interface SideBarProps {
  provinces: string[] | undefined;
  categories: CategoryType[] | undefined;
  priceRange: string[] | undefined;
  activeCategory: string;
  setActiveCategory: (activeCategory: string) => void;
  activePriceRange: number;
  setActivePriceRange: (activePriceRange: number) => void;
}

export default function SideBar({
  provinces,
  categories,
  priceRange,
  activeCategory,
  setActiveCategory,
  activePriceRange,
  setActivePriceRange,
}: SideBarProps) {
  return (
    <Layout.Sider
      className="site-layout-background"
      width={320}
      style={{
        backgroundColor: "#fff",
        padding: "1rem",
        border: "1px solid #A2ADBD",
        borderRadius: 4,
        height: "fit-content",
      }}
    >
      <Filter
        provinces={provinces}
        categories={categories}
        priceRange={priceRange}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activePriceRange={activePriceRange}
        setActivePriceRange={setActivePriceRange}
      />
    </Layout.Sider>
  );
}
