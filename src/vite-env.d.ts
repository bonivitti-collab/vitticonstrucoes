/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Web3Forms public access key (Lista VIP Verta). */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  /** Google Analytics 4 measurement ID (G-XXXXXXXXXX). */
  readonly VITE_GA_ID?: string;
  /** Meta Pixel ID (numeric). */
  readonly VITE_META_PIXEL_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
