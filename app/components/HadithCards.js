import Image from "next/image";

import bookIcon from "../../public/hadithcards/book.svg";
import flowerIcon from "../../public/hadithcards/flower-icon.svg";
import mainBook from "../../public/hadithcards/book1.svg";
import copyIcon from "../../public/hadithcards/copy.svg";
import bookmarkIcon from "../../public/hadithcards/bookmark.svg";
import shareIcon from "../../public/hadithcards/share.svg";
import directIcon from "../../public/hadithcards/direct.svg";
import reportIcon from "../../public/hadithcards/report.svg";

const HadithCards = async ({ books, chapters, hadith, section }) => {
  const booksData = await books;
  const chapterData = await chapters;
  const hadithData = await hadith;
  const sectionData = await section;

  return (
    <div>
      <div className="">
        <div className="text-black  rounded-md overflow-y-auto  mb-[50px] scrollbar">
          {booksData.map((book) => (
            <div
              className="flex items-center bg-white px-3 py-4 rounded-md mb-3"
              key={book.id}
            >
              <Image
                className="pr-3 rounded-md"
                src={mainBook}
                alt="book Icon"
                width={60}
                height={60}
              />
              <div>
                <h1 className="text-2xl font-bold">{book.title}</h1>
                <p>সর্বমোট হাদিস - {book.number_of_hadis}</p>
              </div>
            </div>
          ))}

          {chapterData.map((singelChapter) => (
            <div key={singelChapter.id}>
              <div className="flex items-center bg-white px-3 py-3 font-bold rounded-md my-3">
                <h1 className="bg-green-500 text-white mr-3 py-1 px-[13px] rounded-md text-2xl">
                  {singelChapter.id}
                </h1>
                <div>
                  <h2>{singelChapter.title}</h2>
                </div>
              </div>
              {sectionData
                .filter((item) => item.chapter_id === singelChapter.id)
                .map((section) => (
                  <div key={section.id}>
                    <div className="bg-white px-3 py-5 rounded-md my-3">
                      <div className="flex items-center font-bold mb-3">
                        <Image
                          className="pr-3 rounded-md"
                          src={bookIcon}
                          alt="book Icon"
                          width={50}
                          height={50}
                        />
                        <h2>{section.number}</h2>
                      </div>
                      <h2>{section.title}</h2>
                      <h2>{section.preface}</h2>
                    </div>
                    {hadithData
                      .filter((item) => item.section_id === section.id)
                      .map((item) => (
                        <div
                          key={item.id}
                          className="bg-white px-3 py-5 rounded-md my-3"
                        >
                          <div className="flex mt-2 text-green-500">
                            <Image
                              className="pr-3 rounded-md "
                              src={flowerIcon}
                              alt="book Icon"
                              width={35}
                              height={35}
                            />
                            <p>{item.hadith_id}</p>
                          </div>
                          <br />
                          <p>{item.ar}</p>
                          <br />
                          <p>{item.narrator}</p>
                          <br />
                          <p>{item.bn}</p>
                          <br />
                          <div className="md:flex justify-between">
                            <p>
                              হাদিসের মান :{"  "}
                              <span className="py-1 px-2 ml-2 bg-green-500 text-white rounded-md">
                                {item.grade}
                              </span>
                            </p>
                            <div className="flex justify-evenly mt-5 md:mt-0 md:gap-16 lg:gap-20">
                              <Image
                                src={copyIcon}
                                alt="copy Icon"
                                width={25}
                                height={25}
                              />
                              <Image
                                src={bookmarkIcon}
                                alt="Bookmark Icon"
                                width={25}
                                height={25}
                              />
                              <Image
                                src={shareIcon}
                                alt="share Icon"
                                width={25}
                                height={25}
                              />
                              <Image
                                src={reportIcon}
                                alt="report Icon"
                                width={25}
                                height={25}
                              />
                              <Image
                                src={directIcon}
                                alt="direct Icon"
                                width={25}
                                height={25}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HadithCards;
