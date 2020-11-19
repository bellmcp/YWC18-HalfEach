import React from "react";
import { Button, Row, Col } from "antd";
import CardItem from "../CardItem";
import { MerchantType } from "../../common/types";

interface ResultProps {
  merchants: MerchantType[] | undefined;
}

export default function Result({ merchants }: ResultProps) {
  return (
    <>
      {merchants?.map((item, index) => (
        <CardItem {...item} key={index} />
      ))}
      <div style={{ margin: "30px 0" }}>
        <Row justify="center" align="middle">
          <Col style={{ width: "40%" }}>
            <Button size="large" block>
              ดูเพิ่มเติม
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
