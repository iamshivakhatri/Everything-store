

import {Size} from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    const res = await fetch(URL, { next: { revalidate: 5 } });
    const data = await res.json();
    return data;
};

export default getSizes


// const getCategories = async () => Promise<Category[]> => {
//     const res = await fetch(URL)
//     const data = await res.json()
//     return data
// };