class CreatePlayerSports < ActiveRecord::Migration
  def change
    create_table :player_sports do |t|
      t.integer :player_id, null: false
      t.integer :sport_id, null: false

      t.timestamps null: false
    end
    add_index :player_sports, :player_id, name: "index_player_sports_on_player_id"
    add_index :player_sports, :sport_id, name: "index_player_sports_on_sport_id"
  end
end
