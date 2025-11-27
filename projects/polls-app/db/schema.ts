import {
  pgTable,
  serial,
  varchar,
  integer,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
});

export const polls = pgTable("polls", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  created_by: integer("created_by").references(() => users.id),
  expires_at: timestamp("expires_at"),
  created_at: timestamp("created_at").defaultNow(),
});

export const options = pgTable("options", {
  id: serial("id").primaryKey(),
  poll_id: integer("poll_id").references(() => polls.id),
  text: varchar("text", { length: 255 }).notNull(),
  votes_count: integer("votes_count").default(0),
});

export const votes = pgTable("votes", {
  id: serial("id").primaryKey(),
  poll_id: integer("poll_id").references(() => polls.id),
  option_id: integer("option_id").references(() => options.id),
  user_id: integer("user_id").references(() => users.id),
  created_at: timestamp("created_at").defaultNow(),
});
