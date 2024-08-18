import { Product } from "@/types/product.type";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
import { FC } from "react";

interface CardHeaderProps{
    title: string;
    id: string;
}

export const CardHeader:FC<CardHeaderProps> = ({title,id}) => {
    return (
        <div className="text-deep-olive" style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
            <h3 style={{ margin: 0 }}>{title}</h3>
            <div>
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    okText="Yes"
                    cancelText="No"
                    onCancel={() => console.log('Cancel')}
                    onConfirm={(event) => console.log(id)}
                >
                    <Button danger><DeleteOutlined color="red"/></Button>
                </Popconfirm>
            </div>
        </div>
    );
}