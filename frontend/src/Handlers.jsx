export const checkout = async (e, cart) => {
  e.preventDefault();
  const res = await fetch("http://localhost:5000/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart }),
  });
  const data = await res.json();
  window.location.href = data.url; // Redirect to Mercado Pago
};


