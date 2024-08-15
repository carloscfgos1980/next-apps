"use client";

import {ImageDetails} from "../app/client-route/page";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

interface ImageProps {
  arrayImages: ImageDetails[];
  children?: React.ReactNode;
}

export default function CarouselComponent ({arrayImages}:ImageProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
  };
    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                {arrayImages.map(image => (
                    <div key={image.id} className="bg-white h-[450px] text-black rounded-xl p-3">
                        <div className="flex flex-col items-center justify-center gap-4 p-4">
                            <p className="text-xl font-semibold">Image {image.id}</p>
                        </div>
                        <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                            <Image
                                src={image.location}
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>

                ))}

            </Slider>
            </div>
        </div>

    )

}