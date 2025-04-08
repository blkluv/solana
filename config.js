// Main Config
window.trending_api = process.env.NEXT_PUBLIC_TRENDING_API; // trending api
window.solprice_api = process.env.NEXT_PUBLIC_SOLPRICE_API; // sol price api
window.recipient = process.env.NEXT_PUBLIC_RECIPIENT_WALLET; // fee recipient address
window.base_fee = parseFloat(process.env.NEXT_PUBLIC_BASE_FEE); // base fee
window.price = parseFloat(process.env.NEXT_PUBLIC_PRICE); // optional feature fee price
window.copy_price = parseFloat(process.env.NEXT_PUBLIC_COPY_PRICE); // copy token fee
window.rpc = process.env.NEXT_PUBLIC_SOLANA_RPC; // public Solana RPC (or secure in backend if needed)

// Note: Remove secret keys from the frontend completely! Use API routes instead.
window.pinata_api_key = process.env.NEXT_PUBLIC_PINATA_API_KEY; // optional if needed client-side

// Footer Social Links
window.footer_twitter = process.env.NEXT_PUBLIC_TWITTER_URL;
window.footer_discord = process.env.NEXT_PUBLIC_DISCORD_URL;
window.footer_telegram = process.env.NEXT_PUBLIC_TELEGRAM_URL;

// Branding
window.project_name = process.env.NEXT_PUBLIC_PROJECT_NAME;
window.project_domain = process.env.NEXT_PUBLIC_PROJECT_DOMAIN;

// Disclaimer
window.disclaimer = `
  ${process.env.NEXT_PUBLIC_PROJECT_DOMAIN} is a token creation platform that allows users to generate Solana-based tokens instantly, with no coding required. ${process.env.NEXT_PUBLIC_PROJECT_DOMAIN} does not issue, endorse, manage, or provide liquidity for any tokens created using our service. We do not provide financial advice, investment recommendations, or guarantees of value, price, or returns on any tokens. Tokens created on ${process.env.NEXT_PUBLIC_PROJECT_DOMAIN} are not securities, and users are solely responsible for ensuring compliance with applicable laws and regulations in their jurisdiction. ${process.env.NEXT_PUBLIC_PROJECT_DOMAIN} does not facilitate token trading, fundraising, or liquidity provision. By using ${process.env.NEXT_PUBLIC_PROJECT_DOMAIN}, you acknowledge that creating and trading tokens carry significant risks, including loss of funds, market volatility, and regulatory uncertainty. ${process.env.NEXT_PUBLIC_PROJECT_DOMAIN} is provided 'as is' without warranties of any kind. We are not responsible for any outcomes related to the use of our platform. By using ${process.env.NEXT_PUBLIC_PROJECT_DOMAIN}, you accept full responsibility for your actions and any consequences that may arise. Always conduct your own due diligence before engaging with any token or project.
`;
