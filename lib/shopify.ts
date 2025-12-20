
import Client from 'shopify-buy';

// --- KONFIGURATION ---
const SHOPIFY_DOMAIN = 'rise-10115.myshopify.com'; 
const SHOPIFY_STOREFRONT_TOKEN = '48704be0544cb9591e10c70f8ba3c249';

// Initialisiere den Client
export const client = Client.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: SHOPIFY_STOREFRONT_TOKEN,
  apiVersion: '2024-01'
});

// Hilfsfunktion: Checkout erstellen
export const createCheckout = async () => {
  try {
    const checkout = await client.checkout.create();
    return checkout;
  } catch (e: any) {
    // Logging fix: Error Objekte lassen sich oft nicht stringify-en
    console.error("--- SHOPIFY ERROR START ---");
    console.error(e); 
    if (e.message) console.error("Message:", e.message);
    if (e.graphQLErrors) console.error("GraphQL Errors:", e.graphQLErrors);
    console.error("--- SHOPIFY ERROR END ---");
    
    // Check auf Permission Error
    if (e.message && (e.message.includes("checkoutCreate") || e.message.includes("access denied"))) {
        console.error("DIAGNOSE: Der Token hat keine Schreibrechte für Checkouts.");
        console.error("LÖSUNG: Im Shopify Admin unter 'Storefront API Integration' den Haken bei 'unauthenticated_write_checkouts' setzen.");
    }
    return null;
  }
};

// Hilfsfunktion: Produkt zum Checkout hinzufügen
export const addItemToCheckout = async (checkoutId: string, variantId: string, quantity: number) => {
  try {
    const lineItemsToAdd = [{ variantId, quantity }];
    return await client.checkout.addLineItems(checkoutId, lineItemsToAdd);
  } catch (e) {
    console.error("Shopify Add Item Error:", e);
    return null;
  }
};

// Hilfsfunktion: Produkt laden
export const fetchProductByHandle = async (handle: string) => {
  try {
    return await client.product.fetchByHandle(handle);
  } catch (e) {
    console.error("Shopify Product Error:", e);
    return null;
  }
};
