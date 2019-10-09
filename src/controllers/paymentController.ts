export const chargeCard = async (request: any): Promise<any> => {
  const res = await fetch('https://stgapiprocessone.oneincsystems.com/api/CreditCard/Charge', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(request)
  });
  return await res.json();
}