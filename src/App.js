import React, { useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    profession: "",
    photo: ""
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      name: form.name,
      age: form.age,
      profession: form.profession,
      photo: form.photo
    };
    setCards([...cards, newCard]);
    setForm({
      name: "",
      age: "",
      profession: "",
      photo: ""
    });
  };

  const handleDelete = (index) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Idade:
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Profissão:
          <input
            type="text"
            name="profession"
            value={form.profession}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Link da Foto:
          <input
            type="text"
            name="photo"
            value={form.photo}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Adicionar Card</button>
      </form>
      {cards.map((card, index) => (
        <div key={index} className="Card">
          <img src={card.photo} alt={card.name} />
          <div>
            <h2>{card.name}</h2>
            <p>{card.age} anos</p>
            <p>{card.profession}</p>
          </div>
          <button onClick={() => handleDelete(index)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default App;
