"use client";

import { News } from "@/types/news";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SingleNews = ({ news }: { news: News }) => {

  const router = useRouter();


  const { title, summary, date, content, image, id, autor } = news;

  return (
    <div className="relative flex flex-col w-full min-w-[22rem]" onClick={() => router.push(`/news/${id}`)}>
      <div className="h-[18rem] dark:bg-dark bg-white">

        <img src={image} alt={title} />
      </div>
      <div className="flex flex-col items-center justify-between rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8 h-[22rem]">
        <h2 className="mb-5 flex items-center space-x-1 text-lg font-bold">{title}</h2>
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          {summary.slice(0, 200)}...
        </p>
        <div className="absolute bottom-5 left-5 flex items-center justify-between w-full">
          <div className="w-full ">
            <p className="mb-1  text-dark dark:text-white lg:text-base xl:text-sm">
              {"Creado por " + autor + " el " + date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
