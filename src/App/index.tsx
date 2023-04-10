import Feed from "../Feed"
import Header from "../Header"
import Sidebar from "../Sidebar"

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <div className="max-w-7xl w-full mx-auto flex border-x border-stone-600">
        <Sidebar />
        <Feed />
      </div>
    </div>
  )
}

export default App
