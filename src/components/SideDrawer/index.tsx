import React from "react";
import { Drawer } from "antd";
import Filter from "../Filter";
import { CategoryType } from "../../common/types";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            color: "#fff",
          }}
        >
          กรอกผล
        </div>
      }
      closeIcon={
        <FontAwesomeIcon
          icon={faTimes}
          color="#fff"
          size="lg"
          style={{ position: "absolute", top: 16, left: 0 }}
        />
      }
      placement="right"
      width="100%"
      closable={true}
      onClose={onClose}
      visible={visible}
      headerStyle={{
        backgroundColor: "rgb(42,67,101)",
        fill: "#fff",
      }}
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
