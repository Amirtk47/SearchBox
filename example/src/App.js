import React from 'react'
import { SearchBox } from 'search-box-lib'

const App = () => {
  const handleSearch = () => {
    console.log('searched')
  }
  return (
    <div>
      <SearchBox onChange={handleSearch} inputPlaceHolder='Search' />
    </div>
  )
}

export default App
