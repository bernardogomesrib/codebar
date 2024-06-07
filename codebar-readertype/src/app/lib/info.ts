'use server';

import { Console } from "console";

export async function fetchProduct(ean:string) {
    const apiUrl = 'https://api.cosmos.bluesoft.com.br/gtins/' + ean;
    
    const headers = {
        'Accept': '*/*',
        'User-Agent': 'Cosmos-API-Request',
        'X-Cosmos-Token': '4EIba0HVH7TgrYTEahetvA'
  };
  
  const requestOptions = {
    method: 'GET',
    headers: headers
  };
  
  
  try {
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    //console.log(data)
    return data; // Retorna os dados diretamente
  } catch (error) {
    console.error('Erro:', error);
    throw new Error('Erro ao buscar produto'); // Lança um erro para tratamento posterior
  }
    
}