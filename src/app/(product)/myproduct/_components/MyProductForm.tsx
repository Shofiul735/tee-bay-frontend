import { Button, Form, Input, InputNumber, Select, SelectProps } from "antd"
import { useEffect, useState } from "react";

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}


const {TextArea} = Input;

export const MyProductForm = () =>{
    const [loading,setLoading] = useState<boolean>(false);
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
          id: '123',
        });
      }, [form]);

    const onFinishHandler = (data:any) =>{
        console.log(data);
    }

    return(
        <Form
                form={form}
                layout="vertical"
                className="w-1/2"
                onFinish={onFinishHandler}
            >
                <Form.Item name='id'>
                    <Input type="hidden"/>
                </Form.Item>
                <Form.Item
                    label='Title'
                    name='title'
                    rules={[{required:true, message:'Title is required'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Categories'
                    name='categories'
                    rules={[{required:true, message:'Categories is required'}]}
                >
                    <Select
                        mode="multiple"
                        size='middle'
                        placeholder="Please select"
                        defaultValue={['a10', 'c12']}
                        style={{ width: '100%' }}
                        options={options}
                        />
                </Form.Item>
                <Form.Item
                     label='Description'
                     name='description'
                     rules={[{
                        required: true,
                        message:  'Description is required'
                     }]}
                     >
                    <TextArea size="large"/>
                </Form.Item>
                <div className="flex justify-between">
                    <Form.Item
                        label='Price'
                        name='price'
                        rules={[{
                            required: true,
                            message:  'Price is required'
                        }]}
                        >
                        <InputNumber min={1}/>
                    </Form.Item>
                    <Form.Item
                        label='Rent'
                        name='rent'
                        rules={[{
                            required: true,
                            message:  'Rent is required'
                        }]}
                        >
                        <InputNumber min={1}/>
                    </Form.Item>
                </div>
                <Form.Item className="text-center">
                    <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>Submit</Button>
                </Form.Item>
            </Form>
    )
}