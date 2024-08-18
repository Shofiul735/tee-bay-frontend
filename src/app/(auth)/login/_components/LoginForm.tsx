"use client"

import { Form,Input,Checkbox, Button } from "antd"
import Link from "next/link";
import { useState } from "react";

const layout = 'vertical';

export const LoginForm = () => {
    const [form] = Form.useForm();
    const [loading,setLoading] = useState<boolean>(false);

    const onFinish = () => {

    }

    return(
       <div className="p-8 md:p-0 w-4/5">
            <Form
                form={form}
                layout={layout}
                onFinish={onFinish}
                >
                    <Form.Item label="Email"  name="email" rules={[{required:true,message:"Email is required"}]}>
                        <Input placeholder="Enter your email address" type="email"/>
                    </Form.Item>
                    <Form.Item label="Password"  name="password" rules={
                        [
                            {
                                required:true,
                                message:"Password is required"
                            },
                        ]
                        }>
                        <Input placeholder="Enter your password" type="password"/>
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        >
                        <Checkbox>
                            <span className="text-gray-400">Remember me</span>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
                                Login
                        </Button>
                    </Form.Item>
                </Form>
            <div>
                <span className='text-gray-400'>Don&apos;t have an account? </span><Link href="/signup" className='font-bold
                text-deep-olive underline'>Create</Link>
            </div>
       </div>
    );
}
