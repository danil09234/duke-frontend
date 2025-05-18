ALTER TABLE "user_message_limits" ADD COLUMN "email" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user_messages" DROP COLUMN "email";