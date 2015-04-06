# Schema Information

## sports
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, primary key
name        | string    | not null
title       | string    | not null

## positions (may not be necessary)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
sport       | integer   | not null, foreign key

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
user_id     | integer   | not null, foreign key (references users)
player_id   | integer   | not null, foreign key (references users)
sport_id    | integer   | not null, foreign key (references sports)
complete    | boolean   | not null, default: false

## games
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not_null, foreign key (references users)
sport_id    | integer   | not null, foreign key (references sports)
datetime    | datetime  | not null
zipcode     | integer   | not null
status      | string    |

## zipcodes (where a player can play, may not be necessary)

Not sure of best way set up schema. Players table may not be necessary, assigning
roles may be a better approach so that users can have dual functionality, both a
user looking for a player and as a player.


## players
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not_null
last_name       | string    | not_null
email           | string    | not null, unique
zipcode         | integer   | not null
elite_player    | boolean   | not null, default: false
sport_id        | integer   | not null, foreign key (references sports)

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
player          | boolean   | not null, default: false
elite_player    | boolean   | not null, default: false
sport_id        | integer   | not null, foreign key (references sports)

