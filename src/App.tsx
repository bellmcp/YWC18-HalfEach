import React from "react";
import logo from "./assets/logo.png";
import bg from "./assets/bg.png";
import "./App.less";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Select } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
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
        height: "100vh",
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
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="subnav 3"
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Wutipat Khamnuansin ©2020 Created for YWC18.
      </Footer>
    </Layout>
  );
}

export default App;
