class ChangeDefaultEliteStatus < ActiveRecord::Migration
  def change
    change_column_default :users, :elite, false
  end
end
