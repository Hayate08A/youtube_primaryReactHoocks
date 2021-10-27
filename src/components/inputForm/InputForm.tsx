import React, { useState } from 'react';

type TName = {
  first: string;
  last: string;
};

export const InputForm: React.VFC = () => {
  const [name, setName] = useState<TName>({ first: '', last: '' });
  return (
    <div>
      <input
        value={name.first}
        onChange={(e) =>
          setName((prevName) => ({
            first: e.target.value,
            last: prevName.last,
          }))
        }
      />
      <input
        value={name.last}
        onChange={(e) =>
          setName((prevName) => ({
            first: prevName.first,
            last: e.target.value,
          }))
        }
      />
      <p>
        {name.first}
        {name.last}
      </p>
    </div>
  );
};

export default InputForm;
