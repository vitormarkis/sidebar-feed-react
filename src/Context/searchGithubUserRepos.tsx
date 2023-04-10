import React from "react"

interface ISearchGithubUserReposContext {
  searchInput: string
  setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

export const SearchGithubUserReposContext = React.createContext({} as ISearchGithubUserReposContext)

export const SearchGithubUserReposProvider = (props: { children: React.ReactNode }) => {
  const [searchInput, setSearchInput] = React.useState("")

  return (
    <SearchGithubUserReposContext.Provider
      value={{ searchInput, setSearchInput }}
      children={props.children}
    />
  )
}

export const useSearchGithubUserRepos = () => React.useContext(SearchGithubUserReposContext)
