import { Button, Input, Layout, Select, Row, Col } from "antd";
import React from "react";
import "../../App.less";
import logo from "../../assets/img/logo.png";
import { CategoryType } from "../../common/types";
import { SearchOutlined } from "@ant-design/icons";
import {
  faMapMarkerAlt,
  faMapMarkedAlt,
  faUtensils,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Header } = Layout;
const { Option } = Select;

interface NavBarProps {
  provinces: string[] | undefined;
  categories: CategoryType[] | undefined;
}

function renderCategoryIcon(index: number) {
  switch (index) {
    case 2:
      return faBriefcase;
    default:
      return faUtensils;
  }
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
            <Select size="large" defaultValue="nearme" style={{ width: "20%" }}>
              <Option value="nearme">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ marginRight: 10 }}
                />
                พื้นที่ใกล้ฉัน
              </Option>
              <Option value="all">
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  style={{ marginRight: 10 }}
                />
                สถานที่ทั้งหมด
              </Option>
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
              filterOption={(input, option) =>
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {categories?.map((item, index) => (
                <Option value={index}>
                  <FontAwesomeIcon
                    icon={renderCategoryIcon(index)}
                    style={{ marginRight: 10 }}
                  />
                  {item?.name}
                </Option>
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
