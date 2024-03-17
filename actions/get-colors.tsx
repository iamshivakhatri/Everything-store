

import {Color} from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
    const res = await fetch(URL, { next: { revalidate: 5 } });
    const data = await res.json();
    return data;
};

export default getColors


// const getCategories = async () => Promise<Category[]> => {
//     const res = await fetch(URL)
//     const data = await res.json()
//     return data
// };