import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="max-w-5xl flex felx-col items-center justify-center ">
      <div className="flex items-center">
        <div className=" relative  w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm-h[350px] md:h-[400px]">
          <Image
            src="/documents.png"
            fill
            alt="documents"
            className="object-contain dark:hidden"
          />
          <Image
            src="/documents-dark.png"
            fill
            alt="documents"
            className="object-contain hidden dark:block"
          />
        </div>
        <div className=" relative  w-[400px] h-[400px] hidden md:block">
          <Image
            src="/reading.png"
            fill
            alt="reading"
            className="object-contain dark:hidden"
          />
          <Image
            src="/reading-dark.png"
            fill
            alt="reading"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};
