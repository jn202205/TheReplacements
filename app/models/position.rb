# == Schema Information
#
# Table name: positions
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  sport_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Position < ActiveRecord::Base
  validates_presence_of :title, :sport_id

  belongs_to :sport
end
