import React from "react";
import { Drawer } from "antd";
import Filter from "../Filter";
import { CategoryType } from "../../common/types";

interface SideDrawerProps {
  onClose: () => void;
  visible: boolean;
  provinces: string[] | undefined;
  categories: CategoryType[] | undefined;
  priceRange: string[] | undefined;
  activeCategory: string;
  setActiveCategory: (activeCategory: string) => void;
}

export default function SideDrawer({
  onClose,
  visible,
  provinces,
  categories,
  priceRange,
  activeCategory,
  setActiveCategory,
}: SideDrawerProps) {
  return (
    <Drawer
      title={
        <div
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
          }}
        >
          กรอกผล
        </div>
      }
      placement="right"
      width="100%"
      closable={true}
      onClose={onClose}
      visible={visible}
    >
      <Filter
        provinces={provinces}
        categories={categories}
        priceRange={priceRange}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </Drawer>
  );
}
