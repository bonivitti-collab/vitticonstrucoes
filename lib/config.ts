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
  email: 'contato@vitticonstrucoes.com.br',
  // Observação: o e-mail do administrador que recebe os leads NÃO fica mais
  // no código público. Ele é configurado no painel da Web3Forms, vinculado
  // à chave VITE_WEB3FORMS_ACCESS_KEY (ver .env.example).
  
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
  
  // Integrações (valores injetados no build via variáveis de ambiente — ver .env.example)
  web3formsAccessKey: (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '13ebf8d7-c007-47c7-a671-4859290461b8').trim(),
  gaId: (import.meta.env.VITE_GA_ID ?? '').trim(),
  metaPixelId: (import.meta.env.VITE_META_PIXEL_ID ?? '').trim(),
  
  // Mensagens padrão
  whatsappMessage: 'Olá, vim pelo site do Grupo Vitti. Gostaria de um orçamento.',
} as const;

export function whatsappLink(message?: string): string {
  const msg = message || CONFIG.whatsappMessage;
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
}
