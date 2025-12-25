
// import React, { useState } from 'react';
// import './PasswordGenerator.css';

// function PasswordGenerator() {
//   const [strength, setStrength] = useState('');
//   const [length, setLength] = useState(8);
//   const [customText, setCustomText] = useState('');
//   const [password, setPassword] = useState('');

//   const generatePassword = () => {
//     const chars = {
//       strong: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()',
//       medium: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
//       low: 'abcdefghijklmnopqrstuvwxyz0123456789',
//     };

//     let charset = chars[strength] || '';
//     let generated = '';
//     for (let i = 0; i < length - customText.length; i++) {
//       generated += charset.charAt(Math.floor(Math.random() * charset.length));
//     }

//     const insertAt = Math.floor(Math.random() * (generated.length + 1));
//     const finalPassword =
//       generated.slice(0, insertAt) + customText + generated.slice(insertAt);

//     setPassword(finalPassword);
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(password);
//     alert('Password copied!');
//   };

//   return (
//     <div className="password-generator">
//       <h2>Password Generator</h2>
//       <div className="checkbox-group">
//         <label><input type="checkbox" checked={strength === 'strong'} onChange={() => setStrength('strong')} /> Strong</label>
//         <label><input type="checkbox" checked={strength === 'medium'} onChange={() => setStrength('medium')} /> Medium</label>
//         <label><input type="checkbox" checked={strength === 'low'} onChange={() => setStrength('low')} /> Low</label>
//       </div>
//       <div className="range-input">
//         <label>Password Length: {length}</label>
//         <input type="range" min="0" max="15" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
//       </div>
//       <div className="custom-input">
//         <label>Custom Text in Password:</label>
//         <input type="text" value={customText} onChange={(e) => setCustomText(e.target.value)} placeholder="Name or number" />
//       </div>
//       <button onClick={generatePassword}>Generate Password</button>
//       {password && (
//         <div className="generated-password">
//           <span>{password}</span>
//           <button onClick={copyToClipboard}>📋</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PasswordGenerator;








// // components/PasswordGenerator.js
// import React, { useState } from 'react';
// import './PasswordGenerator.css';
// import { FaCopy } from 'react-icons/fa';

// function PasswordGenerator() {
//   const [length, setLength] = useState(10);
//   const [strength, setStrength] = useState('strong');
//   const [customText, setCustomText] = useState('');
//   const [password, setPassword] = useState('');
//   const [charType, setCharType] = useState('alphanumericSpecial');

//   const charsetOptions = {
//     uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//     lowercase: 'abcdefghijklmnopqrstuvwxyz',
//     numbers: '0123456789',
//     special: '!@#$%^&*()_+[]{}<>?/|',
//     alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
//     alphanumericSpecial: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?/|',
//     alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
//   };

//   const generatePassword = () => {
//     let chars = charsetOptions[charType] || charsetOptions.alphanumericSpecial;
//     let newPassword = '';
//     while (newPassword.length < length - customText.length) {
//       newPassword += chars[Math.floor(Math.random() * chars.length)];
//     }
//     setPassword(newPassword + customText);
//   };

//   const copyPassword = () => {
//     navigator.clipboard.writeText(password);
//   };

//   return (
//     <div className="password-generator">
//       <h2>Password Generator</h2>
//       <div className="checkbox-group">
//         <label><input type="radio" name="strength" value="strong" checked={strength === 'strong'} onChange={(e) => setStrength(e.target.value)} /> Strong</label>
//         <label><input type="radio" name="strength" value="medium" checked={strength === 'medium'} onChange={(e) => setStrength(e.target.value)} /> Medium</label>
//         <label><input type="radio" name="strength" value="low" checked={strength === 'low'} onChange={(e) => setStrength(e.target.value)} /> Low</label>
//       </div>

//       <div className="char-buttons">
//         <button onClick={() => setCharType('uppercase')}>Uppercase</button>
//         <button onClick={() => setCharType('lowercase')}>Lowercase</button>
//         <button onClick={() => setCharType('numbers')}>Numbers</button>
//         <button onClick={() => setCharType('special')}>Special</button>
//         <button onClick={() => setCharType('alphanumeric')}>AlphaNumeric</button>
//         <button onClick={() => setCharType('alphanumericSpecial')}>AlphaNum+Special</button>
//         <button onClick={() => setCharType('alpha')}>Alpha (A-Z, a-z)</button>
//       </div>

//       <div className="range-input">
//         <label>Password Length: {length}</label>
//         <input type="range" min="0" max="15" value={length} onChange={(e) => setLength(Number(e.target.value))} />
//       </div>

//       <div className="custom-input">
//         <label>Custom Text:</label>
//         <input type="text" placeholder="Include text" value={customText} onChange={(e) => setCustomText(e.target.value)} />
//       </div>

//       <button onClick={generatePassword}>Generate Password</button>
//       {password && (
//         <div className="generated-password">
//           <span>{password}</span>
//           <FaCopy onClick={copyPassword} className="copy-icon" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default PasswordGenerator;






import React, { useState } from 'react';
import './PasswordGenerator.css';
import { FaCopy } from 'react-icons/fa';

function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [customText, setCustomText] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    special: false,
  });

  const charsetOptions = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    special: '!@#$%^&*()_+[]{}<>?/|',
  };

  const handleOptionChange = (option) => {
    setSelectedOptions({ ...selectedOptions, [option]: !selectedOptions[option] });
  };

  const generatePassword = () => {
    let chars = '';
    for (let key in selectedOptions) {
      if (selectedOptions[key]) chars += charsetOptions[key];
    }
    if (chars === '') return alert('Select at least one character type');

    let newPassword = '';
    while (newPassword.length < length - customText.length) {
      newPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(newPassword + customText);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="password-generator">
      <h2>Password Generator</h2>

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.uppercase}
            onChange={() => handleOptionChange('uppercase')}
          /> Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.lowercase}
            onChange={() => handleOptionChange('lowercase')}
          /> Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.numbers}
            onChange={() => handleOptionChange('numbers')}
          /> Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedOptions.special}
            onChange={() => handleOptionChange('special')}
          /> Special Characters
        </label>
      </div>

      <div className="range-input">
        <label>Password Length: {length}</label>
        <input
          type="range"
          min="0"
          max="15"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div className="custom-input">
        <label>Custom Text:</label>
        <input
          type="text"
          placeholder="Include text"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
        />
      </div>

      <button onClick={generatePassword}>Generate Password</button>

      {password && (
        <div className="generated-password">
          <span>{password}</span>
          <FaCopy onClick={copyPassword} className="copy-icon" />
        </div>
      )}
    </div>
  );
}

export default PasswordGenerator;
