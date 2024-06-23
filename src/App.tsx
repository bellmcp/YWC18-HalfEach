import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.less'
import bg from './assets/img/bg.png'
import { useMedia } from 'react-media'
import { MEDIA_QUERIES } from './common/media'
import { Breadcrumb, Layout, Typography, Row } from 'antd'
import NavBar from './components/NavBar'
import ShopCard from './components/Result'
import SideBar from './components/SideBar'
import SideDrawer from './components/SideDrawer'

import mockResponse from './mock/response.json'

const { Title } = Typography
const { Content, Footer } = Layout

function App() {
  const matches = useMedia({ queries: MEDIA_QUERIES })
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  const [categories, setCategories] = useState()
  const [provinces, setProvinces] = useState()
  const [priceRange, setPriceRange] = useState()
  const [merchants, setMerchants] = useState()
  const [activeCategory, setActiveCategory] = useState(
    'ร้านอาหารและเครื่องดื่ม'
  )
  const [activePriceRange, setActivePriceRange] = useState(0)
  const [activeSubCategory, setActiveSubCategory] = useState('ทั้งหมด')
  const [activeProvince, setActiveProvince] = useState(0)

  useEffect(() => {
    axios
      .get('https://panjs.com/ywc18.json')
      .then(({ data }) => {
        setCategories(data.categories)
        setProvinces(data.provinces)
        setPriceRange(data.priceRange)
        setMerchants(data.merchants)
      })
      .catch((err) => {
        console.log(err)
        // Update: API is currently out of service, Implicitly set data from mock response
        setCategories(mockResponse.categories as any)
        setProvinces(mockResponse.provinces as any)
        setPriceRange(mockResponse.priceRange as any)
        setMerchants(mockResponse.merchants as any)
      })
  }, [])

  return (
    <>
      <Layout
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <NavBar
          provinces={provinces}
          categories={categories}
          showDrawer={showDrawer}
        />
        <Row
          justify='start'
          align='middle'
          style={{
            margin: 0,
            backgroundColor: 'rgb(39, 57, 124)',
            padding: !matches.large ? '0 15px' : '0 50px',
            minHeight: '50px',
          }}
        >
          <SideDrawer
            onClose={onClose}
            visible={visible}
            provinces={provinces}
            categories={categories}
            priceRange={priceRange}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activePriceRange={activePriceRange}
            setActivePriceRange={setActivePriceRange}
            activeSubCategory={activeSubCategory}
            setActiveSubCategory={setActiveSubCategory}
            activeProvince={activeProvince}
            setActiveProvince={setActiveProvince}
          />
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href='/YWC18-HalfEach/'>
                <u>หน้าแรก</u>
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <b>ค้นหา</b>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>

        <Content
          style={{
            padding: !matches.large ? '30px 15px' : '30px 50px',
          }}
        >
          <Title level={3} style={{ marginBottom: 40 }}>
            ผลการค้นหา {activeCategory} ทั้งหมด
          </Title>
          <Layout style={{ background: 'none' }}>
            {!matches.large ? null : (
              <SideBar
                provinces={provinces}
                categories={categories}
                priceRange={priceRange}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                activePriceRange={activePriceRange}
                setActivePriceRange={setActivePriceRange}
                activeSubCategory={activeSubCategory}
                setActiveSubCategory={setActiveSubCategory}
                activeProvince={activeProvince}
                setActiveProvince={setActiveProvince}
              />
            )}
            <Content style={{ marginLeft: !matches.large ? 0 : 30 }}>
              <ShopCard
                merchants={merchants}
                activeCategory={activeCategory}
                activePriceRange={activePriceRange}
                activeSubCategory={activeSubCategory}
                activeProvince={activeProvince}
              />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: '#fff' }}>
          Created by <a href='https://bellmcp.work'>Wutipat Khamnuansin</a>{' '}
          {matches.small || matches.xs ? <br /> : null}for 18th Young Webmaster
          Camp.
        </Footer>
      </Layout>
    </>
  )
}

export default App
