# Schema Information

## sports
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
player_id     | integer   | not null, primary key
name        | string    | not null
title       | string    | not null

## positions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
sport_id    | integer   | not null, foreign key
player_id   | integer   | not null, foreign key

## player_ratings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
player_id   | integer   | not null, foreign key (references users)
comment     | text      |
rating      | integer   | not null

## pairings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
captain_id  | integer   | not null, foreign key (references users)
player_id   | integer   | not null, foreign key (references users)
sport_id    | integer   | not null, foreign key (references sports)
status      | string    | { approved, pending, rejected }

## games
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not_null, foreign key (references users)
sport_id    | integer   | not null, foreign key (references sports)
datetime    | datetime  | not null
zipcode     | integer   | not null
complete    | boolean   | not null, default: false

## zipcodes (where a player can play, may not be necessary)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not_null
last_name       | string    | not_null
email           | string    | not null, unique
zipcode         | integer   | not null
password_digest | string    | not null
session_token   | string    | not null, unique
captain_id      | integer   | not null, foreign key (references sports)
player_id       | integer   | not null, foreign key (references sports)
elite_player    | boolean   | not null, default: false

