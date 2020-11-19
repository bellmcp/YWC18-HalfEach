import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.less";
import bg from "./assets/img/bg.png";
import { Breadcrumb, Layout, Typography, Row } from "antd";
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
  const [activeCategory, setActiveCategory] = useState(
    "ร้านอาหารและเครื่องดื่ม"
  );

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
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <NavBar provinces={provinces} categories={categories} />
        <Row
          justify="start"
          align="middle"
          style={{
            margin: 0,
            backgroundColor: "rgb(39, 57, 124)",
            padding: "0 50px",
            minHeight: "50px",
          }}
        >
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="/">
                <u>หน้าแรก</u>
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <b>ค้นหา</b>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>

        <Content style={{ padding: "30px 50px" }}>
          <Title level={3} style={{ marginBottom: 40 }}>
            ผลการค้นหา {activeCategory} ทั้งหมด
          </Title>
          <Layout style={{ background: "none" }}>
            <SideBar
              provinces={provinces}
              categories={categories}
              priceRange={priceRange}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <Content style={{ marginLeft: 30 }}>
              <ShopCard merchants={merchants} />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center", backgroundColor: "#fff" }}>
          Created by <a href="https://bellmcp.work">Wutipat Khamnuansin</a> for
          18th Young Webmaster Camp.
        </Footer>
      </Layout>
    </>
  );
}

export default App;
