import React, { useState } from "react";
import { Radio, Select, Typography, Space, InputNumber, Button } from "antd";
import { CategoryType } from "../../common/types";
import {
  faMapMarkerAlt,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FilterProps {
  provinces: string[] | undefined;
  categories: CategoryType[] | undefined;
  priceRange: string[] | undefined;
  activeCategory: string;
  setActiveCategory: (activeCategory: string) => void;
  activePriceRange: number;
  setActivePriceRange: (activePriceRange: number) => void;
}

export default function Filter({
  provinces,
  categories,
  priceRange,
  activeCategory,
  setActiveCategory,
  activePriceRange,
  setActivePriceRange,
}: FilterProps) {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const [activeSubCategory, setActiveSubCategory] = useState(0);

  function renderActiveCategory(activeCategory: string) {
    switch (activeCategory) {
      case "":
        return [""];
      case "ร้านอาหารและเครื่องดื่ม":
        return categories?.slice(0, 1)[0].subcategories;
      case "ร้านค้า OTOP":
        return categories?.slice(1, 2)[0].subcategories;
      case "ร้านธงฟ้า":
        return categories?.slice(2, 3)[0].subcategories;
      case "สินค้าทั่วไป":
        return categories?.slice(3, 4)[0].subcategories;
      default:
        return [""];
    }
  }

  function handlePriceRangeSelect(value: number) {
    setActivePriceRange(value);
  }

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <div>
        <Typography.Title level={5}>ประเภทร้านค้า</Typography.Title>
        <Radio.Group
          defaultValue={1}
          onChange={(e) => setActiveCategory(e.target.value)}
          value={activeCategory}
        >
          <Radio style={radioStyle} value={""}>
            ทั้งหมด
          </Radio>
          {categories?.map((item, index) => (
            <Radio style={radioStyle} value={item?.name}>
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
      {activeCategory === "ร้านอาหารและเครื่องดื่ม" ? (
        <div>
          <Typography.Title level={5}>ราคา</Typography.Title>
          <Select
            placeholder="กรุณาเลือก"
            onChange={handlePriceRangeSelect}
            style={{ width: "100%" }}
          >
            <Select.Option value={0}>ทั้งหมด</Select.Option>
            {priceRange?.map((item, index) => (
              <Select.Option value={index + 1}>{item}</Select.Option>
            ))}
          </Select>
        </div>
      ) : (
        <div>
          <Typography.Title level={5}>ช่วงราคาสินค้า (บาท)</Typography.Title>

          <Space size="small">
            <InputNumber
              style={{ width: "100%", textAlign: "center" }}
              placeholder="ราคาต่ำสุด"
              min={0}
            />
            <Typography.Text type="secondary">-</Typography.Text>
            <InputNumber
              className="site-input-right"
              style={{
                width: "100%",
                textAlign: "center",
              }}
              placeholder="ราคาสูงสุด"
              min={0}
            />
          </Space>
          <Button block style={{ marginTop: 6 }}>
            ตกลง
          </Button>
        </div>
      )}
      {activeCategory !== "" ? (
        <div>
          <Typography.Title level={5}>ประเภท{activeCategory}</Typography.Title>
          <Radio.Group
            onChange={(e) => setActiveSubCategory(e.target.value)}
            value={activeSubCategory}
          >
            <Radio style={radioStyle} value={0}>
              ทั้งหมด
            </Radio>
            {renderActiveCategory(activeCategory)?.map((item, index) => (
              <Radio style={radioStyle} value={index + 1}>
                {item}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      ) : null}
    </Space>
  );
}
