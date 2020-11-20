import React from "react";
import { useMedia } from "react-media";
import { MEDIA_QUERIES } from "../../common/media";
import { Card, Row, Col, Typography, Divider, Space, Tag, Tooltip } from "antd";
import { MerchantType } from "../../common/types";
import {
  faCarSide,
  faDog,
  faEdit,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const { Title, Text } = Typography;

function renderPriceLevel(priceLevel: number) {
  switch (priceLevel) {
    case 1:
      return (
        <>
          <Text>฿</Text>
          <Text type="secondary">฿฿฿</Text>
        </>
      );
    case 2:
      return (
        <>
          <Text>฿฿</Text>
          <Text type="secondary">฿฿</Text>
        </>
      );
    case 3:
      return (
        <>
          <Text>฿฿฿</Text>
          <Text type="secondary">฿</Text>
        </>
      );
    case 4:
      return (
        <>
          <Text>฿฿฿฿</Text>
        </>
      );
    default:
      return null;
  }
}

function renderFacilities(facilities: string) {
  switch (facilities) {
    case "ที่จอดรถ":
      return faCarSide;
    case "สามารถนำสัตว์เลี้ยงเข้าได้":
      return faDog;
    case "รับจองล่วงหน้า":
      return faEdit;
    default:
      return faDog;
  }
}

export default function CardItem({
  shopNameTH,
  categoryName,
  subcategoryName,
  coverImageId,
  facilities,
  priceLevel,
  isOpen,
  highlightText,
  recommendedItems,
  addressProvinceName,
  addressDistrictName,
}: MerchantType) {
  const matches = useMedia({ queries: MEDIA_QUERIES });

  return (
    <Card
      style={{
        width: "100%",
        border: "1px solid #CEE0E8",
        borderRadius: 4,
        marginBottom: 10,
      }}
    >
      <Row style={{ width: "100%" }} wrap={!matches.large ? true : false}>
        <Col
          flex={!matches.large ? "auto" : "250px"}
          style={{ padding: !matches.large ? 0 : 5 }}
        >
          <img
            src={coverImageId}
            alt="shop"
            style={{
              objectFit: "cover",
              width: !matches.large ? "100%" : "250px",
              height: "250px",
              borderRadius: !matches.large ? "4px 4px 0 0" : "4px",
            }}
          />
        </Col>
        <Col flex="auto" style={{ padding: "1rem" }}>
          <Space direction="vertical" size="small">
            <Space size="middle">
              <Title level={4} style={{ margin: 0 }}>
                {shopNameTH}
              </Title>
              {isOpen === "Y" ? (
                <Tag color="rgb(27, 195, 0)">เปิดอยู่</Tag>
              ) : null}
            </Space>
            <Space
              size="small"
              split={<Divider type="vertical" />}
              style={{ display: "flex" }}
            >
              <Text type="secondary" style={{ flexWrap: "wrap" }}>
                {subcategoryName}
              </Text>
              <Text type="secondary" style={{ flexWrap: "wrap" }}>
                <div style={{ letterSpacing: "2px" }}>
                  {renderPriceLevel(priceLevel)}
                </div>
              </Text>
              <Text type="secondary" style={{ flexWrap: "wrap" }}>
                {addressDistrictName} {addressProvinceName}
              </Text>
            </Space>
            <Divider style={{ margin: "15px 0" }} />
            <Space direction="vertical" size="small">
              <Text type="secondary">
                <div
                  dangerouslySetInnerHTML={{
                    __html: highlightText,
                  }}
                ></div>
              </Text>
              <Space size="small">
                <Text strong>เมนูแนะนำ:</Text>
                <Text type="secondary">
                  {recommendedItems.map((item) => (
                    <>{item} </>
                  ))}
                </Text>
              </Space>
              <Divider style={{ margin: "10px 0", border: "none" }} />
              <Space size="small">
                {facilities.map((item) => (
                  <Tooltip title={item}>
                    <div
                      style={{
                        border: "1px solid rgb(27, 195, 0)",
                        borderRadius: "50%",
                        width: "35px",
                        height: "35px",
                        position: "relative",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={renderFacilities(item)}
                        color="rgb(27, 195, 0)"
                        size="lg"
                        style={{ position: "absolute", top: 6, right: 5 }}
                      />
                    </div>
                  </Tooltip>
                ))}
              </Space>
            </Space>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}
