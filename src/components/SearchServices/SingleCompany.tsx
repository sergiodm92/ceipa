import { Company } from "@/types/search";
import Image from "next/image";
import Link from "next/link";

const SingleCompany = ({ company }: { company: Company }) => {
  const { name, logo, industry, description, phone, website } = company;
  return (
    <>
      <div className="group relative min-h-[46rem] overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark flex flex-col justify-start">
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {industry}
          </span>
          <img src="https://www.azumuta.com/wp-content/uploads/2024/05/finished-pipe-transportation-by-overhead-crane-2048x1365-1-1024x683.jpeg" alt="image" />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {name}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {description.slice(0, 400)}...
          </p>
          <div className="flex items-center">
              <div className="mr-5 flex items-center border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
                <div className="mr-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <img src={logo} alt="author" />
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Contacto
                  </h4>
                  <p className="text-xs text-body-color">{website}</p>
                </div> 
              </div>
             {/* <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Email
              </h4>
              <p className="text-xs text-body-color">{website}</p>
            </div>  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCompany;
