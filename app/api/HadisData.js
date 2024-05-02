// book
export async function getBooks() {
  const result = await fetch("https://al-hadith-server.onrender.com/books");

  if (!result.ok) {
    throw new Error("There was an Error fething Data");
  }
  return result.json();
}

// chapter
export async function getChapters() {
  const result = await fetch("https://al-hadith-server.onrender.com/chapter");

  if (!result.ok) {
    const text = await result.text();
    const status = result.status;
    throw new Error(`Failed to retrieve books (status: ${status}). ${text}`);
  }

  return result.json();
}

// hadith
export async function getHadith() {
  const result = await fetch("https://al-hadith-server.onrender.com/hadith");

  if (!result.ok) {
    const text = await result.text();
    const status = result.status;
    throw new Error(`Failed to retrieve books (status: ${status}). ${text}`);
  }

  return result.json();
}

// section
export async function getSection() {
  const result = await fetch("https://al-hadith-server.onrender.com/section");

  if (!result.ok) {
    const text = await result.text();
    const status = result.status;
    throw new Error(`Failed to retrieve books (status: ${status}). ${text}`);
  }

  return result.json();
}
