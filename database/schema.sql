set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."restaurants" (
  "databaseId"       serial,
  "id"               text    not null,
  "alias"            text    not null,
  "url"              text    not null,
  "imageUrl"         text    not null,
  "name"             text    not null,
  "address1"         text    not null,
  "rating"           float   not null,
  "reviewCount"      integer not null,
  primary key ("databaseId")
)
