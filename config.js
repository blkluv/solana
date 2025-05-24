// lib/config.ts (for example)
export const config = {
  trending_api: process.env.NEXT_PUBLIC_TRENDING_API,
  solprice_api: process.env.NEXT_PUBLIC_SOLPRICE_API,
  recipient: process.env.NEXT_PUBLIC_RECIPIENT_WALLET,
  base_fee: parseFloat(process.env.NEXT_PUBLIC_BASE_FEE || "0"),
  price: parseFloat(process.env.NEXT_PUBLIC_PRICE || "0"),
  copy_price: parseFloat(process.env.NEXT_PUBLIC_COPY_PRICE || "0"),
  rpc: process.env.NEXT_PUBLIC_SOLANA_RPC,
  pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
  footer_twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
  footer_discord: process.env.NEXT_PUBLIC_DISCORD_URL,
  footer_telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL,
  project_name: "MEMECO.FUN",
  project_domain: "memeco.fun",
  disclaimer: (domain = process.env.NEXT_PUBLIC_PROJECT_DOMAIN || "memeco.fun") => `
    ${domain} is a token creation platform...`
};
