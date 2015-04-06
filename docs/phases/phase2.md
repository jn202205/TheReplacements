# Phase 2: Api and backbone views

## Rails
### Models
* sport
* position

### Controllers
* Api::SportsController(:index, :show)
* Api::PositionsController

### Views
* users/show.json.jbuilder

## Backbone
### Models
* Player (parses nested 'sports' association)
  * players are users
* Sport (parses nested 'positions' assoction)
* Position

### Collections
* Players
* Sports
* Positions

### Views
* layout/dashboard.js (main page that wil hold many subvies)
  * Subviews
    1. layout/welcomeView
    2. layout/quickStart
    3. sports/sideBarView
    4. sports/popularIndex
    5. sports/indexItemView
    6. players/index
    7. players/indexItem

* players/profile
  * Subviews
    * postions/playerPositions
    * positions/show

## Gems/Libraries
