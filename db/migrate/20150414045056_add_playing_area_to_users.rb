class AddPlayingAreaToUsers < ActiveRecord::Migration
  def change
    add_column :users, :playing_area, :string
  end
end
