import { Layout, Select } from "antd";
import React from "react";
import "../../App.less";
import logo from "../../assets/logo.png";
import { CategoryType } from "../../common/types";

const { Header } = Layout;
const { Option } = Select;

function handleChange(value: string) {
  console.log(`selected ${value}`);
}

function onChange(value: string) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val: string) {
  console.log("search:", val);
}

interface NavBarProps {
  provinces: string[] | undefined;
  categories: CategoryType[] | undefined;
}

export default function NavBar({ provinces, categories }: NavBarProps) {
  return (
    <Header className="header">
      <div className="logo">
        <img src={logo} alt="คนละครึ่ง" height={40} width="auto" />
      </div>
      <Select
        size="large"
        defaultValue="nearme"
        style={{ width: 200 }}
        onChange={handleChange}
      >
        <Option value="nearme">พื้นที่ใกล้ฉัน</Option>
        <Option value="all">สถานที่ทั้งหมด</Option>
        {provinces?.map((item, index) => (
          <Option value={index}>{item}</Option>
        ))}
      </Select>
      <Select
        showSearch
        size="large"
        style={{ width: 800 }}
        placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {categories?.map((item, index) => (
          <Option value={index}>{item?.name}</Option>
        ))}
      </Select>
    </Header>
  );
}
