import { type Config } from "drizzle-kit";

import { env } from "rebe/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["rebecca_*"],
} satisfies Config;
