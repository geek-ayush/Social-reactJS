import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import smoke from "../../Assets/Image/smoke.jpg";

const items = [
  {
    src: smoke,
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header"
  },
  {
    src: smoke,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header"
  },
  {
    src: smoke,
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header"
  }
];

const PageContainer = () => <UncontrolledCarousel items={items} />;

export default PageContainer;
