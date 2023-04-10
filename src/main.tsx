import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { SearchGithubUserReposProvider } from "./Context/searchGithubUserRepos"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SearchGithubUserReposProvider>
      <App />
    </SearchGithubUserReposProvider>
  </React.StrictMode>
)
