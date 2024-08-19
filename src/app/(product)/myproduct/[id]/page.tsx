"use client"

import { Form, Input, Select, SelectProps } from "antd";
import { FC } from "react";
import { MyProductForm } from "../_components/MyProductForm";

type SingleMyProductProps = {
    params: {
        id: string;
    };
};

const SingleMyProduct:FC<SingleMyProductProps> = ({params}) => {
    const [form] = Form.useForm();

    return (          
        <section className="bg-light-green flex justify-center items-center min-h-screen">
            <MyProductForm />
        </section>
    );
}

export default SingleMyProduct;