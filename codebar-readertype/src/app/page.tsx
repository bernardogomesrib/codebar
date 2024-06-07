'use client';
import { useState } from "react";
import useScanDetection, { ScanDetectionOptions } from "use-scan-detection";
import { fetchProduct } from "./lib/info";
import './lib/defi.css';

export default function Home() {
  const [barcodeScan, setBarcodeScan] = useState<string>("Não foi lido um código de barras");
  const [produto, setProduto] = useState<any>(null); // Alterado para um estado único

  const scanOptions: ScanDetectionOptions = {
    onComplete: async (barcode: any) => {
      setBarcodeScan(barcode);
      try {
        const resultado = await fetchProduct(barcode);
        console.log(resultado);
        setProduto(resultado); // Definindo o produto retornado
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    },
    minLength: 3,
  };

  useScanDetection(scanOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Código: {barcodeScan}</h1>
      <input type="number" name="codigo" id="barcode" value={barcodeScan} />
      {produto && (
        <div>
          <h2>Detalhes do Produto:</h2>
          <strong>Nome do produto:</strong>{produto.description} <br/>
          <strong>Código de barras:</strong>{produto.gtin} <br/>
          <strong>Ultima atualização:</strong>{produto.updated_at} <br/>
          <div><strong>Imagem:</strong>{produto.thumbnail?(<img className="imagem" src = {produto.thumbnail}/>):(<p>não ha imagem</p>)}</div>
        </div>
      )}
    </main>
  );
}
/**
 

          <ul>
            {Object.entries(produto).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value}
              </li>
            ))}
          </ul>
 */