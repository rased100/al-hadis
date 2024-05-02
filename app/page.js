import Image from "next/image";
import { getBooks, getChapters, getHadith, getSection } from "./api/HadisData";
import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings";

export default async function Home() {
  const books = await getBooks();
  const chapters = await getChapters();
  const section = await getSection();
  const hadith = await getHadith();
  return (
    <main className="pt-[20px] pl-[20px] pr-[20px]">
      <div className="flex justify-end">
        <div className="hidden xl:flex">
          <Sidebar books={books} chapters={chapters} />
          <Sidebar books={books} chapters={chapters} />
          <Sidebar books={books} chapters={chapters} />
        </div>
        <div className="ml-5">
          <Settings />
        </div>
        {/* <p>hadis collections</p> */}
      </div>
    </main>
  );
}
