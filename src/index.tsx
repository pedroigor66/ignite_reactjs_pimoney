import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Website freelance",
          transactionType: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2022-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Rent",
          transactionType: "withdraw",
          category: "Housing",
          amount: 2000,
          createdAt: new Date("2022-02-14 12:00:00"),
        },
      ],
    });
  },

  routes() {
    // We are using 'api' in our routes
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
