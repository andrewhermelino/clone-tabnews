import { useState, useRef, useEffect } from "react";

const link = {
  backgroundColor: "#D9D9D9",
  padding: 10,
  borderRadius: 6,
  color: "black",
  textDecoration: "none",
};

function Home() {
  return (
    <main style={{ fontFamily: "Arial", textAlign: "center" }}>
      <h1>Oieeee Gatouna!</h1>
      <p style={{ paddingBottom: 15 }}>
        Por acaso você é Európio, Telúrio, Amerício e Oxigênio? 😁
      </p>
      <a style={link} href="eutiamu">
        Não, por que?
      </a>
    </main>
  );
}

export default Home;
