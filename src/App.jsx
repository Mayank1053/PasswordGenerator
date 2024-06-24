import React, { useState } from "react";
import {
  EyeIcon,
  EyeOffIcon,
  ClipboardIcon,
  RefreshCwIcon,
} from "lucide-react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const passwordGenerator = () => {
    let charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (charset === "") {
      alert("Please select at least one character type");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard");
    });
  };

  const handleReset = () => {
    setPassword("");
    setLength(12);
    setUppercase(true);
    setLowercase(true);
    setNumbers(true);
    setSymbols(false);
    setShowPassword(false);
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Password Generator
      </h1>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="length"
            className="block text-sm font-medium text-gray-700"
          >
            Password Length: {length}
          </label>
          <input
            type="range"
            id="length"
            min="6"
            max="30"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
              className="form-checkbox"
            />
            <span>Uppercase</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
              className="form-checkbox"
            />
            <span>Lowercase</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
              className="form-checkbox"
            />
            <span>Numbers</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
              className="form-checkbox"
            />
            <span>Symbols</span>
          </label>
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            readOnly
            className="w-full pr-10 py-2 px-2 border rounded-md"
            placeholder="Generated password"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOffIcon className="h-5 w-5 text-gray-400" />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={passwordGenerator}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Generate
          </button>
          <button
            onClick={handleCopy}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            <ClipboardIcon className="h-5 w-5" />
          </button>
          <button
            onClick={handleReset}
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition duration-200"
          >
            <RefreshCwIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
