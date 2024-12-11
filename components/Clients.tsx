"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> fellow colleagues</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>



<div className=" bg-white-200 w-screen px-4 py-8">
  <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 ">
    {companies.map((company) => (
      <React.Fragment key={company.id}>
        <div className="flex md:max-w-80 max-w-45 gap-5">
          <img
            src={company.img}
            alt={company.name}
            width={company.id === 4 || company.id === 5 ? 100 : 150}
            className="md:w-24 w-20"
          />
        </div>
      </React.Fragment>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default Clients;
