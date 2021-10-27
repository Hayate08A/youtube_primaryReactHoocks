import React, { useState } from 'react';

export const InputForm: React.VFC = () => {
  const [firstName, setFistName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  return (
    <div>
      <input value={firstName} onChange={(e) => setFistName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <p>
        {firstName}
        {lastName}
      </p>
    </div>
  );
};

export default InputForm;
