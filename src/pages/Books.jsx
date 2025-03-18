import React, { useState, useEffect } from "react";

function Books() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  // Fonction pour récupérer les livres
  const fetchBooks = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json();
      setBooks(data.docs || []); // Met à jour l'état avec les livres récupérés
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  // Utiliser useEffect pour appeler fetchBooks lorsque le `query` change
  useEffect(() => {
    if (query) {
      fetchBooks();
    }
  }, [query]); // Exécution lorsque `query` change

  return (
    <div className="books-container">
      <h2>BOOKS</h2>

      {/* search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books"
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button onClick={fetchBooks}>Search</button>
      </div>

      {/* Affichage des livres avec map */}
      <div className="grid-book">
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={book.key || index} className="book-card">
              <h3>{book.title}</h3>
              <p>{book.author_name ? book.author_name.join(", ") : "Auteur inconnu"}</p>
              <p>{book.first_publish_year}</p>
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}

export default Books;
