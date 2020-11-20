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
  const generalMerchants = merchants?.slice(0, 2);
  const restaurantMerchants = merchants?.slice(2);

  function renderMerchantsList(activeCategory: string) {
    switch (activeCategory) {
      case "":
        return merchants;
      case "ร้านอาหารและเครื่องดื่ม":
        return renderPriceRangeMatchedList(activePriceRange);
      case "ร้านค้า OTOP":
        return undefined;
      case "ร้านธงฟ้า":
        return undefined;
      case "สินค้าทั่วไป":
        return generalMerchants;
      default:
        return undefined;
    }
  }

  function renderPriceRangeMatchedList(activePriceRange: number) {
    switch (activePriceRange) {
      case 0:
        return restaurantMerchants;
      case 1:
        return undefined;
      case 2:
        return undefined;
      case 3:
        return restaurantMerchants?.slice(1);
      case 4:
        return restaurantMerchants?.slice(0, 1);
      default:
        return restaurantMerchants;
    }
  }

  return (
    <>
      {renderMerchantsList(activeCategory)?.map((item, index) => (
        <CardItem {...item} key={index} />
      ))}
      <div style={{ margin: "30px 0" }}>
        <Row justify="center" align="middle">
          {renderMerchantsList(activeCategory) !== undefined ? (
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
