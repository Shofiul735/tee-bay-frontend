import Image from 'next/image';
import bannerImage from '@/assets/images/e-com-banner-image.png'


export const AuthBanner = () => {
    return(
        <div className="flex flex-col justify-center items-center h-[50vh] md:h-full bg-deep-olive font-bold">
            <h1 className="text-2xl md:text-4xl text-lightPeach uppercase text-center"> Welcome to </h1>
            <Image 
                src={bannerImage}
                width={120}
                height={120}
                alt="Banner text"
                className="py-5"
            />
            <div className="w-full md:w-4/5 text-center">
                <h1 className="uppercase text-lightPeach text-2xl md:text-4xl">E-Commerce Business</h1>
            </div>
            
        </div>
    )
}