class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fname, null: false, limit: 50
      t.string :lname, null: false, limit: 50
      t.string :email, null: false
      t.string :zipcode, null: false, limit: 5
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :captain_id
      t.integer :player_id
      t.boolean :elite, null: false, default: true

      t.timestamps null: false
    end

    add_index :users, :email, unique: true
    add_index :users, :zipcode
    add_index :users, :session_token, unique: true
    add_index :users, :password_digest
    add_index :users, :captain_id
    add_index :users, :player_id
  end
end
