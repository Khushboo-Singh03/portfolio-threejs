import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educations } from "../constants";
// import Certificate from '../components/Certificate'

const Education = () => {
  return (
    <section className="max-container">
      <h3 className="text-3xl font-medium">
        My <span className="blue-gradient_text font-medium">Academic Journey</span>
      </h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
        Embarking on a quest for knowledge, I've navigated through a diverse academic landscape. My educational journey has equipped me with the skills and insights needed to thrive in the world of technology. Explore my academic milestones and discover how each step has shaped my path in the ever-evolving field of IT!
        </p>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {educations.map((education) => (
              <VerticalTimelineElement
                key={education.college_name}
                date={education.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={education.icon}
                      alt={education.college}
                      className="w-[86%] h-[86%] object-contain"
                    />
                  </div>
                }
                iconStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: education.iconBg,
                  // background:education.iconBg,
                  boxShadow: "none",
                }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: education.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {education.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {education.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {education.points.map((point, index) => (
                    <li
                      // key={`education-point-${index}`}
                      key={index}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div className="py-16">
        <h3 className="text-7xl font-medium">Certificate & Achievment</h3>
        <div className="mt-5 ">
          <div className="flex-wrap justify-center  py-12 items-center">
            <div className="flex justify-between items-center">
              <h1 className="pr-6">
                Hello Jiya, how are you? May I help you? Hello Jiya, how are
                you? May I help you? Hello Jiya, how are you? May I help you?
              </h1>

              <div className="transform rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105 flex-shrink-0">
                <div className="flex h-full justify-center items-center">
                  <img src="" alt="hello" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="transform rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105 flex-shrink-0">
                <div className="flex h-full justify-center items-center">
                  <img src="" alt="hello" />
                </div>
              </div>
              <h1 className="pl-6">
                Hello Jiya, how are you? May I help you? Hello Jiya, how are
                you? May I help you? Hello Jiya, how are you? May I help you?
              </h1>
            </div>
            <div className="flex justify-between items-center pb-6">
              <h1 className="pr-6">
                Hello Jiya, how are you? May I help you? Hello Jiya, how are
                you? May I help you? Hello Jiya, how are you? May I help you?
              </h1>

              <div className="transform rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105 flex-shrink-0">
                <div className="flex h-full justify-center items-center">
                  <img src="" alt="hello" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="transform rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105 flex-shrink-0">
                <div className="flex h-full justify-center items-center">
                  <img src="" alt="hello" />
                </div>
              </div>
              <h1 className="pl-6">
                Hello Jiya, how are you? May I help you? Hello Jiya, how are
                you? May I help you? Hello Jiya, how are you? May I help you?
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
