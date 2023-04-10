const Sidebar: React.FC = () => {
  return (
    <div className="basis-[320px] bg-stone-800 text-white leading-none flex flex-col border-r border-stone-600">
      <div className="p-3 border-b border-stone-600 text-center">
        <h2>Vitor Markis</h2>
      </div>
      <div className="px-3 py-8 border-b border-stone-600 flex flex-col gap-3 text-sm">
        <div className="py-2 px-4 rounded-lg bg-stone-700">
          <p>Alpha</p>
        </div>
        <div className="py-2 px-4 rounded-lg bg-stone-700">
          <p>Bravo</p>
        </div>
        <div className="py-2 px-4 rounded-lg bg-stone-700">
          <p>Charlie</p>
        </div>
        <div className="py-2 px-4 rounded-lg bg-stone-700">
          <p>Delta</p>
        </div>
        <div className="py-2 px-4 rounded-lg bg-stone-700">
          <p>Echo</p>
        </div>
      </div>
      <div className="p-3 border-t border-stone-600 text-center mt-auto">
        <h2>Configurações</h2>
      </div>
    </div>
  )
}

export default Sidebar
