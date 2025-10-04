
import { relations } from "drizzle-orm"
import { integer } from "drizzle-orm/gel-core";
import * as pg from "drizzle-orm/pg-core"

// Tabelas

export const user = pg.pgTable("user", {
  id:  pg.text("id").primaryKey(),
  name:  pg.text("name").notNull(),
  email:  pg.text("email").notNull().unique(),
  emailVerified:  pg.boolean("email_verified").default(false).notNull(),
  image:  pg.text("image"),
  createdAt:  pg.timestamp("created_at").defaultNow().notNull(),
  id_occupation: pg.text("occupation"),
  updatedAt:  pg.timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
 birthday: pg.text()
});

export const session =  pg.pgTable("session", {
  id:  pg.text("id").primaryKey(),
  expiresAt:  pg.timestamp("expires_at").notNull(),
  token:  pg.text("token").notNull().unique(),
  createdAt:  pg.timestamp("created_at").defaultNow().notNull(),
  updatedAt:  pg.timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  ipAddress:  pg.text("ip_address"),
  userAgent:  pg.text("user_agent"),
  userId:  pg.text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account =  pg.pgTable("account", {
  id:  pg.text("id").primaryKey(),
  accountId:  pg.text("account_id").notNull(),
  providerId:  pg.text("provider_id").notNull(),
  userId:  pg.text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken:  pg.text("access_token"),
  refreshToken:  pg.text("refresh_token"),
  idToken:  pg.text("id_token"),
  accessTokenExpiresAt:  pg.timestamp("access_token_expires_at"),
  refreshTokenExpiresAt:  pg.timestamp("refresh_token_expires_at"),
  scope:  pg.text("scope"),
  password:  pg.text("password"),
  createdAt:  pg.timestamp("created_at").defaultNow().notNull(),
  updatedAt:  pg.timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const verification =  pg.pgTable("verification", {
  id:  pg.text("id").primaryKey(),
  identifier:  pg.text("identifier").notNull(),
  value: pg.text("value").notNull(),
  expiresAt:  pg.timestamp("expires_at").notNull(),
  createdAt:  pg.timestamp("created_at").defaultNow().notNull(),
  updatedAt:  pg.timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const occupation = pg.pgTable('occupation',{
    id_occupation: pg.integer().primaryKey(),
    ds_occupation: pg.varchar({length: 200}).notNull()
})

export const position = pg.pgTable('position', {
    id_position: pg.integer().primaryKey(),
    ds_position: pg.varchar({length: 200}).notNull()
})

export const analysis = pg.pgTable('analysis',{
    id_analysis: pg.integer().primaryKey(),
    detected_objects: pg.json().notNull(),
    dt_creation: pg.timestamp(),
    id_user: pg.text().references(() => user.id)
})

export const comments = pg.pgTable('comment', {
    id_comment: pg.integer().primaryKey(),
    id_user: pg.text().references(() => user.id),
    comment: pg.text().notNull(),
    date: pg.timestamp()
})

export const form = pg.pgTable('form', {
    id_form: pg.integer().primaryKey(),
    id_user: pg.text().references(() => user.id),
    facility: pg.integer().notNull(),
    usability: pg.integer().notNull(),
    confidence: pg.integer().notNull(),
    loyalty: pg.integer().notNull(),
    appearence: pg.integer().notNull(),
    date: pg.timestamp()
})

export const visitForIP = pg.pgTable('visit', {
    id: pg.integer().primaryKey(),
    ip: pg.varchar({length: 45}),
    data: pg.date()
})

// Relacionamentos
export const usersRelations = relations(user, ({one, many}) => ({
    occupation: one(occupation, {
        fields: [user.id_occupation],
        references: [occupation.id_occupation]
    }),
    analysis: many(analysis),
    comments:many(comments),
}))

export const analysisRelations = relations(analysis, ({one, many}) => ({
    user: one(user),
}))

export const commentsRelations = relations(comments, ({one, many}) => ({
    user: one(user),
}))

export const formRelations = relations(form, ({one, many}) => ({

    user: one(user),

}))



export const schema = { user, session, account, verification}