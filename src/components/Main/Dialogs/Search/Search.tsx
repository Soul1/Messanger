import React, {ChangeEvent, useEffect, useState} from 'react'
import SearchList from './SearchList/SearchList'
import { uuid } from 'uuidv4'

type TProps = {
  userLists?: TNameLists
}

export type TList = {
  name: string
  id: string
}

export type TNameLists = TList[]

const Search: React.FC<TProps> = ({userLists}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [userNamesList, setUserNamesList] = useState<any>([])

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value)
  }

  const filterSearchUser = (searchQuery: string, userLists?: TNameLists) => {
    setUserNamesList(userLists?.filter(
      ({id, name}) => name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0))
  }

  useEffect(() => filterSearchUser(searchQuery, userLists), [searchQuery])

  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text'
               value={searchQuery}
               onChange={searchChange}/>
      </div>
      <div className="search-lists">
        {!!searchQuery.length && userNamesList?.map((name: TList) => <SearchList key={uuid()} {...name}/>)}
      </div>
    </div>
  )
}

export default Search