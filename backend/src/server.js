import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { products } from "./products.js";
import { MercadoPagoConfig, Preference } from "mercadopago";

dotenv.config();

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
  options: { timeout: 5000 },
});

const preference = new Preference(client);

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  try {
    const { cart } = req.body;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    const result = await preference.create({
      body: {
        items: cart.map(item => ({
          title: item.name,
          quantity: Number(item.quantity),
          unit_price: Number(item.price),
          currency_id: "ARS",
        })),
        redirect_urls: {
          success: `${process.env.CLIENT_URL}/success`,
          failure: `${process.env.CLIENT_URL}/failure`,
          pending: `${process.env.CLIENT_URL}/pending`,
        },
      },
    });

    // Send the checkout URL back to frontend
    res.json({ url: result.init_point });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create Mercado Pago preference" });
  }
});




app.get("/", (req, res) => {
  res.send("Server working correctly");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id))
  if(product) {
    res.json(product)
  } else {
    res.status(404).json({ message:"Product not found" })
  }
})

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});