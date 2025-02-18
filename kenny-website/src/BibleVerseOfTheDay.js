// BibleVerseOfTheDay.js
import React, { useState, useEffect } from "react";

const BibleVerseOfTheDay = () => {
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch a random verse from the Bible Labs API
    fetch("https://labs.bible.org/api/?passage=random&type=json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          const firstVerse = data[0];
          setVerse({
            verse: firstVerse.text,
            reference: `${firstVerse.bookname} ${firstVerse.chapter}:${firstVerse.verse}`,
            date: new Date().toLocaleDateString(),
          });
        } else {
          throw new Error("No verse data found");
        }
      })
      .catch((err) => {
        console.error("Error fetching Bible verse:", err);
        setError(err);
      });
  }, []);

  if (error)
    return (
      <div className="bible-verse-container">
        <h2>Bible Verse of the Day</h2>
        <p>Error loading verse: {error.message}</p>
      </div>
    );
  if (!verse)
    return (
      <div className="bible-verse-container">
        <h2>Bible Verse of the Day</h2>
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="bible-verse-container">
      <h2>Bible Verse of the Day</h2>
      <blockquote style={{ fontStyle: "italic", fontSize: "1.5em", margin: "20px 0" }}>
        "{verse.verse}"
      </blockquote>
      <p>
        <strong>{verse.reference}</strong> &mdash; {verse.date}
      </p>
    </div>
  );
};

export default BibleVerseOfTheDay;
