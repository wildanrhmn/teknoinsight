import { PopularList } from "@/lib/definiton/definition";
import { fetchAllPopularList } from "@/lib/data";

import Link from "next/link";
import Image from "next/image";

export default async function TopTutorials({
  topTutorialData,
}: {
  topTutorialData: PopularList[];
}) {
  return (
    <div className="asidebar-tutorials">
      <div className='flex items-center w-full h-[50px] flex-shrink-0 border-2 border-solid border-secondary relative rounded-[6px] mb-[7px] after:absolute after:w-[5%] after:h-full after:content-[" "] after:left-0 after:top-0 after:bg-secondary'>
        <h3 className="text-[24px] font-bold ml-[35px] text-dark">
          Tutorial Terbaru
        </h3>
      </div>
      <div className="ps-[10px]">
        {topTutorialData
          ?.filter((tutorial) => tutorial.type === "tutorial")
          .map((tutorial) => {
            const pathDetail = `/tutorial/tutorial-detail/${tutorial.id}`;
            return (
              <div
                key={tutorial.id}
                className="flex items-center mb-[10px] gap-3"
              >
                <div className="relative w-[47px] h-[47px] flex-shrink-0">
                  <Image
                    src={tutorial.image[1]}
                    alt={tutorial.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <Link
                  href={pathDetail}
                  className="text-[#203397] text-[16px] overflow-ellipsis overflow-y-hidden line-clamp-2"
                >
                  {tutorial.title}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
