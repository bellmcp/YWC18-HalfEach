import React, { useState } from "react";
import { Layout, Radio, Divider, Select } from "antd";
import { CategoryType } from "../../common/types";

const { Sider } = Layout;
const { Option } = Select;

interface SideBarProps {
  provinces: string[] | undefined;
  categories: CategoryType[] | undefined;
  priceRange: string[] | undefined;
}

export default function SideBar({
  provinces,
  categories,
  priceRange,
}: SideBarProps) {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const [activeCategory, setActiveCategory] = useState(1);
  const [activeSubCategory, setActiveSubCategory] = useState(0);

  return (
    <Sider className="site-layout-background" width={300}>
      <Divider orientation="left">
        <b>ประเภทร้านค้า</b>
      </Divider>
      <Radio.Group
        defaultValue={1}
        onChange={(e) => setActiveCategory(e.target.value)}
        value={activeCategory}
      >
        <Radio style={radioStyle} value={0}>
          ทั้งหมด
        </Radio>
        {categories?.map((item, index) => (
          <Radio style={radioStyle} value={index + 1}>
            {item?.name}
          </Radio>
        ))}
      </Radio.Group>
      <Divider orientation="left">
        <b>จังหวัด / ใกล้ฉัน</b>
      </Divider>
      <Select defaultValue="nearme" style={{ width: "100%" }}>
        <Option value="nearme">พื้นที่ใกล้ฉัน</Option>
        <Option value="all">สถานที่ทั้งหมด</Option>
        {provinces?.map((item, index) => (
          <Option value={index}>{item}</Option>
        ))}
      </Select>
      <Divider orientation="left">
        <b>ราคา</b>
      </Divider>
      <Select placeholder="กรุณาเลือก" style={{ width: "100%" }}>
        <Option value="all">ทั้งหมด</Option>
        {priceRange?.map((item, index) => (
          <Option value={index}>{item}</Option>
        ))}
      </Select>
      <Divider orientation="left">
        <b>ประเภทร้านอาหารและเครื่องดื่ม</b>
      </Divider>
      <Radio.Group
        onChange={(e) => setActiveSubCategory(e.target.value)}
        value={activeSubCategory}
      >
        <Radio style={radioStyle} value={1}>
          ทั้งหมด
        </Radio>
        {categories?.map((item, index) => (
          <Radio style={radioStyle} value={index + 1}>
            {item?.name}
          </Radio>
        ))}
      </Radio.Group>
    </Sider>
  );
}
