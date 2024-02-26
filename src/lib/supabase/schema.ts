import { pgTable, uuid, text, decimal, integer, timestamp } from "drizzle-orm/pg-core";

export const product = pgTable("product", {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    name: text("name"),
    description: text("description"),
    price: decimal("price", { precision: 10, scale: 2 }), 
    quantity: integer("quantity"),
    image: text("image"), 
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
});
