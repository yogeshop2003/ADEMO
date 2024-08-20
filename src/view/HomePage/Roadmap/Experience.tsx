"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "./styless";
import { SectionWrapper } from "../hoc";
import { textVariant } from "./motion";
import { experiences } from "./Constants";

import dynamic from "next/dynamic";


// Define TypeScript interface for the experience object
interface Experience {
  date: string;
  icon: string;
  iconBg: string;
  title: string;
  company_name: string;
  points: string[];
}

// Define TypeScript interface for ExperienceCard props
interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[100%] h-[100%] object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>


      <div className="container">
          <h2 className="select-none text-center page-title ff-orbitron-b text-3xl 2xl:text-[56px] text-phlox page-title-phlox-s">
              What We have done so far
          </h2>
        </div>


        {/* <p className={`${styles.sectionSubText} select-none text-center`}>
          What We have done so far
        </p> */}

        {/* <div className="container">
          <h2 className="text-center page-title ff-orbitron-b text-3xl 2xl:text-[56px] text-phlox page-title-phlox-s">
          Made with 💚
          </h2>
        </div> */}
        <h2 className={`${styles.sectionHeadText} select-none text-center`}>
          Made with 💚
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
// export default dynamic (() => Promise.resolve(Experience), {ssr: false})