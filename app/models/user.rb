# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  fname           :string(50)       not null
#  lname           :string(50)       not null
#  email           :string           not null
#  zipcode         :string(5)        not null
#  password_digest :string           not null
#  session_token   :string           not null
#  captain_id      :integer
#  player_id       :integer
#  elite           :boolean          default(FALSE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  include UserAuth

  has_many :player_sports, foreign_key: :player_id 
  has_many :sports, through: :player_sports, source: :sport
end
