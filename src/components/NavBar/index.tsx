import React from "react";
import { Button, Input, Layout, Select, Row, Col } from "antd";
import { useMedia } from "react-media";
import { MEDIA_QUERIES } from "../../common/media";
import "../../App.less";
import logo from "../../assets/img/logo.png";
import logo_mini from "../../assets/img/logo_mini.png";
import { CategoryType } from "../../common/types";
import { SearchOutlined } from "@ant-design/icons";
import {
  faMapMarkerAlt,
  faMapMarkedAlt,
  faUtensils,
  faBriefcase,
  faFilter,
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
  const matches = useMedia({ queries: MEDIA_QUERIES });

  return (
    <Header
      className="header"
      style={{
        backgroundColor: "#fff",
        padding: !matches.large ? "0 15px" : "0 50px",
        flexShrink: 0,
      }}
    >
      <Row justify="space-between" align="middle" wrap={false}>
        <Col flex={!matches.large ? "80px" : "200px"}>
          <img
            src={!matches.large ? logo_mini : logo}
            alt="คนละครึ่ง"
            height={40}
            width="auto"
          />
        </Col>
        <Col flex="auto">
          <Input.Group compact>
            {!matches.large ? null : (
              <Select
                size="large"
                defaultValue="nearme"
                style={{ width: "20%" }}
              >
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
            )}
            <Select
              showSearch
              suffixIcon={<></>}
              size="large"
              style={{
                width: !matches.large ? "calc(100% - 90px)" : "75%",
              }}
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
              style={{ width: !matches.large ? "50px" : "5%" }}
              size="large"
              icon={<SearchOutlined />}
            />
            {!matches.large ? (
              <Button
                type="text"
                style={{
                  width: !matches.large ? "30px" : "5%",
                  marginLeft: "10px",
                }}
                size="large"
                icon={
                  <FontAwesomeIcon icon={faFilter} color="rgb(39, 57, 124)" />
                }
              />
            ) : null}
          </Input.Group>
        </Col>
      </Row>
    </Header>
  );
}
