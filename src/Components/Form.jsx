import React, {useState} from "react";


const Form = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name"/>
        <label htmlFor="email">Email</label>
        <input type="text" id="email"/>
      </form>
    </div>
  );
};

export default Form;
