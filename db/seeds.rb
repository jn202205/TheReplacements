 #Generate Sports
sports = ["Basketball", "Bowling", "Football", "Soccer", "Softball", "Volleyball"]
sports.each do |sport|
 Sport.create(name: sport)
end

 #Generate Users
20.times do |n|
 fname = Faker::Name.first_name
 lname = Faker::Name.last_name
 email = Faker::Internet.safe_email(fname)
 password = 'password'
 zipcode = n.even? ? '94109' : '95109'
 elite = n % 5 == 0 ? true : false

 user = User.new(
   fname: fname,
   lname: lname,
   email: email,
   password: password,
   zipcode: zipcode,
   elite: elite
 )
 print user.save ? 'U ' : 'Fu '


end
puts
puts '*' * 80

 #Generate player_sports
User.all.each do |user|
  sport_num = user.id.even? ? 3 : 2
  sport_num.times do
    player_sport = PlayerSport.new(
      player_id: user.id,
      sport_id: Sport.find_by_name(Faker::Name.sport).id
    )
    until player_sport.valid?
    player_sport = PlayerSport.new(
      player_id: user.id,
      sport_id: Sport.find_by_name(Faker::Name.sport).id
    )
    end

    print player_sport.save ? 'S ' : 'Fs'
  end
end

#Generate Player position for sport
