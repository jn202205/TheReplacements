json.array!(@games) do |game|
  json.extract! game, :id, :sport_id, :user_id, :game_datetime, :lat, :lng, :details, :complete, :created_at, :updated_at
end
