"use client"
import React, { PropsWithChildren } from 'react';
import { ConfigProvider, Layout, Menu, theme } from 'antd';
import { FooterSection } from '../FooterSetion/footer-section';

const { Header, Content } = Layout;

const items = [
    {key:'my-products', label:'My Products'},
    {key:'all-products', label:'All Products'},
    {key:'create-product', label:'Create Product'}
]

interface LayoutProps extends PropsWithChildren{
    onHeaderClick: (item:any) => void;
}


export const ApplicationLayout: React.FC<LayoutProps> = ({onHeaderClick,children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
        theme={
            {
                token:{
                    colorPrimary: '#647a67',
                } 
            }
        }
    >
        <Layout>
            <Header style={
                { 
                    display: 'flex',
                    alignItems: 'center',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000 
                }
            }>
                <div className="demo-logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['my-products']}
                items={items}
                style={{ flex: 1, minWidth: 0 }}
                onClick={onHeaderClick}
                />
            </Header>
            <Content>
                <div
                className='bg-deep-olive min-h-[92.5vh] flex justify-center items-center'
                >
                {children}
                </div>
            </Content>
            <FooterSection />
        </Layout>
    </ConfigProvider>
    
  );
};