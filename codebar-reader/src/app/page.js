'use client';
import Image from "next/image";
import { useState } from "react";

import useScanDetection from "use-scan-detection";
export default function Home() {
  
  const [barcodescan,setBarcodescan] = useState("Não foi lido um código de barras")
  
  useScanDetection({
    onComplete:setBarcodescan,
    minLength:3,
  })
  
  return (    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Código:{barcodescan}</h1>
    </main>
  );
}
