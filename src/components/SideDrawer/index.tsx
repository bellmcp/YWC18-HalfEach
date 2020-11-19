import React from "react";
import { Drawer } from "antd";

interface SideDrawerProps {
  onClose: () => void;
  visible: boolean;
}

export default function SideDrawer({ onClose, visible }: SideDrawerProps) {
  return (
    <Drawer
      title="กรอกผล"
      placement="right"
      width="100%"
      closable={true}
      onClose={onClose}
      visible={visible}
    >
      <p>Filter</p>
    </Drawer>
  );
}
