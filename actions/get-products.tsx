import {Product} from '@/types'
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query{
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    

    const url = qs.stringifyUrl({
        url: URL,
        query:{
            categoryId: query.categoryId,
            colorId: query.colorId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured
        
        }

    });
    const res = await fetch(URL, { next: { revalidate: 5 } });
    const data = await res.json();
    return data;
};

export default getProducts


// const getCategories = async () => Promise<Category[]> => {
//     const res = await fetch(URL)
//     const data = await res.json()
//     return data
// };