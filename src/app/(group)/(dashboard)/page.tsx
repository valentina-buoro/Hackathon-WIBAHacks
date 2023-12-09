"use client";
import React from "react";
import Hero from "@/_components/hero";
import ElectionNews from "@/_components/electionNews";
import NewsLetter from "@/_components/newsLetter";
import Footer from "@/_components/footer";
import Faqs from "@/_components/faq";
import { PageContext } from "../layout";

const Page = () => {
  const connected = React.useContext(PageContext);

  return (
    <div>
      <Hero connected={connected} />
      <ElectionNews />
      <Faqs />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Page;
