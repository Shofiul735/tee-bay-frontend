import { Button, Form, Input } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";
import useNotificationHook from "@/hooks/notification/useNotification";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";

const layout = 'vertical';

const CREATE_USER = gql`
    mutation CreateUser($userdto: CreateUserDto!) {
        createUser(user: $userdto) {
            firstName
            lastName
        }
    }
`;

export const SignupForm = () => {
    const [form] = Form.useForm();
    const [formLoading,setLoading] = useState<boolean>(false);
    const { triggerNotification, contextHolder } = useNotificationHook()
    const [createUserMutation, { error, data, loading }]= useMutation(CREATE_USER);
    const route = useRouter();

    const validatePassword = (_:any, value:string) => {
        if (!value) {
          return Promise.reject('Confirm Password is required');
        }
        if (value !== form.getFieldValue('password')) {
          return Promise.reject('Passwords do not match');
        }
        return Promise.resolve();
      };


      const onFinish = async (formData: any) => {
        delete formData['confirm-pass'];
    
        const payload = {variables: {
            userdto: formData
        }};

        try {
            const response = await createUserMutation(payload);
            triggerNotification('success','Success', 'User created successfully');
            route.push('/login');
        } catch (err) {
            const error = err as ApolloError;
            const message = error.graphQLErrors?.[0]?.message || error.message || 'Failed to create user';
            triggerNotification('error','Error' ,message);
        }
    };
    

    return(
        <div>
            {contextHolder}
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
                            name="email"
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
                        name="confirm-pass"
                        rules={[
                            { required: true, message: `Confirm Password can't be empty` },
                            { validator: validatePassword }
                        ]}
                        >
                        <Password placeholder="Re-enter your password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={formLoading} disabled={formLoading}>
                                Sign up
                        </Button>
                    </Form.Item>

                </Form>   
        </div>
    )
}