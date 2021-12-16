import { createServer, Model } from "miragejs";

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: "Bonus por performance",
					type: "deposit",
					category: "Salário",
					amount: 1000,
					createdAt: new Date("2021-11-10 09:00:00"),
				},
				{
					id: 2,
					title: "Conta de Luz",
					type: "withdraw",
					category: "Casa",
					amount: 250,
					createdAt: new Date("2021-11-11 09:00:00"),
				},
			],
		});
	},

	routes() {
		this.namespace = "api";

		this.get("/transactions", () => {
			return this.schema.all("transaction");
		});

		this.post("/transactions", (schema, request) => {
			const data = JSON.parse(request.requestBody);
			const createdAt = new Date();
			return schema.create("transaction", { ...data, createdAt });
		});
	},
});
