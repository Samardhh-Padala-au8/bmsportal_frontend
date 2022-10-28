import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { media } from 'styles/media';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import power from 'app/assets/power.svg';
import banner1 from 'app/assets/faq_illustration.svg';
import { Tab, Nav } from 'react-bootstrap';
import { themeColors } from 'styles/theme';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Space, Table, Tag } from 'antd';
export function Faqs() {
  const [activeKey, setActiveKey] = useState('0');
  const history = useHistory();
  const index = window.location.href.split('#')[1];

  useEffect(() => {
    if (index) setActiveKey(`${index}`);
  }, [index]);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  const tabs = [
    {
      icon: power,
      text: 'MOVIES',
      details: <div><Table columns={columns} dataSource={data} /></div>,
    },
  ];

  const renderTabForDesktop = (
    <Cards>
      <Nav
        onSelect={key => setActiveKey(key)}
        defaultActiveKey={'0'}
        variant="pills"
        className="flex-column"
        activeKey={activeKey}
      >
        {tabs.map((tab, index) => (
          <Nav.Item bsPrefix="nav-item-tabs">
            <Nav.Link eventKey={`${index}`}>
              <HorizontalDiv>
                <Image style={{ color: 'red' }} src={tab.icon} />
                <Leftdiv>{tab.text}</Leftdiv>
              </HorizontalDiv>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div
        style={{
          height: '0.1rem',
          background: themeColors.secondary,
          width: '100%',
          marginTop: '2.4rem',
          marginBottom: '1.6rem',
        }}
      ></div>
      <div style={{ padding: '1.6rem' }}>
        <LeftTitle>Copyright claim submission</LeftTitle>
        <div style={{ marginTop: '0.8rem' }}></div>
        <LeftText>
          To notify Wejammin of an infringement or other legal claim, please
          fill the form.
        </LeftText>
        <button
          className="faq_button homefirst_content_side"
          onClick={() => history.push('/copyright')}
        >
          Copyright claim{' '}
        </button>
      </div>
    </Cards>
  );

  return (
    <div style={{ background: '#fbecf0', width: '100%' }}>
      <div style={{ background: '#5B2A86' }}>
        <div className="larged">
          <BannerDiv className="larged">
            <BannerTitle>BMS ADMIN PORTAL</BannerTitle>
            <Image src={banner1} />
          </BannerDiv>
        </div>
      </div>
      <div>
        <SectionDiv>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="0"
            activeKey={activeKey}
          >
            <Row style={{ marginRight: 0 }}>
              <Col xs={12} sm={12} md={3} lg={3}>
                <div>{renderTabForDesktop}</div>
              </Col>

              <ResponsiveCol xs={12} sm={12} md={9} lg={9}>
                <RightDiv>
                  <Tab.Content>
                    {tabs.map((tab, index) => (
                      <Tab.Pane eventKey={`${index}`}>{tab.details}</Tab.Pane>
                    ))}
                  </Tab.Content>
                </RightDiv>
              </ResponsiveCol>
            </Row>
          </Tab.Container>
        </SectionDiv>
      </div>
    </div>
  );
}

const Title = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 0.02em;
  color: #1c262c;
  display: flex;
  align-item: center;
`;
const LeftTitle = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 3.2rem;
  display: flex;
  align-items: center;
  color: #1c262c;
`;
const BannerTitle = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 4rem;
  line-height: 6.4rem;
  color: #e7e7e7;
  margin-left: 5rem;
`;
const BannerTitleMobile = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 4rem;
  color: #e7e7e7;
`;
const Text = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  margin-top: 1rem !important;
  color: #6f848f;
  line-height: 2.4rem;
`;
const LeftText = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: #6f848f;
  margin-top: 1.6rem;
`;

const Leftdiv = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 3.2rem;
  margintop: 4.8rem;
  color: #6f848f;
  ${media.mobile`margin-left: 0rem;`};
  ${media.small`margin-left: 0rem;`};
  ${media.medium`margin-left: 1.6rem;`};
`;

const Cards = styled(Card)`
  background: #ffffff;

  border: 1px solid #e7e7e7;
  border-radius: 0.8rem;

  ${media.mobile`padding: 1.6rem 2.4rem 0rem 2.4rem`};
  ${media.small`padding: 4rem 1.6rem;`};
  ${media.medium`padding: 4rem 1.6rem;`};
`;
const RightDiv = styled.span`
  background: #ffffff;

  border-radius: 8px;

  box-shadow: 2px 8px 0px #d64568;
  display: block;
  width: 100%;
  padding: 4rem;
  border: 2px solid #0d0d0d;
  overflow-y: scroll;
  ${media.mobile`height: auto`};
  ${media.small`height: 72rem;`};
`;

const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SectionDiv: any = styled.div`
  ${media.mobile`padding: 0rem 0rem;`};
  ${media.small`padding: 4rem 2.4rem 7.2rem 2.4rem  ;`};
  ${media.medium`padding: 15rem 15rem 15rem 15rem`};
`;

const TabBg = styled.div`
  background: white;
  ${media.mobile`padding: 1.6rem 2.4rem 0rem 2.4rem`};
`;

const ResponsiveCol: any = styled(Col)`
  ${media.mobile`padding: 2.4rem; margin-left: 0rem`};
  ${media.small`padding: 2.4rem; margin-left: 0rem`};
  ${media.medium`padding: 0rem; `};
`;

const BannerDiv = styled(HorizontalDiv)`
  justify-content: space-between;
  padding: 0 5rem;

  width: 100%;
`;
