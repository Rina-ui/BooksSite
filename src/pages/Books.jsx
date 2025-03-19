import React, { useState, useEffect } from "react";
import "../styles/Books.css";

function Books() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  // Fonction pour récupérer les livres
  const fetchBooks = async (searchQuery = "") => {
    setLoading(true);
    setError(null);

    try {
      const url = searchQuery
        ? `https://openlibrary.org/search.json?q=${searchQuery}&mode=ebooks&has_fulltext=true`
        : `https://openlibrary.org/search.json?q=popular&mode=ebooks&has_fulltext=true`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des livres");
      }

      const data = await response.json();
      setBooks(data.docs || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Charger les livres au démarrage
  useEffect(() => {
    fetchBooks();
  }, []);

  // Recherche avec un délai pour éviter trop de requêtes
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim()) {
        fetchBooks(query);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="books-container">
      <h2>📚 BOOKS</h2>

      {/* Barre de recherche */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Affichage des messages d'état */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Affichage des livres */}
      <div className="grid-book">
        {books.length > 0 ? (
          books.map((book, index) => {
            // Vérification de la disponibilité pour la lecture
            const readableLink = book.ia ? `https://archive.org/embed/${book.ia[0]}` : null;

            return (
              <div key={book.key || index} className="book-card">
                <h3>{book.title}</h3>
                <p>{book.author_name ? book.author_name.join(", ") : "Auteur inconnu"}</p>
                <p>{book.first_publish_year || "Année inconnue"}</p>
                <img
                  src={
                    book.cover_i
                      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                      : "https://via.placeholder.com/150"
                  }
                  alt={book.title}
                />

                {/* Bouton de lecture avec vérification */}
                {readableLink ? (
                  <button
                    onClick={() => {
                      console.log("Lecture du livre :", readableLink);
                      setSelectedBook(readableLink);
                    }}
                    className="read-button"
                  >
                    📖 Lire en ligne
                  </button>
                ) : (
                  <p className="no-access">⚠️ Ce livre n'est pas disponible en lecture directe.</p>
                )}

                {/* Lien vers OpenLibrary si non lisible */}
                <a
                  href={`https://openlibrary.org/books/${book.edition_key?.[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-button"
                >
                  🌍 Voir sur Open Library
                </a>
              </div>
            );
          })
        ) : (
          !loading && <p>No books found</p>
        )}
      </div>

      {/* Affichage de la lecture du livre si disponible */}
      {selectedBook && (
        <div className="book-reader">
          <button onClick={() => setSelectedBook(null)}>❌ Fermer</button>
          <iframe
            src={selectedBook}
            title="Book Preview"
            width="100%"
            height="600px"
            style={{ border: "none" }}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Books;
