import React, {ChangeEvent, useState} from 'react'
import SearchList from './SearchList/SearchList'
import {uuid} from 'uuidv4'

type TProps = {
  users: any
}

export type TList = {
  name: string
  id: string
}

type TNameLists = TList[]

const Search: React.FC<TProps> = ({users}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [nameLists, setNameLists] = useState<TNameLists>([])

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value)
    if (searchQuery.length) searchUser()
  }

  const searchUser = () => {
    for (let [id, user] of users) {
      const name = user.info.name
      const isNameSearch = name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
      if (isNameSearch) {
        setNameLists([...nameLists, {name, id}])
      }
    }
  }


  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text'
               value={searchQuery}
               onChange={searchChange}/>
      </div>
      <div className="search-lists">
        {nameLists?.map((name: TList) => <SearchList key={uuid()} {...name}/>)}
      </div>
    </div>
  )
}

export default Search