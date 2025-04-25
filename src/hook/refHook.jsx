import React, { useRef } from "react";

const Reference = () => {
     // Accessing DOM Elements using ref
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username: usernameRef.current.value,
      password: passwordRef.current.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        id="username" 
        ref={usernameRef} 
        placeholder="Username"
      /> 
      <br />
      
      <input 
        type="password" 
        id="password" 
        ref={passwordRef} 
        placeholder="Password"
      /> 
      <br />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Reference;
