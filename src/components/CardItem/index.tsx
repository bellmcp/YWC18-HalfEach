import React from "react";
import { Card, Row, Col, Typography, Divider } from "antd";
import { MerchantType } from "../../common/types";

const { Title, Text } = Typography;

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
  return (
    <Card style={{ width: "100%", borderRadius: 4 }}>
      <Row>
        <Col flex="250px" style={{ padding: 5 }}>
          <img
            src={coverImageId}
            alt="shop"
            style={{
              objectFit: "cover",
              width: "250px",
              height: "250px",
              borderRadius: 4,
            }}
          />
        </Col>
        <Col flex="auto" style={{ padding: "1rem" }}>
          <div style={{ width: "100%", display: "block" }}>
            <Title level={4}>{shopNameTH}</Title>
            {isOpen === "Y" ? <Title level={4}>เปิดอยู่</Title> : null}
            <Text type="secondary">{subcategoryName}</Text>
            <br />
            <Text type="secondary">Price: {priceLevel}</Text>
            <br />
            <Text type="secondary">
              Location: {addressDistrictName} {addressProvinceName}
            </Text>
            <Divider />
            <Text type="secondary">
              <div
                dangerouslySetInnerHTML={{
                  __html: highlightText,
                }}
              ></div>
            </Text>
            <Divider />
            <Text>เมนูแนะนำ:</Text>
            <Text type="secondary">
              {recommendedItems.map((item) => (
                <>{item} </>
              ))}
            </Text>

            <Divider />
            <Text>Facility:</Text>
            <Text type="secondary">
              {facilities.map((item) => (
                <>{item} </>
              ))}
            </Text>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
