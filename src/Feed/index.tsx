import { useEffect, useState } from "react"

interface IRepos {
  id: string
  full_name: string
  description: string
  html_url: string
}

const Feed: React.FC = () => {
  const [repos, setRepos] = useState<IRepos[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.github.com/users/vitormarkis/repos")
      .then(res => res.json())
      .then(data => setRepos(data))
      .catch(error => error)
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="grow h-[500px] bg-stone-900 text-white leading-none flex flex-col overflow-y-scroll overflow-x-hidden">
      <div className="px-3 py-5 border-b border-stone-600 text-sm flex flex-col gap-6 text-stone-300">
        {isLoading && !repos ? (
          <h1 className="p-3 text-center font-medium">Carregando...</h1>
        ) : (
          repos &&
          repos.map(repo => {
            console.log({ desc: repo.full_name })
            return (
              <div
                className="py-3 px-3 rounded-lg bg-stone-700"
                key={repo.id}
              >
                {repo.full_name ? <h2 className="text-sm text-white mb-1 font-medium">{repo.full_name}</h2> : null}
                {repo.description ? <p className="text-xs text-stone-400 mb-2">{repo.description}</p> : null}
                <div className="flex">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    className="bg-stone-900 border-y rounded-lg border-t-white/30 border-b-white/20 text-white px-4 py-2 ml-auto"
                  >
                    Ver projeto
                  </a>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Feed
