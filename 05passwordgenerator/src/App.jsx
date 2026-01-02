import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "", str = "ABCDEFGHLMNOPQRSTUVWXYZabcdefghlmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();

  }

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className='bg-gray-800 w-full h-screen flex items-center justify-center'>
        <div className='w-full max-w-xl mx-auto shadow-md rounded-lg p-8 text-white'>
          <h1 className='text-white text-center mb-5'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" value={password} className='outlin-none text-black bg-white w-full py-1 px-3 text-sm h-9' placeholder='Password' ref={passwordRef} readOnly />
            <button className='bg-blue-700 px-4 text' onClick={copyPasswordToClipboard}>copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className="flex item-center gap-x-1">
              <input className='cursor-pointer' type="range" name="length" id="length" min={6} max={40} value={length}
                onChange={(e) => setLength(e.target.value)} />
              <label htmlFor="length">Length : {length}</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input type="checkbox" name="number" id="" defaultChecked={numberAllowed} onChange={() => { setNumberAllowed((prev) => !prev) }} />
              <label htmlFor="number">Numbers</label>
            </div>
            <div className="flex item-center gap-x-1">
              <input type="checkbox" name="number" id="" defaultChecked={charAllowed} onChange={() => { setCharAllowed((prev) => !prev) }} />
              <label htmlFor="number">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
