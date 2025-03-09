"use client";
import React from "react";
import about_image from "@public/assets/about/working.jpg";
import Image from "next/image";
import Link from "next/link";
import {MoveRight } from "lucide-react";

const About = () => {
  return (
    <section className="bg-gray-100 p-10">
      <div className="container m-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="flex-1 ">
            <div className="relative aspect-[3/3] w-full max-w-[500px] h-full border-r-[#D4BEE4] border-r-4 p-2 border-b-[#D4BEE4] border-b-2 rounded-br-lg">
              <Image
                src={about_image.src}
                alt="About Me"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg md:text-xl opacity-80 mb-6">
              I am a passionate Full Stack Developer & UI/UX Designer with years
              of experience in crafting innovative, user-friendly solutions. I
              enjoy creating seamless, scalable web applications and designing
              impactful digital experiences.
            </p>
            <p className="text-lg md:text-xl opacity-80 mb-6">
              My goal is to continuously learn and grow while contributing my
              skills to make the web a better place. Whether working on the
              front-end or back-end, I am always focused on optimizing
              performance and user experience.
            </p>
            <Link
              href={""}
              className="flex justify-center items-center btn bg-[#9B7EBD] text-white px-6 py-2 rounded-full text-lg hover:bg-[#D4BEE4] transition duration-700"
            >
              <MoveRight className="mr-2" />
              See Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
