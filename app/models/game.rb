# == Schema Information
#
# Table name: games
#
#  id            :integer          not null, primary key
#  sport_id      :integer          not null
#  user_id       :integer          not null
#  game_datetime :datetime         not null
#  lat           :float            not null
#  lng           :float            not null
#  details       :text
#  complete      :boolean          default(FALSE), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Game < ActiveRecord::Base
  validates_presence_of :game_datetime, :lat, :lng, :sport_id, :user_id
  belongs_to :user
  belongs_to :sport
end
