// src/components/Search.js

import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Configure,
} from 'react-instantsearch-dom';
import './Search.css'; // Ensure this CSS file exists

// Initialize Algolia client using environment variables
const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY
);

// Define a Hit component to display individual search results
const Hit = ({ hit }) => (
  <div className="hit">
    <h3>
      <Highlight attribute="title" hit={hit} />
    </h3>
    <p>
      <Highlight attribute="description" hit={hit} />
    </p>
    <a href={hit.previewLink} target="_blank" rel="noopener noreferrer">
      <i className="bi bi-eye"></i> Preview
    </a>
    <a href={hit.githubLink} target="_blank" rel="noopener noreferrer" className="ms-2">
      <i className="bi bi-github"></i> GitHub
    </a>
  </div>
);

const Search = () => (
  <section id="search" className="search-section py-5">
    <div className="container">
      <h2 className="text-center mb-4">
        <i className="bi bi-search"></i> Search Projects
      </h2>
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.REACT_APP_ALGOLIA_INDEX_NAME}
      >
        <SearchBox translations={{ placeholder: 'Search for projects...' }} />
        <Configure hitsPerPage={5} />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  </section>
);

export default Search;
