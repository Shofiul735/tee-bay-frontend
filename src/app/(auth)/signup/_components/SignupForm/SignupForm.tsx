import { Button, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";

const layout = 'vertical';

export const SignupForm = () => {
    const [form] = Form.useForm();
    const [loading,setLoading] = useState<boolean>(false);

    const validatePassword = (_:any, value:string) => {
        if (!value) {
          return Promise.reject('Confirm Password is required');
        }
        if (value !== form.getFieldValue('password')) {
          return Promise.reject('Passwords do not match');
        }
        return Promise.resolve();
      };


    const onFinish = () => {

    }

    return(
        <div>
               <Form
                    form={form}
                    onFinish={onFinish}
                    autoComplete="on"
                    layout={layout}
                >
                     <div className="flex flex-row gap-2 justify-between">
                        <Form.Item
                            label="First Name"
                            name="firstName"
                            rules={[{ required: true, message: 'First Name is required!' }]}
                            >
                            <Input placeholder="Enter your first name"/>
                        </Form.Item>
                        <Form.Item
                            label="Last Name"
                            name="lastName"
                            rules={[{ required: true, message: 'Last Name is required!' }]}
                            >
                            <Input placeholder="Enter your last name"/>
                        </Form.Item>
                    </div>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Address is required!' }]}
                        >
                        <Input placeholder="Enter your address" className="pl-10"/>
                    </Form.Item>

                    <div className="flex flex-row gap-2 justify-between">
                        <Form.Item
                            label="Email"
                            name="eamil"
                            rules={[{ required: true, message: 'Email is required!' }]}
                            >
                            <Input type="email" placeholder="Enter your email"/>
                         </Form.Item>
                         <Form.Item
                            label="Phone Number"
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Phone number is required!' }]}
                            >
                            <Input placeholder="Enter your phone number"/>
                         </Form.Item>
                    </div>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Password is required!' }]}
                        >
                        <Password placeholder="Enter your password" />
                    </Form.Item>
                    <Form.Item
                        label="Confirm Password"
                        name=""
                        rules={[
                            { required: true, message: `Confirm Password can't be empty` },
                            { validator: validatePassword }
                        ]}
                        >
                        <Password placeholder="Re-enter your password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
                                Sign up
                        </Button>
                    </Form.Item>

                </Form>   
        </div>
    )
}