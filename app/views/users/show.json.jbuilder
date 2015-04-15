json.extract! @user, :id, :fname, :lname, :email, :zipcode, :experience, :playing_area, :password_digest, :session_token, :captain_id, :player_id, :elite, :created_at, :updated_at

json.sports @user.sports do |sport|
  json.extract! sport, :name
end
