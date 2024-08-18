import { Product } from "@/types/product.type"
import { DeleteOutlined } from "@ant-design/icons"
import { Button, Card } from "antd"
import { FC } from "react"

interface ProductListProps{
    products: Product[]
}

export const ProductList:FC<ProductListProps> = ( {products} ) => {

    const handleDelete = (id: string) =>{
        console.log(id);
    }

    const content = products?.map((item)=>{
        return (
            <Card  title={<div className="text-deep-olive" style={{ display: 'flex', alignItems: 'center' }}>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <Button 
                    type="text" 
                    icon={<DeleteOutlined color="red"/>} 
                    style={{ marginLeft: 'auto' }} 
                    onClick={() => handleDelete(item.id)}
                />
                </div>}  
                bordered
                style={{ width: '100%',margin:'10px 0' }}
                key={item.key}
                >
                    <p className="text-light-olive">Categories: {item.categories.join(', ')}</p>
                    <p className="text-light-olive mb-3">Price: {item.price}, Rent: {item.rent} per day</p>
                    <p className="text-deep-olive mb-3">
                        {item.description}
                    </p>
                    <p className="text-light-olive">
                        Date posted: {item.postedDate}
                    </p>
            </Card>
        )
    })

    return(
        <div>
            {content}
        </div>
        
    )
}