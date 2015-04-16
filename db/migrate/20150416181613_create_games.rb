class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :sport_id, null: false
      t.integer :user_id, null: false
      t.datetime :game_datetime, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.text :details
      t.boolean :complete, null: false, default: false

      t.timestamps null: false
    end
    add_index :games, [:lat, :lng]
    add_index :games, :sport_id
    add_index :games, :user_id
    add_index :games, :game_datetime
  end
end
