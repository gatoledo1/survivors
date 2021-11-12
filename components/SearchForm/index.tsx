import { useState } from 'react'
import { Card } from '..';
import styles from './styles.module.scss';

export const SearchForm = ({ search, survivors }) => {

  const [searchData, setSearchData] = useState<string | null>('');

  const DataReturn = () => {
    //event.preventDefault()
    const found = search.indexOf(searchData)

    return (
      <div>
        {
          found !== -1 &&
            <Card key={survivors[found]?.id} idItem={survivors[found]?.id}
            name={survivors[found]?.name} attribute={survivors[found]?.attribute}
            email={survivors[found]?.email} infectado={survivors[found]?.infectado} />
        }
      </div>
    )
  }

  return (
    <div className={styles.searchContainer}>
      <div className={[styles.rowSearch, styles.iconSearch].join(" ")}>
        <div>
          <input type="text" className={styles.search} autoComplete="off" name="search"
          value={searchData} onChange={event => setSearchData(event.target.value)} placeholder="Pesquisar" />
          <button type="submit" className={styles.btnSearch} onClick={DataReturn}></button>
        </div>
      </div>

      <DataReturn />

    </div>
  )

}