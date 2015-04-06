# Phase 1: User Authentication

## Rails
### Models
* User

### Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)

### Views
* users/new.html.erb
* users/password_reset.html.erb
* session/new.html.erb
* static_pages/root.html.erb
* layouts/_header.html.erb
* layouts/_footer.html.erb

## Backbone
### Models

### Collections

### Views
* user_prompt.js (not necessary, could maybe drive direcetion of sign up process)
* login_signup.js (subview to choose which page to go to)

## Gems/Libraries
  * devise
  * Backbone-on-rails (may not be needed yet)
  * bettor_errors
  * binding_of_caller
  * pry-rails
  * annotate
  * pg
