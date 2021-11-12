import { useState } from "react";
import { Card } from "..";
import styles from "./styles.module.scss";

interface Form {
  search: Array<string>;
  survivors: Array<People>;
}

export const SearchForm = ({ search, survivors }: Form) => {
  const [searchData, setSearchData] = useState("");

  //Function that gets GraphQL data from the searched name and returns component 
  const DataReturn = () => {
    const found = search.indexOf(searchData);

    return (
      <div>
        {found !== -1 && (
          <Card
            key={survivors[found]?.id}
            idItem={survivors[found]?.id}
            name={survivors[found]?.name}
            attribute={survivors[found]?.attribute}
            email={survivors[found]?.email}
            infectado={survivors[found]?.infectado}
          />
        )}
      </div>
    );
  };

  return (
    <div className={styles.searchContainer}>
      <div className={[styles.rowSearch, styles.iconSearch].join(" ")}>
        <div>
          <input
            type="text"
            className={styles.search}
            autoComplete="off"
            name="search"
            value={searchData}
            onChange={(event) => setSearchData(event.target.value)}
            placeholder="Pesquise pelo nome exato"
          />
          <button
            type="submit"
            className={styles.btnSearch}
            onClick={DataReturn}
          ></button>
        </div>
      </div>

      <DataReturn />
    </div>
  );
};
