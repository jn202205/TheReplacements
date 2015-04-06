# The Replacements

[Heroku link][heroku]

[heroku]: https://thereplacements.herokuapp.com/

## Minimum Viable Product
The Replacements is Task Rabbit style system for finding players for your recreational sports team. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Search for players
- [ ] Location based results
- [ ] Pick players/schedule pairings(task)
- [ ] Rate players after game
- [ ] Register as a player
- [ ] Show player's scheduled games
- [ ] Rate teams after game

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication/Registration ~ 1 day
Implement user authentication so users can sign up. This is just the basic user
authentication. Need model for users and controllers and rails views for both
new users and new sessions. Make a basic root page which will have basic info 
about the app and links to the user sign up and sign in pages. Users should be
able to sign up and sign in by the end of this phase.
[Details][phase-one]

### Phase 2: Setup Api and backbone integration ~ 2 days
Users should be redirected to their dashboard on successful sign up or log in.
Will need to initially seed data with users already signed up as players to be 
used in player search. Make sure all necessary data is available on the front end.
After this phase the player profiles should be viewable. Users should be able
be able to view player profiles and see which sports they play, positions for
each sport(if applicable), reviews, and brief profile(written by the player).

[Details][phase-two]

### Phase 3: Searching for players / posting games ~2-3 days
When a user needs to find a player they should be able to search for a player by
selecting which sport they need the player for.  When a user fills
out a form for acquiring a player they will give details including but not limited
to:
  * number of games (is it a double header, tournament, etc.)
  * skill / competitive level of league or game
  * any equipment the player needs to bring
  * position(s) they need filled
  * location and time
  * any other notes needed

Results should only include players who are available to play on the given day
and time and within the radius which the player has indicated they are willing
travel. Will need some sort of geolocation library for this. Should just be able
to do this based on zipcodes and a given radius. If time permits would like to
have players be able to draw out their playing area on map during registration.

[Details][phase-three]

### Phase 4: Selecting(hiring) players ~1 day
Need to implement the actaul scheduling once user and player agree on playing
together. The player should no longer show up in other users searches for that
time slot since they are already scheduled to play.

[Details][phase-four]

### Phase 5: Rating system ~2 days
After a player has game has been completed the user should rate the player based
on multiple categories inlcluding but not limited to:
  * timeliness
  * prepared (have necessary equipment? if necessary)
  * attitude (were they good sport / easy to get along with)
  * skill (were they as good as they claimed in bio? worse? better?)
  * likeliness to have them play again

These rating will be shown the on the player profile. Can also work this into a
way to sort players by highest ratings, maybe even by their rating in each
category.
Players should also be able to rate the users they play for. Categories will be
similar. Possible different ratings:
  * did you actually get to play
  * was the team as good/competitive as they claimed(this only applys in some cases)
  * how was the team attitude, was a good environment
  * likeliness to play on team again

[Details][phase-five]

### Phase 6: Registering to be a player ~2 days
Users should be able to find a link on thier dashboard to allow thiem to register
as player. Players will be able to fill in all information about their previous
experience or lack thereof for all sports they would like to participate in. May
also be wise to have new users agree to some sort of liability waiver. At least
in the initialize stages I will seed not have users adding sports to app. But it
is a possible feature so people can find players for other sports and games. Could
possibly have players choose to be 'up for whatever' checkbox.

[Details][phase-six]

### Phase 7: Polishing ~1 day
At this point the site would have all functionality that I feel it needs. Should
clean up all views and make sure styling is the same accross entire site. This is
when I would like to add some nice UX/UI extras. In this phase I also would like
to add a tutorial mode for new users that can be dismissed for single visit or
permanently.

[Details][phase-six]

### Phase 8: Bonus Features (TBD)

- [ ] draw playing area on map in player registration
- [ ] Player history - wins/losses, games played
- [ ] Payment system
- [ ] Admin page

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md

