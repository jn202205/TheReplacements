# == Schema Information
#
# Table name: matches
#
#  id         :integer          not null, primary key
#  player_id  :integer          not null
#  game_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Match < ActiveRecord::Base
  validates_presence_of :game_id, :player_id
  validates_uniqueness_of :player_id, scope: :game_id
  belongs_to :game
  belongs_to :player, class_name: 'User', foreign_key: :player_id
end
