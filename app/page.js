import Image from "next/image";
import { getBooks, getChapters, getHadith, getSection } from "./api/HadisData";
import Sidebar from "./components/Sidebar";

export default async function Home() {
  const books = await getBooks();
  const chapters = await getChapters();
  const section = await getSection();
  const hadith = await getHadith();
  return (
    <main className="pt-[20px] pl-[20px] pr-[20px]">
      <div className="flex">
        <div className="hidden xl:flex">
          <Sidebar books={books} chapters={chapters} />
        </div>
        <p>hadis collections</p>
      </div>
    </main>
  );
}
