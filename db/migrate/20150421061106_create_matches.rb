class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.integer :player_id, null: false
      t.integer :game_id, null: false

      t.timestamps null: false
    end
    add_index :matches, [:game_id, :player_id], unique: true, name: 'index_on_game_id_and_player_id'
  end
end
