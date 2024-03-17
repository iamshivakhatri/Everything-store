import Container from '@/components/ui/container';
import Billboard from '@/components/billboard';
import getbillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-product';
import ProductList from '@/components/product-list';


const HomePage = async() => {
    const  billboard = await getbillboard("2e65035e-a859-4f8d-bb83-bbb2c083f053");
    const products = await getProducts({isFeatured: true});
    console.log("This is the products", products);
    
    return (
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard} /> {/* Pass a single Billboard object */}
            </div>
            <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                <ProductList title='Featured Products' items={products} />
            </div>
        </Container>
    )
}
export default HomePage;