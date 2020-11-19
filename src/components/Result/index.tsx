import React from "react";
import { Button, Row, Col } from "antd";
import { useMedia } from "react-media";
import { MEDIA_QUERIES } from "../../common/media";
import CardItem from "../CardItem";
import { MerchantType } from "../../common/types";

interface ResultProps {
  merchants: MerchantType[] | undefined;
}

export default function Result({ merchants }: ResultProps) {
  const matches = useMedia({ queries: MEDIA_QUERIES });

  return (
    <>
      {merchants?.map((item, index) => (
        <CardItem {...item} key={index} />
      ))}
      <div style={{ margin: "30px 0" }}>
        <Row justify="center" align="middle">
          <Col style={{ width: !matches.large ? "100%" : "50%" }}>
            <Button size="large" block>
              ดูเพิ่มเติม
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
