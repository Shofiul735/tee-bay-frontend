import { Product } from "@/types/product.type";
import { Card } from "antd";
import { CardHeader } from "./CardHeader";
import { FC } from "react";

interface ProductCardProps{
    item: Product;
}

export const ProductCard:FC<ProductCardProps> = ({item }) => {
    return (
        <Card  
            title={<CardHeader title={item.title} id={item.id} />}  
            bordered
            style={{ width: '100%',margin:'10px 0' }}
            key={item.key}
            >
                <p className="text-light-olive">Categories: {item.categories.join(', ')}</p>
                <p className="text-light-olive mb-3">Price: {item.price}, Rent: {item.rent} per day</p>
                <p className="text-deep-olive mb-3 line-clamp-3">
                    {item.description}
                </p>
                <p className="text-light-olive">
                    Date posted: {item.postedDate}
                </p>
        </Card>
    )
}