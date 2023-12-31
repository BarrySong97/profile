import Link from "next/link";
import React, { FC } from "react";
export type Timeline = {
  title: string;
  startDate: string;
  endDate: string;
  position?: string;
  link: string;
  loc: string;
  description: string;
};
export interface TimeLineProps {
  data: Timeline[];
}
const TimeLine: FC<TimeLineProps> = ({ data }) => {
  return (
    <div className="lg:pt-2 ml-4">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {data.map((item, i) => (
          <li key={item.title} className="mb-10 ml-8 ">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              <Link
                className="font-medium  hover:underline"
                target="_blank"
                href={item.link}
              >
                {item.title}
              </Link>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                {item.position}
              </span>
            </h3>
            <div className="mb-2">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                {item.loc}
              </span>
              <time className=" text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
            </div>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimeLine;
