import { Stack, styled } from "@mui/material";
import React, { useState } from "react";
import { banner } from "../data/data";
import { Product, FooterBanner, HeroBanner } from "./components";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
const StyledStack = styled(Stack)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginTop: "20px",
  width: "100%",
  flexDirection: "row",
  borderRadius: "100px",
}));

const Home = ({ products }) => {
  const data = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Sport",
    },
    {
      id: 3,
      title: "Music",
    },
    {
      id: 4,
      title: "Food and Drink",
    },
  ];
  const [displayProduct, setDisplayProduct] = useState(products);
  const handleChange = (category) => {
    if (category === "All") {
      setDisplayProduct(products);
    } else {
      setDisplayProduct((prevProducts) =>
        prevProducts.filter((item) => item.category.name === category)
      );
    }
  };
  return (
    <>
      <HeroBanner heroBanner={banner} />
      <div className="products-heading">
        <h2>Best selling</h2>
        <p>Speaker</p>
      </div>
      <StyledStack>
        <List
          sx={{
            width: "18%",
            marginRight: "20px",
            height: "100%",
            gap: "12px",
          }}
        >
          {data.map((item) => (
            <ListItem>
              <ListItemButton
                sx={{ borderRadius: "100px" }}
                key={item.id}
                onClick={() => handleChange(item.title)}
              >
                <ListItemText
                  sx={{ fontSize: "18px", fontWeight: "500" }}
                  disableTypography
                  primary={item.title}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Stack
          sx={{
            width: "80%",
          }}
          direction="row"
          flexWrap="wrap"
          gap="20px"
        >
          {displayProduct?.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Stack>
      </StyledStack>
      <FooterBanner footerBanner={banner} />
    </>
  );
};

export default Home;

export async function getServerSideProps({ query }) {
  const name = query.name;
  try {
    let url = "http://127.0.0.1:8000/api/product/";
    if (name) {
      url += `?name=${encodeURIComponent(name)}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const searchData = await response.json();

    return {
      props: {
        products: searchData.products,
      },
    };
  } catch (error) {
    console.error("Error fetching search data:", error);

    return {
      props: {
        searchData: null,
        error: "Error fetching search data",
      },
    };
  }
}
