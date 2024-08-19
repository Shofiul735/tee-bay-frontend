import { Product } from "@/types/product.type"
import { FC } from "react"
import { ProductCard } from "./ProductCard";
import Link from "next/link";

interface ProductListProps{
    products: Product[];
    isMyProduct: boolean;
}

export const ProductList:FC<ProductListProps> = ( {products, isMyProduct} ) => {

    const handleDelete = (id: string) =>{
        console.log(id);
    }

    const content = products?.map((item)=>{
        return ( 
            <Link href={ isMyProduct ? `/myproduct/${item.id}` : `/allproduct/${item.id}`} key={item.key}>
                <ProductCard item={item}/>
            </Link>
             
        );
    })

    return(
        <div>
            {content}
        </div>
        
    )
}