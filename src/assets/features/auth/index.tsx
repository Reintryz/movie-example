import React, { ChangeEvent, FormEvent, useState } from "react";

const Authentication = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center h-screen gap-2"
    >
      <label>Authentication</label>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        className="border border-gray-400 rounded-sm"
      />
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        type="password"
        className="border border-gray-400 rounded sm"
      />
      <button
        type="submit"
        className='="bg to-black text-white rounded-sm py-1 px-5'
      >
        Login
      </button>
    </form>
  );
};

export default Authentication;
