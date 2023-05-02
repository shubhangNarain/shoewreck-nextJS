import Hero from "@/components/Hero";
import { Wrapper } from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromAPI } from "@/utils/api";

export default function Home({products}) {

    return <main>
        <Hero/>
        {/* <h1>{products?.data?.[0]?.attributes?.name}</h1> */}
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
                {products?.data?.map((product) => (
                    <ProductCard key={product.id} data={product}/>
                ))}
                    {/* <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/> */}
            </div>
            {/* product cards end */}

        </Wrapper>
    </main>;
}


export async function getStaticProps() {
    const products = await fetchDataFromAPI('/api/products?populate=*')
    return {
        props: {products}
    }
}