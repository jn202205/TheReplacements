# == Schema Information
#
# Table name: player_sports
#
#  id         :integer          not null, primary key
#  player_id  :integer          not null
#  sport_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PlayerSport < ActiveRecord::Base
  belongs_to :player, class_name: 'User', foreign_key: :player_id
  belongs_to :sport
end
