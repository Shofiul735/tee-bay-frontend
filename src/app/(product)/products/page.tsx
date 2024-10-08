"use client"

import { ApplicationLayout } from "@/components/ApplicartionLayout/ApplicationLayout";
import { Product } from "@/types/product.type";
import { ProductList } from "./_components/ProductList";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";


const CreateProduct = dynamic(() => import("../_components/CreateProduct/CreateProduct"), {
    ssr: false
});

const myProducts: Product[] = [
    {
        key: '1',
        id: 'uuid',
        title: 'A title',
        description: `A descriptionA descriptionA descriptionA descriptionA descriptionA description
                        A descriptionA description A descriptionA descriptionA descriptionA description
                        A descriptionA descriptionA descriptionA descriptionA descriptionA description
                        A descriptionA description A descriptionA descriptionA descriptionA description
                        A descriptionA descriptionA descriptionA descriptionA descriptionA description
                        A descriptionA description A descriptionA descriptionA descriptionA description`,
        categories: ['Toy', 'Food'],
        price: 500,
        rent: 100,
        postedDate: '10/20/30'
    },
    {
        key: '2',
        id: 'uuid',
        title: 'A title',
        description: `A descriptionA descriptionA descriptionA descriptionA descriptionA description
                        A descriptionA description A descriptionA descriptionA descriptionA description`,
        categories: ['Toy', 'Food'],
        price: 500,
        rent: 100,
        postedDate: '10/20/30'
    },
    {
        key: '3',
        id: 'uuid',
        title: 'A title',
        description: `A descriptionA descriptionA descriptionA descriptionA descriptionA description
                        A descriptionA description A descriptionA descriptionA descriptionA description`,
        categories: ['Toy', 'Food'],
        price: 500,
        rent: 100,
        postedDate: '10/20/30'
    }
];

const allProducts: Product[] = [
    {
        key: '4',
        id: 'uuid',
        title: 'All Product',
        description: `A descriptionA descriptionA descriptionA descriptionA descriptionA description
                        A descriptionA description A descriptionA descriptionA descriptionA description`,
        categories: ['Toy', 'Food'],
        price: 500,
        rent: 100,
        postedDate: '10/20/30'
    },
    {
        key: '5',
        id: 'uuid',
        title: 'All Product',
        description: `A descriptionA descriptionA descriptionA descriptionA descriptionA description
                        A descriptionA description A descriptionA descriptionA descriptionA description`,
        categories: ['Toy', 'Food'],
        price: 500,
        rent: 100,
        postedDate: '10/20/30'
    },
    {
        key: '6',
        id: 'uuid',
        title: 'All Product',
        description: `A descriptionA descriptionA descriptionA descriptionA descriptionA description
                        A descriptionA description A descriptionA descriptionA descriptionA description`,
        categories: ['Toy', 'Food'],
        price: 500,
        rent: 100,
        postedDate: '10/20/30'
    }
];

const AllProducts = () => {
    const [isMyProduct,setMyProduct] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>(myProducts);

    const menuHandler = useCallback((item: { key: string }) => {
        if (item.key === 'all-products') {
            setMyProduct(false);
            setProducts(allProducts);
        } else if (item.key === 'my-products') {
            setMyProduct(true);
            setProducts(myProducts);
        } else {
            setProducts([]);
        }
    }, []);

    return (
        <ApplicationLayout onHeaderClick={menuHandler}>
            <div className="h-3/4 w-4/5 mt-16">
                {products?.length > 0 ? <ProductList products={products} isMyProduct={isMyProduct}/> : <CreateProduct/>}
            </div>
        </ApplicationLayout>
    );
}

export default AllProducts;
