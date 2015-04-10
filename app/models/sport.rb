# == Schema Information
#
# Table name: sports
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Sport < ActiveRecord::Base

  SPORTS = ["Basketball", "Bowling", "Flag Football", "Soccer", "Softball", "Volleyball"]
  validates :name, presence: true, inclusion: { in: SPORTS }

  has_many :player_sports, dependent: :destroy
  has_many :players, through: :player_sports, source: :player
end
