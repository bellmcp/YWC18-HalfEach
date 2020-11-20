import React from "react";
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
  activeSubCategory: string;
  setActiveSubCategory: (activeSubCategory: string) => void;
  activeProvince: number;
  setActiveProvince: (activeProvince: number) => void;
}

export default function Filter({
  provinces,
  categories,
  priceRange,
  activeCategory,
  setActiveCategory,
  activePriceRange,
  setActivePriceRange,
  activeSubCategory,
  setActiveSubCategory,
  activeProvince,
  setActiveProvince,
}: FilterProps) {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

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

  function handleProvinceSelect(value: number) {
    setActiveProvince(value);
  }

  const uniqueSubCategories = Array.from(
    new Set(renderActiveCategory(activeCategory))
  );

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <div>
        <Typography.Title level={5}>ประเภทร้านค้า</Typography.Title>
        <Radio.Group
          defaultValue={1}
          onChange={(e) => {
            setActiveCategory(e.target.value);
            setActiveSubCategory("ทั้งหมด");
          }}
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
        <Select
          defaultValue={activeProvince}
          onChange={handleProvinceSelect}
          style={{ width: "100%" }}
        >
          <Select.Option value={0}>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ marginRight: 10 }}
            />
            พื้นที่ใกล้ฉัน
          </Select.Option>
          <Select.Option value={1}>
            <FontAwesomeIcon
              icon={faMapMarkedAlt}
              style={{ marginRight: 10 }}
            />
            สถานที่ทั้งหมด
          </Select.Option>
          {provinces?.map((item, index) => (
            <Select.Option value={index + 2}>{item}</Select.Option>
          ))}
        </Select>
      </div>
      {activeCategory === "ร้านอาหารและเครื่องดื่ม" ||
      activeCategory === "สินค้าทั่วไป" ? (
        <div>
          <Typography.Title level={5}>ราคา</Typography.Title>
          <Select
            defaultValue={activePriceRange}
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
          <Space
            size="small"
            style={{ width: "100%", justifyContent: "space-between" }}
          >
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
            defaultValue={activeSubCategory}
          >
            <Radio style={radioStyle} value="ทั้งหมด">
              ทั้งหมด
            </Radio>
            {uniqueSubCategories?.map((item, index) => (
              <Radio style={radioStyle} value={item}>
                {item}
              </Radio>
            ))}
          </Radio.Group>
        </div>
      ) : null}
    </Space>
  );
}
