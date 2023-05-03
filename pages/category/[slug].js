import React from "react";

import { Wrapper } from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromAPI } from "@/utils/api";

const Category = (category, products, slug) => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>

        {/* product cards start */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5
            my-14 px-5 md:px-0"
        >
        </div>
        {/* product cards end */}
      </Wrapper>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  const category = await fetchDataFromAPI("/api/categories?populate=*");

  const paths = category.data.map((c) => ({
    params: {
      slug: c.attributes.slug
    }
  }))

  return { paths, fallback: false };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: {slug} }) {
    const category = await fetchDataFromAPI(`/api/categories?filters[slug][$eq]=${slug}`)

    const products = await fetchDataFromAPI(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`)

    return {
      props:{
        category,
        products,
        slug,
      }
    }
}
