import Container from '@/components/ui/container';
import Billboard from '@/components/billboard';
import getbillboard from '@/actions/get-billboard';


const HomePage = async() => {
    const  billboard = await getbillboard("2e65035e-a859-4f8d-bb83-bbb2c083f053");
    console.log("This is the billboard", billboard);
    return (
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard} /> {/* Pass a single Billboard object */}
            </div>
        </Container>
    )
}
export default HomePage;