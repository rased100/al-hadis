import Image from "next/image";
import { getBooks, getChapters, getHadith, getSection } from "./api/HadisData";
import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings";
import HadithCards from "./components/HadithCards";

export default async function Home() {
  const books = await getBooks();
  const chapters = await getChapters();
  const section = await getSection();
  const hadith = await getHadith();
  return (
    <main className="pt-[20px] pl-[20px] pr-[20px]">
      <div className="flex">
        <div className="hidden xl:flex">
          <div className="w-[350px]">
            <Sidebar books={books} chapters={chapters} />
          </div>
        </div>
        <div className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300">
          {/* <div className="flex overflow-auto h-screen"> */}
          <div className="ml-5">
            <HadithCards
              books={books}
              chapters={chapters}
              section={section}
              hadith={hadith}
            />
          </div>
        </div>
        <div className="hidden 2xl:flex ">
          <div className="ml-5 w-[338px]">
            <Settings />
          </div>
        </div>
        {/* <p>hadis collections</p> */}
      </div>
    </main>
  );
}
