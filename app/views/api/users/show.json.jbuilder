json.extract! @user, :id, :fname, :lname, :email, :elite, :img_url, :experience, :playing_area, :created_at, :updated_at

json.sports @user.sports do |sport|
  json.extract! sport, :id, :name, :created_at, :updated_at
end
