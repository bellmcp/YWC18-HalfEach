import React from "react";
import logo from "./assets/logo.png";
import bg from "./assets/bg.png";
import "./App.less";
import { Layout, Breadcrumb, Typography, Select } from "antd";

import SideBar from "./components/SideBar";
import ShopCard from "./components/ShopCard";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;
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

function App() {
  return (
    <Layout
      style={{
        height: "2000px",
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
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
          <Option value="all">พื้นที่ทั้งหมด</Option>
          <Option value="krabi">กระบี่</Option>
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
          <Option value="fooddrink">ร้านอาหารและเครื่องดื่ม</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>หน้าแรก</Breadcrumb.Item>
          <Breadcrumb.Item>ค้นหา</Breadcrumb.Item>
        </Breadcrumb>
        <Title level={3}>ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด</Title>
        <Layout className="site-layout-background" style={{ padding: "24px" }}>
          <SideBar />
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <ShopCard />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Created by Wutipat Khamnuansin for 18th Young Webmaster Camp.
      </Footer>
    </Layout>
  );
}

export default App;
