json.extract! @user, :id, :fname, :lname, :email, :elite, :img_url, :experience, :playing_area, :created_at, :updated_at

json.sports @user.sports do |sport|
  json.extract! sport, :id, :name, :created_at, :updated_at
end

json.games @user.games do |game|
  json.extract! game, :id, :sport_id, :user_id, :game_datetime, :lat, :lng, :address, :details, :complete, :created_at, :updated_at
end
