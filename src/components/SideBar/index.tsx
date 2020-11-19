import React, { useState } from "react";
import { Layout, Typography, Radio } from "antd";
import { Divider, Select } from "antd";

const { Title } = Typography;
const { Sider } = Layout;
const { Option } = Select;

export default function SideBar() {
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const [value, setValue] = useState(0);

  return (
    <Sider className="site-layout-background" width={300}>
      <Divider orientation="left">
        <b>ประเภทร้านค้า</b>
      </Divider>
      <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
        <Radio style={radioStyle} value={1}>
          ทั้งหมด
        </Radio>
        <Radio style={radioStyle} value={2}>
          ร้านอาหารและเครื่องดื่ม
        </Radio>
        <Radio style={radioStyle} value={3}>
          ร้านค้า OTOP
        </Radio>
        <Radio style={radioStyle} value={4}>
          ร้านธงฟ้า
        </Radio>
        <Radio style={radioStyle} value={5}>
          สินค้าทั่วไป
        </Radio>
      </Radio.Group>
      <Divider orientation="left">
        <b>จังหวัด / ใกล้ฉัน</b>
      </Divider>
      <Select defaultValue="all" style={{ width: "100%" }}>
        <Option value="all">สถานที่ทั้งหมด</Option>
        <Option value="krabi">กระบี่</Option>
      </Select>
      <Divider orientation="left">
        <b>ราคา</b>
      </Divider>
      <Select placeholder="กรุณาเลือก" style={{ width: "100%" }}>
        <Option value="all">ทั้งหมด</Option>
        <Option value="100">ไม่เกิน 100 บาท</Option>
      </Select>
      <Divider orientation="left">
        <b>ประเภทร้านอาหารและเครื่องดื่ม</b>
      </Divider>
      <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
        <Radio style={radioStyle} value={1}>
          ทั้งหมด
        </Radio>
        <Radio style={radioStyle} value={2}>
          ร้านอาหารและเครื่องดื่ม
        </Radio>
        <Radio style={radioStyle} value={3}>
          ร้านค้า OTOP
        </Radio>
        <Radio style={radioStyle} value={4}>
          ร้านธงฟ้า
        </Radio>
        <Radio style={radioStyle} value={5}>
          สินค้าทั่วไป
        </Radio>
      </Radio.Group>
    </Sider>
  );
}
