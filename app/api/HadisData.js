// book
export async function getBooks() {
  const result = await fetch("http://localhost:5000/books");

  if (!result.ok) {
    throw new Error("There was an Error fething Data");
  }
  return result.json();
}

// chapter
export async function getChapters() {
  const result = await fetch("http://localhost:5000/chapters");

  if (!result.ok) {
    const text = await result.text();
    const status = result.status;
    throw new Error(`Failed to retrieve books (status: ${status}). ${text}`);
  }

  return result.json();
}

// hadith
export async function getHadith() {
  const result = await fetch("http://localhost:5000/hadiths");

  if (!result.ok) {
    const text = await result.text();
    const status = result.status;
    throw new Error(`Failed to retrieve books (status: ${status}). ${text}`);
  }

  return result.json();
}

// section
export async function getSection() {
  const result = await fetch("http://localhost:5000/sections");

  if (!result.ok) {
    const text = await result.text();
    const status = result.status;
    throw new Error(`Failed to retrieve books (status: ${status}). ${text}`);
  }

  return result.json();
}
