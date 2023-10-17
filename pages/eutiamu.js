import { useRef, useEffect } from "react";

function EuTiAmu() {
  const elementMensagemRef = useRef(null);

  const adicionarMensagem = (msg) => {
    if (!elementMensagemRef || !elementMensagemRef.current) {
      return;
    }
    elementMensagemRef.current.innerHTML += msg;
  };

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      adicionarMensagem(" muitu");
    }
    for (let i = 0; i < 100; i++) {
      adicionarMensagem(" muitu");
    }
    for (let i = 0; i < 1000; i++) {
      adicionarMensagem(" muitu");
    }
  }, []);

  return (
    <main style={{ textAlign: "center", fontFamily: "Arial" }}>
      <p style={{ fontSize: 80, lineHeight: 0 }}>Porque</p>
      <img
        style={{ textAlign: "center", width: "100%", maxWidth: 800 }}
        src="./img/euteamo.png"
        alt="eu te amo"
      />
      <p>
        muito muito muito muito muito muito muito muito muito muito muito
        <span ref={elementMensagemRef}></span> mesmu di verdadi 😍😘❤️😁🫶
      </p>
      <p style={{ marginTop: 30, marginBottom: 30 }}>
        <a href="./">Voltar</a>
      </p>
    </main>
  );
}

export default EuTiAmu;
