CREATE TABLE "user_message_limits" (
	"user_id" uuid PRIMARY KEY NOT NULL,
	"limit" integer DEFAULT 15 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_messages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"content" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
