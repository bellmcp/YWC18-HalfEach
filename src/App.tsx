import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.less";
import bg from "./assets/bg.png";
import { Breadcrumb, Layout, Typography } from "antd";
import NavBar from "./components/NavBar";
import ShopCard from "./components/Result";
import SideBar from "./components/SideBar";

const { Title } = Typography;
const { Content, Footer } = Layout;

function App() {
  const [categories, setCategories] = useState();
  const [provinces, setProvinces] = useState();
  const [priceRange, setPriceRange] = useState();
  const [merchants, setMerchants] = useState();

  useEffect(() => {
    axios
      .get("https://panjs.com/ywc18.json")
      .then(({ data }) => {
        setCategories(data.categories);
        setProvinces(data.provinces);
        setPriceRange(data.priceRange);
        setMerchants(data.merchants);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Layout
        style={{
          height: "2000px",
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <NavBar provinces={provinces} categories={categories} />
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
            style={{ padding: "24px" }}
          >
            <SideBar
              provinces={provinces}
              categories={categories}
              priceRange={priceRange}
            />
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <ShopCard merchants={merchants} />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Created by Wutipat Khamnuansin for 18th Young Webmaster Camp.
        </Footer>
      </Layout>
    </>
  );
}

export default App;
