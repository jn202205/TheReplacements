class CreatePositions < ActiveRecord::Migration
  def change
    create_table :positions do |t|
      t.string :title, null: false
      t.references :sport,null: false, index: true

      t.timestamps null: false
    end
    add_index :positions, :title
    add_foreign_key :positions, :sports
  end
end
