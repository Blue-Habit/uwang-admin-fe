export function shortenId(id: string): string {
  const digits = id.replace(/[^0-9]/g, ''); 
  return digits.substring(0, 8); 
}


