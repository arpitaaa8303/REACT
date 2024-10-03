import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //use of useref hook for testing purposes
  const passwordRef = useRef(null);

  // useEffect(()=>{
  //   console.log("passwordref value changed")
  //   console.log(passwordref.current.value)
  // },[passwordref])

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if(name === 'length'){
  //     setLength(parseInt(value))
  //   }else if(name === 'number'){
  //     setNumberAllowed(value === 'true')
  //   }else if(name === 'char'){
  //     setCharAllowed(value === 'true')
  //   }
  //   passwordref.current.value = password
  // }

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(password);
  //   alert("Password copied to clipboard!");
  // }

  // const handleReset = () => {
  //   setLength(8)
  //   setNumberAllowed(false)
  //   setCharAllowed(false)
  //   setPassword("")
  //   passwordref.current.value = ""
  // }

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-orange-600 text-center my-3">
          {" "}
          password Generator
        </h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-1 px-3 shrink-0 "
          >
            copy
          </button>
        </div>
        <div className="flex  text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              min={8}
              max={100}
              className="cursor-pointer "
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => {
                setNumberAllowed(!numberAllowed);
              }}
              className="cursor-pointer"
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => {
                setCharAllowed(!charAllowed);
              }}
              className="cursor-pointer"
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
