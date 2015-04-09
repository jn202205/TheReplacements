class AddUniqConstraintOnPlayerSports < ActiveRecord::Migration
  def change
    add_index :player_sports, [ :player_id, :sport_id ], unique: true, name: 'index_on_player_id_and_sport_id'
  end
end
