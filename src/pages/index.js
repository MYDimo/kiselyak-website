import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "../styles/main.css";

export default function IndexPage() {
  const query = useStaticQuery(graphql`
    {
      allProducts: allContentfulProductShirt {
        nodes {
          id
          mainImage {
            gatsbyImageData(height: 200, width: 200)
          }
          price
          productName
          productSlug
          shortDescription
          size
        }
      }
    }
  `);

  return (
    <>
      <h1>Hello world!</h1>
      <button class="snipcart-checkout">Click here to checkout</button>
      <span class="snipcart-items-count"></span>
      <div className="productGrid">
        {query.allProducts.nodes.map((el) => (
          <div className="productWrapper" key={el.id}>
            <GatsbyImage
              image={el.mainImage.gatsbyImageData}
              alt={el.productName}
            />
            <p>{el.productName}</p>
            <p>{el.color}</p>
            <p>{el.price}</p>
            <button
              className={`snipcart-add-item`}
              data-item-id={el.id}
              data-item-name={el.productName}
              data-item-image={el.mainImage.gatsbyImageData.images.fallback.src}
              data-item-price={el.discountPrice ? el.discountPrice : el.price}
              data-item-url={`kiselyak.com/products/${el.productSlug}`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

// export const Head = () => <title>Home Page</title>
