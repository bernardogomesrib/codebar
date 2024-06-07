'use client';
import React, { useState, useEffect } from "react";

export default function BarcodeScanner() {
  const [barcode, setBarcode] = useState<string>("");

  useEffect(() => {
    function handleBarcodeInput(event: KeyboardEvent) {
      // Verifica se o caractere finalizador foi recebido
      if (event.key === "Enter") {
        // Caractere finalizador recebido, processa o código de barras
        //handleBarcodeScanned();apagando essa parte que não faz sentido pra ver se funciona sem apagar o código
      } else {
        // Adiciona o caractere ao código de barras
        setBarcode(prevBarcode => prevBarcode + event.key);
      }
    }

    // Adiciona o ouvinte de evento para capturar a entrada de teclado
    document.addEventListener("keydown", handleBarcodeInput);

    // Remove o ouvinte de evento ao desmontar o componente para evitar vazamentos de memória
    return () => {
      document.removeEventListener("keydown", handleBarcodeInput);
    };
  }, []);

  function handleBarcodeScanned() {
    // Lógica para lidar com o código de barras após ser digitalizado
    console.log("Código de barras digitalizado:", barcode);

    // Limpa o código de barras depois de ser processado
    setBarcode("");
  }

  return (
    <div>
      <h1>Leitor de Código de Barras</h1>
      <p>Código de Barras: {barcode}</p>
    </div>
  );
}
