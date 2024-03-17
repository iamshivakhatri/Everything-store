import {Billboard} from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getbillboard = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`, { next: { revalidate: 5 } });
    const data = await res.json();
    return data;
};


export default getbillboard;

