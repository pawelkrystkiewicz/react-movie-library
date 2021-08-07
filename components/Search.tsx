import React from 'react'
import { Input } from 'antd'

const { Search } = Input
interface SearchInputProps {
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>
}

export const SearchInput = ({
  setSearchPhrase,
}: SearchInputProps): JSX.Element => (
  <Search
    allowClear
    placeholder="Search media..."
    onSearch={setSearchPhrase}
    enterButton
  />
)
