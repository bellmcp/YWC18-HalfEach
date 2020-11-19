import React, { useState } from "react";
import { Layout, Radio, Select, Typography, Space } from "antd";
import { CategoryType } from "../../common/types";
import {
  faMapMarkerAlt,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <Layout.Sider className="site-layout-background" width={300}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Typography.Title level={5}>ประเภทร้านค้า</Typography.Title>
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
        </div>
        <div>
          <Typography.Title level={5}>จังหวัด / ใกล้ฉัน</Typography.Title>
          <Select defaultValue="nearme" style={{ width: "100%" }}>
            <Select.Option value="nearme">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ marginRight: 10 }}
              />
              พื้นที่ใกล้ฉัน
            </Select.Option>
            <Select.Option value="all">
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                style={{ marginRight: 10 }}
              />
              สถานที่ทั้งหมด
            </Select.Option>
            {provinces?.map((item, index) => (
              <Select.Option value={index}>{item}</Select.Option>
            ))}
          </Select>
        </div>
        <div>
          <Typography.Title level={5}>ราคา</Typography.Title>
          <Select placeholder="กรุณาเลือก" style={{ width: "100%" }}>
            <Select.Option value="all">ทั้งหมด</Select.Option>
            {priceRange?.map((item, index) => (
              <Select.Option value={index}>{item}</Select.Option>
            ))}
          </Select>
        </div>
        <div>
          <Typography.Title level={5}>
            ประเภทร้านอาหารและเครื่องดื่ม
          </Typography.Title>
          <Radio.Group
            onChange={(e) => setActiveSubCategory(e.target.value)}
            value={activeSubCategory}
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
        </div>
      </Space>
    </Layout.Sider>
  );
}
