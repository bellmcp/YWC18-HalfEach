import React from "react";
import { Card, Row, Col, Typography, Divider } from "antd";
import shop from "../../assets/shop.png";

const { Title, Text } = Typography;

export default function ShopCard() {
  return (
    <Card style={{ width: "100%", borderRadius: 4 }}>
      <Row>
        <Col flex="250px" style={{ padding: 5 }}>
          <img
            src={shop}
            alt="shop "
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
            <Title level={4}>ฟังกี้กริลล์ สามย่าน</Title>
            <Text type="secondary">อาหารจีน</Text>
            <Divider />
            <Text type="secondary">
              เริ่มธุรกิจจากสิ่งที่รัก รักในงานที่ทำ
              มีความสุขในทุกวันที่ได้อยู่กับมัน
            </Text>
            <Divider />
            <Text>เมนูแนะนำ:</Text>
            <Text type="secondary"> ไก่ทอด</Text>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
