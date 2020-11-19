import { Button, Input, Layout, Select, Row, Col } from "antd";
import React from "react";
import "../../App.less";
import logo from "../../assets/logo.png";
import { CategoryType } from "../../common/types";
import { SearchOutlined } from "@ant-design/icons";

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
    <Header className="header" style={{ backgroundColor: "#fff" }}>
      <Row justify="space-between" align="middle">
        <Col flex="200px">
          <img src={logo} alt="คนละครึ่ง" height={40} width="auto" />
        </Col>
        <Col flex="auto">
          <Input.Group compact>
            <Select
              size="large"
              defaultValue="nearme"
              onChange={handleChange}
              style={{ width: "20%" }}
            >
              <Option value="nearme">พื้นที่ใกล้ฉัน</Option>
              <Option value="all">สถานที่ทั้งหมด</Option>
              {provinces?.map((item, index) => (
                <Option value={index}>{item}</Option>
              ))}
            </Select>
            <Select
              showSearch
              suffixIcon={<></>}
              size="large"
              style={{ width: "75%" }}
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
            <Button
              style={{ width: "5%" }}
              size="large"
              icon={<SearchOutlined />}
            />
          </Input.Group>
        </Col>
      </Row>
    </Header>
  );
}
