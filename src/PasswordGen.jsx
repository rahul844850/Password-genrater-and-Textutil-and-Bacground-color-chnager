import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
    const [length, setLength] = useState(5)
    const [number, setNumber] = useState('')
    const [character, setCharacter] = useState('')
    const [password, setPassword] = useState('')

    // useref--------
    const passwordRef = useRef(null)

    const passwordGenrater = useCallback(() => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (number) {
            str += "0123456789"
        }
        if (character) {
            str += '!@#$%^&*_'
        }

        for (let i = 0; i <= length; i++) {

            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char)
        }
        setPassword(pass)

    }, [length, number, character,])





    //    copy button----------

    const copy = useCallback(() => {
        window.navigator.clipboard.writeText(password)
        passwordRef.current?.select();
    }, [password])

    useEffect(() => {
        passwordGenrater()

    }, [number, length, character,]);

    return (

        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <h1 className='text-white text-center my-3'>Password generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                    type="text"
                    value={password}
                    className="outline-none w-full py-1 px-3"
                    placeholder="Password"
                    readOnly
                    ref={passwordRef}
                />
                <button
                    onClick={copy}
                    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                >copy</button>

            </div>
            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className='cursor-pointer'
                        onChange={(e) => { setLength(e.target.value) }}
                    />
                    <label>Length: {length}</label>
                </div>

                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={number}
                        id="numberInput"
                        onChange={() => {
                            setNumber((prev) => !prev);
                        }}
                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>

                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        defaultChecked={character}
                        id="characterInput"
                        onChange={() => {
                            setCharacter((prev) => !prev)
                        }}
                    />
                    <label htmlFor="characterInput">Characters</label>
                </div>
            </div>
        </div>

    )
}

export default App