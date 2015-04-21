class RemovePlayerIdFromGames < ActiveRecord::Migration
  def up
    remove_column :games, :player_id, :integer
  end
end
