import {Billboard as BillboardType} from '@/types'



interface BillboardProps {
    data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    console.log("This is the billboard in the billboard page", data)
    return (
        <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'  
        style={{height: '50vh'}}
        
        >
            <div 
            className='aspect-square md:aspect-2[2.4/1]  relative rounded-xl overflow-hidden bg-cover'
            style={{ backgroundImage: `url(${data?.imageUrl})`, backgroundRepeat: 'no-repeat', height: '100%', width: '100%' }} >


                <div className='h-full w-full flex flex-col justify-center items-center gap-y-8' >
                    <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
                        {data?.label}

                    </div>
                </div>
              
            </div>
        </div>

    )
}

export default Billboard

