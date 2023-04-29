import Hero from "@/components/Hero";
import { Wrapper } from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";
import { fetchDataFromAPI } from "@/utils/api";

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const {data} = await fetchDataFromAPI('/api/products')
        setData(data)
    }

    return <main>
        <Hero/>
        <h1>{data?.[3]?.attributes?.name}</h1>
        <Wrapper>
            {/* heading para start */}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Cushioning for your miles
                </div>
                <div className="text-md md:text-xl">
                    A lightweight Nike ZoomX midsole is combined with
                    increased stack heights to help provide cushioning
                    during extended streches of running.
                </div>
            </div>
            {/* heading para end */}

            {/* product cards start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5
            my-14 px-5 md:px-0">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
            </div>
            {/* product cards end */}

        </Wrapper>
    </main>;
}
