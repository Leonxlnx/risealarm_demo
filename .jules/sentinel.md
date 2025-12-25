## 2024-05-23 - Hardcoded Secrets in Frontend Code
**Vulnerability:** Found hardcoded Shopify Storefront Access Token and Domain in `lib/shopify.ts`.
**Learning:** Even though Storefront tokens are technically "public" (exposed in client code), hardcoding them makes rotation difficult and risks exposing them in public repositories if the code is shared. It also complicates environment management (dev vs prod).
**Prevention:** Always use environment variables (e.g., `VITE_` prefix for Vite apps) and validate their presence at runtime. Ensure `.env` is git-ignored.
