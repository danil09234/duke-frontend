import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import { migrate } from "drizzle-orm/postgres-js/migrator";

dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("🔴 no database URL");
}

const client = postgres(process.env.DATABASE_URL, { max: 1 });

const migrateDb = async () => {
  try {
    console.log("🟠 Migrating client");
    const schema = await import("../migrations/schema.js");
    const db = drizzle(client, { schema: schema.default });
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("🟢 Successfully Migrated");
    process.exit(0);
  } catch (error) {
    console.log("🔴 Error Migrating client", error);
    process.exit(1);
  }
};
migrateDb();
