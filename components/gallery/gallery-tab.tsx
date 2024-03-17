import Image from 'next/image';
import { Tab } from '@headlessui/react';

import {cn} from "@/lib/utils"
import { Image as ImageType } from '@/types';

interface GalleryTabProps {
    image: ImageType;
}

const GalleryTab:React.FC<GalleryTabProps> = ({image}) => {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                       <Image 
                        fill
                        src={image.url}
                        alt="Image"
                        layout="fill"
                        objectFit="cover"
                        className="object-center object-cover rounded-md"
                        />

                    </span>
                    <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2 ", selected? "ring-black": "ring-transparent")}/>

                 
                </div>
            )}
            {/* {({ selected }) => (
                <div>
                    <span className='absoulute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                        <Image 
                        fill
                        src={image.url}
                        alt="Image"
                        layout="fill"
                        objectFit="cover"
                        // className="aspect-square object-cover rounded-md"
                        className={cn("aspect-square object-cover rounded-md", selected && "border-2 border-blue-500")}
                        />


                    </span>
                    <span className={cn("absoulute inset-0 rounded-md ring-2 ring-offset-2", selected? "ring-black": "ring-transparent")}/>
                </div>
            )} */}
            
        </Tab>
      );
}
 
export default GalleryTab;