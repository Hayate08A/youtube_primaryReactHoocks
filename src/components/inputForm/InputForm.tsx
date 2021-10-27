import React, { useState } from 'react';

type TName = {
  first: string;
  last: string;
};

export const InputForm: React.VFC = () => {
  const [name, setName] = useState<TName>({ first: '', last: '' });
  return (
    <div>
      <input />
      <input />
    </div>
  );
};

export default InputForm;
