// /lib/config.ts

export const CONFIG = {
  // Site
  siteUrl: 'https://vitticonstrucoes.com.br',
  siteName: 'Grupo Vitti',
  subtitle: 'Construção, Reforma & Tecnologia',
  
  // Produto Verta
  vertaUrl: 'https://verta.app.br',
  vertaName: 'Verta',
  vertaStatus: 'em breve',
  
  // Contatos
  whatsapp: '5522998434956',
  whatsappDisplay: '(22) 99843-4956',
  email: 'grupo.vitti@outlook.com',
  adminNotificationEmail: 'dbonivitti@gmail.com',
  
  // Redes sociais
  instagram: 'grupovitti',
  instagramUrl: 'https://instagram.com/grupovitti',
  instagramVerta: 'vertaapp',
  instagramVertaUrl: 'https://instagram.com/vertaapp',
  facebook: 'https://www.facebook.com/share/19X1g4ZCsm/?mibextid=wwXIfr',
  
  // Empresa
  cnpj: '67.936.883/0001-17',
  regiao: 'Região dos Lagos (RJ)',
  cidades: ['Cabo Frio', 'Búzios', 'Arraial do Cabo', 'São Pedro da Aldeia', 'Iguaba Grande', 'Rio das Ostras'],
  
  // Analytics (deixe vazio por enquanto)
  gaId: '',
  
  // Mensagens padrão
  whatsappMessage: 'Olá, vim pelo site do Grupo Vitti. Gostaria de um orçamento.',
} as const;

export function whatsappLink(message?: string): string {
  const msg = message || CONFIG.whatsappMessage;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
}
