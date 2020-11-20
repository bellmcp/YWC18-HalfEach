import React from "react";
import { Button, Row, Col, Typography, Space } from "antd";
import { useMedia } from "react-media";
import { MEDIA_QUERIES } from "../../common/media";
import CardItem from "../CardItem";
import { MerchantType } from "../../common/types";

interface ResultProps {
  merchants: MerchantType[] | undefined;
  activeCategory: string;
  activePriceRange: number;
}

const { Title, Text } = Typography;

export default function Result({
  merchants,
  activeCategory,
  activePriceRange,
}: ResultProps) {
  const matches = useMedia({ queries: MEDIA_QUERIES });
  const generalMerchants = merchants?.filter(
    (merchant) => merchant.categoryName !== "ร้านอาหาร"
  );

  function renderMerchantsList(activeCategory: string) {
    switch (activeCategory) {
      case "":
        return merchants;
      case "ร้านอาหารและเครื่องดื่ม":
        return renderPriceRangeMatchedRestaurant(activePriceRange);
      case "ร้านค้า OTOP":
        return [];
      case "ร้านธงฟ้า":
        return [];
      case "สินค้าทั่วไป":
        return generalMerchants;
      default:
        return [];
    }
  }

  function renderPriceRangeMatchedRestaurant(activePriceRange: number) {
    if (activePriceRange === 0) {
      return merchants?.filter(
        (merchant) => merchant.categoryName === "ร้านอาหาร"
      );
    } else {
      return merchants?.filter(
        (merchant) =>
          merchant.categoryName === "ร้านอาหาร" &&
          merchant.priceLevel === activePriceRange
      );
    }
  }

  return (
    <>
      {renderMerchantsList(activeCategory)?.map((item, index) => (
        <CardItem {...item} key={index} />
      ))}
      <div style={{ margin: "30px 0" }}>
        <Row justify="center" align="middle">
          {renderMerchantsList(activeCategory)?.length !== 0 ? (
            <Col style={{ width: !matches.large ? "100%" : "50%" }}>
              <Button size="large" block>
                ดูเพิ่มเติม
              </Button>
            </Col>
          ) : (
            <Space
              direction="vertical"
              size="small"
              style={{ textAlign: "center" }}
            >
              <Title level={2}>ไม่พบสถานที่ที่คุณกำลังหา</Title>
              <Text>ร้านค้าที่ท่านค้นหาอาจไม่ได้เข้าร่วมโครงการ คนละครึ่ง</Text>
            </Space>
          )}
        </Row>
      </div>
    </>
  );
}
