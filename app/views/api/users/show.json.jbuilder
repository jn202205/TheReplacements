json.extract! @user, :id, :fname, :lname, :email, :zipcode, :elite, :img_url, :playing_area, :created_at, :updated_at

json.sports @user.sports do |sport|
  json.extract! sport, :id, :name, :created_at, :updated_at
end
