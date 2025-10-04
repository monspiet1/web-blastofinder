--> SQL DO BANCO QUE EU CRIEI, TALVEZ SIRVA PARA O SAMIH

CREATE TABLE "account" (
	"id" text PRIMARY KEY NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "analysis" (
	"id_analysis" integer PRIMARY KEY NOT NULL,
	"detected_objects" json NOT NULL,
	"dt_creation" timestamp,
	"id_user" uuid
);
--> statement-breakpoint
CREATE TABLE "comment" (
	"id_comment" integer PRIMARY KEY NOT NULL,
	"id_user" uuid,
	"comment" text NOT NULL,
	"date" timestamp
);
--> statement-breakpoint
CREATE TABLE "form" (
	"id_form" integer PRIMARY KEY NOT NULL,
	"id_user" uuid,
	"facility" integer NOT NULL,
	"usability" integer NOT NULL,
	"confidence" integer NOT NULL,
	"loyalty" integer NOT NULL,
	"appearence" integer NOT NULL,
	"date" timestamp
);
--> statement-breakpoint
CREATE TABLE "occupation" (
	"id_occupation" integer PRIMARY KEY NOT NULL,
	"ds_occupation" varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "position" (
	"id_position" integer PRIMARY KEY NOT NULL,
	"ds_position" varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" uuid PRIMARY KEY NOT NULL,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	CONSTRAINT "session_token_unique" UNIQUE("token")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"occupation" text NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY NOT NULL,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "visit" (
	"id" integer PRIMARY KEY NOT NULL,
	"ip" varchar(45),
	"data" date
);
--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "analysis" ADD CONSTRAINT "analysis_id_user_user_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comment" ADD CONSTRAINT "comment_id_user_user_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "form" ADD CONSTRAINT "form_id_user_user_id_fk" FOREIGN KEY ("id_user") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;