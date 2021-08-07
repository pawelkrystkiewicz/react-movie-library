import React from 'react'

interface SearchInputProps {
  searchPhrase: string
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>
}

export const SearchInput = ({
  searchPhrase,
  setSearchPhrase,
}: SearchInputProps): JSX.Element => (
  <input
    placeholder={'Media title'}
    onChange={e => setSearchPhrase(e.target.value)}
    value={searchPhrase}
    type="text"
  />
)
