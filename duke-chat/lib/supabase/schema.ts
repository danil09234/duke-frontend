import { pgTable, text, timestamp, uuid, integer } from "drizzle-orm/pg-core";

export const user_messages = pgTable("user_messages", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  userId: uuid("user_id").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const user_message_limits = pgTable("user_message_limits", {
  userId: uuid("user_id").primaryKey().notNull(),
  email: text("email").notNull(),
  limit: integer("limit").default(15).notNull(),
});
