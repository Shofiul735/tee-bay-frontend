"use client"

import React, { useEffect, useState } from 'react';
import { Steps, Button, Form, Input, Select } from 'antd';
import { useGetAllCategories } from '@/hooks/graphql/useGetAllCategories';
import { gql, useMutation } from '@apollo/client';

const { Step } = Steps;
const { Option } = Select;

const ADD_PRODUCT = gql`
  mutation AddProduct($product: ProductInput!) {
    addProduct(product: $product) {
      productTitle
      textureDescription
      price
      rentPrice
      rentUnit
    }
  }
`;


const StepForm = () => {
  const { data, error, loading } = useGetAllCategories();
  const [current, setCurrent] = useState(0);
  const [dropdownData,setDropdownData] = useState([]);
  const [form] = Form.useForm();
  const [addProduct, { data :categoryData, loading:categoryLoading, error:categoryError }] = useMutation(ADD_PRODUCT);

  useEffect(()=>{
    if(data){
      setDropdownData(data.getAllCategory);
    }
  },[data]);


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'Product Title',
      content: (
        <Form.Item
          name="productTitle"
          label="Product Title"
          rules={[{ required: true, message: 'Please input the product title!' }]}
        >
          <Input placeholder="Enter product title" />
        </Form.Item>
      ),
    },
    {
      title: 'Multi-Choice Dropdown',
      content: (
        <Form.Item
          name="categoryIds"
          label="Category"
          rules={[{ required: true, message: 'Please select at least one option!' }]}
        >
          <Select mode="multiple" placeholder="Select Select Category">
            {
              dropdownData.map(i=>{
                //@ts-ignore
                return <Option value={i.id}>{i.name}</Option>;
              })
            }
            
          </Select>
        </Form.Item>
      ),
    },
    {
      title: 'Description of Texture',
      content: (
        <Form.Item
          name="textureDescription"
          label="Texture Description"
          rules={[{ required: true, message: 'Please describe the texture!' }]}
        >
          <Input.TextArea rows={4} placeholder="Describe the texture" />
        </Form.Item>
      ),
    },
    {
      title: 'Pricing',
      content: (
        <>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price!' }]}
          >
            <Input type="number" placeholder="Enter price" />
          </Form.Item>
          <Form.Item
            name="rentPrice"
            label="Rent Price"
            rules={[{ required: true, message: 'Please input the rent price!' }]}
          >
            <Input type="number" placeholder="Enter rent price" />
          </Form.Item>
          <Form.Item
            name="rentUnit"
            label="Rent Unit"
            rules={[{ required: true, message: 'Please select the rent unit!' }]}
          >
            <Select placeholder="Select rent unit">
              <Option value="day">Per Day</Option>
              <Option value="week">Per Week</Option>
              <Option value="month">Per Month</Option>
            </Select>
          </Form.Item>
        </>
      ),
    },
    {
      title: 'Review',
      content: (
        <div>
          <h3>Review your inputs</h3>
          <Form.Item label="Product Title">
            <span>{form.getFieldValue('productTitle')}</span>
          </Form.Item>
          <Form.Item label="Options">
            <span>{(form.getFieldValue('options') || []).join(', ')}</span>
          </Form.Item>
          <Form.Item label="Texture Description">
            <span>{form.getFieldValue('textureDescription')}</span>
          </Form.Item>
          <Form.Item label="Price">
            <span>{form.getFieldValue('price')}</span>
          </Form.Item>
          <Form.Item label="Rent Price">
            <span>{form.getFieldValue('rentPrice')}</span>
          </Form.Item>
          <Form.Item label="Rent Unit">
            <span>{form.getFieldValue('rentUnit')}</span>
          </Form.Item>
        </div>
      ),
    },
  ];

  const onFinish = (values:any) => {
    console.log('Form values:', form.getFieldsValue([
      'productTitle',
      'categoryIds',
      'textureDescription',
      'price',
      'rentPrice',
      'rentUnit'
    ]));

    addProduct({
      variables: {
        product: {
          productTitle: "ABC",
          rentPrice: 13,
          rentUnit: "Day",
          textureDescription: "hdhbvdhbvhd",
          price: 120,
          categoriIds: [1, 2, 3]
        }
      }
    }).then(()=>{

    }).catch(()=>{
      
    });
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {steps[current].content}
      </div>
      <div className="steps-action" style={{ marginTop: 16 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
        {current > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={prev}>
            Previous
          </Button>
        )}
      </div>
    </Form>
  );
};

export default StepForm;
