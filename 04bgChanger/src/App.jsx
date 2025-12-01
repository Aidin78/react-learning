import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive');


  return (
    <div className="w-full h-screen duration-200 bg-black" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl border-2 border-white">
          <button onClick={() => setColor('var(--color-amber-500)')} className="cursor-pointer outline-none w-5 h-5 rounded-full text-black shadow-lg bg-amber-500"></button>
          <button onClick={() => setColor('var(--color-slate-700)')} className="cursor-pointer outline-none w-5 h-5 rounded-full text-black shadow-lg bg-slate-700"></button>
          <button onClick={() => setColor('var(--color-emerald-800)')} className="cursor-pointer outline-none w-5 h-5 rounded-full text-black shadow-lg bg-emerald-800"></button>
          <button onClick={() => setColor('var(--color-red-800)')} className="cursor-pointer outline-none w-5 h-5 rounded-full text-black shadow-lg bg-red-800"></button>
          <button onClick={() => setColor('var(--color-pink-600)')} className="cursor-pointer outline-none w-5 h-5 rounded-full text-black shadow-lg bg-pink-600"></button>
          <button onClick={() => setColor('var(--color-emerald-500)')} className="cursor-pointer outline-none w-5 h-5 rounded-full text-black shadow-lg bg-emerald-500"></button>
          <button onClick={() => setColor('var(--color-purple-600)')} className="cursor-pointer outline-none w-5 h-5 rounded-full text-black shadow-lg bg-purple-600"></button>
        </div>
      </div>
    </div>
  )
}

export default App
