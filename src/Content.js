import React from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import coffeMakerList from "./constants";

const Content = () => {
  const getCoffeMakerCard = (coffeMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeCard {...coffeMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      {/* <CoffeCard
          title="VR set"
          subtitle="$89.99"
          avatarSrc="https://images-na.ssl-images-amazon.com/images/G/01/img16/wearable-technology/content-grid/landing-page/1012965_wireless_products_wearable_tech_tile_virtual_reality.jpg"
          imgSrc="https://images-na.ssl-images-amazon.com/images/I/61jEyYi7KdL._SY355_.jpg"
          description="This is a VR headset"
        /> */}
      {coffeMakerList.map((coffeMakerObj) => getCoffeMakerCard(coffeMakerObj))}
    </Grid>
  );
};

export default Content;
