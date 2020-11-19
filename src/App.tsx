import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.less";
import { useMedia } from "react-media";
import { MEDIA_QUERIES } from "./common/media";
import bg from "./assets/img/bg.png";
import { Breadcrumb, Layout, Typography, Row, Button } from "antd";
import NavBar from "./components/NavBar";
import ShopCard from "./components/Result";
import SideBar from "./components/SideBar";
import SideDrawer from "./components/SideDrawer";

const { Title } = Typography;
const { Content, Footer } = Layout;

function App() {
  const matches = useMedia({ queries: MEDIA_QUERIES });

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

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
            padding: !matches.large ? "0 15px" : "0 50px",
            minHeight: "50px",
          }}
        >
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
          <SideDrawer onClose={onClose} visible={visible} />
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

        <Content
          style={{
            padding: !matches.large ? "30px 15px" : "30px 50px",
          }}
        >
          <Title level={3} style={{ marginBottom: 40 }}>
            ผลการค้นหา {activeCategory} ทั้งหมด
          </Title>
          <Layout style={{ background: "none" }}>
            {!matches.large ? null : (
              <SideBar
                provinces={provinces}
                categories={categories}
                priceRange={priceRange}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            )}
            <Content style={{ marginLeft: !matches.large ? 0 : 30 }}>
              <ShopCard merchants={merchants} />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center", backgroundColor: "#fff" }}>
          Created by <a href="https://bellmcp.work">Wutipat Khamnuansin</a>{" "}
          {matches.small || matches.xs ? <br /> : null}for 18th Young Webmaster
          Camp.
        </Footer>
      </Layout>
    </>
  );
}

export default App;
