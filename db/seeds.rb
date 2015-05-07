women = [
  "Juliana",
  "Alice",
  "Ferne",
  "Leda",
  "Arvilla",
  "Lisa",
  "Mollie",
  "Trace",
  "Trudie",
  "Adele",
  "Cynthia",
  "Antonette",
  "Jacquelyn",
  "Lori",
  "Lynda",
  "Marlene",
  "Debbie",
  "Dorothy",
  "Tamara",
  "Marian",
  "Janet",
  "Willie",
  "Doris",
  "Kelley",
  "Edna",
  "Carole",
  "Eloise",
  "Nellie",
  "Nadine",
  "Mamie",
  "Gwendolyn",
  "Lena",
  "Ethel",
  "Barbara",
  "Patti",
  "Betty",
  "Maryann",
  "Angel",
  "Jo",
  "Guadalupe",
  "Eunice",
  "Virginia",
  "Faith",
  "Wilma",
  "Teresa",
  "Laurie",
  "Sadie",
  "Madeline",
  "Camille",
  "Krista",
  "Candace",
  "Rita",
  "Johnnie",
  "Stacy",
  "Eva",
  "Cecelia",
  "Victoria",
  "Pearl",
  "Billie",
  "Elsie",
  "Lula",
  "Alison",
]

men = [
  "Damian",
  "Demarco",
  "Fletcher",
  "Shane",
  "Bruce",
  "Brant",
  "Rex",
  "Darwin",
  "Alberto",
  "Jamison",
  "Rod",
  "Ernesto",
  "Watson",
  "AJ",
  "Brett",
  "Phillip",
  "Sammy",
  "Rafael",
  "Armando",
  "Christopher",
  "Javier",
  "Jack",
  "Stuart",
  "Ray",
  "Eric",
  "Devin",
  "Gustavo",
  "Eugene",
  "Gerardo",
  "Santiago",
  "Mack",
  "Dominic",
  "Cory",
  "Clark",
  "Alexander",
  "Harvey",
  "Delbert",
  "Dexter",
  "Garrett",
  "Timmy",
  "Dale",
  "Jeremy",
  "Tracy",
  "Clifton",
  "Rodney",
  "Matthew",
  "Scott",
  "Benny",
  "Milton",
  "Jerald",
  "Amos",
  "Wendell",
  "Lowell",
  "Cedric",
  "Alan",
  "Kevin",
  "Stewart",
  "Theodore",
  "Wesley",
  "Tony",
  "Christian",
  "Dennis",
  "Mark",
  "Allan",
]

#Generate Sports
sports = ["Basketball", "Bowling", "Flag Football", "Soccer", "Softball", "Volleyball"]
sports.each do |sport|
  Sport.create(name: sport)
end

#Generate female users
women.each_with_index do |name, index|
  fname = name
  lname = Faker::Name.last_name
  email = Faker::Internet.safe_email(fname)
  password = 'password'
  zipcode = index.even? ? '94109' : '95109'
  elite = index % 5 == 0 ? true : false
  playing_area = index % 2 == 0 ? "kkteF||qjVqwCyyPfkPy{DpwB`dZmzGt`H" : "a`ccFhmehVcrRq{e@lfc@uec@dgFhwhA"

  user = User.new(
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    zipcode: zipcode,
    elite: elite,
    img_url: "https://randomuser.me/api/portraits/med/women/#{index}.jpg",
    playing_area: playing_area
  )
  print user.save ? 'U ' : 'Fu '


end

#Generate male users
men.each_with_index do |name, index|
  fname = name
  lname = Faker::Name.last_name
  email = Faker::Internet.safe_email(fname)
  password = 'password'
  zipcode = index.even? ? '94109' : '95109'
  elite = index % 5 == 0 ? true : false
  playing_area = index % 2 == 0 ? "kkteF||qjVqwCyyPfkPy{DpwB`dZmzGt`H" : "a`ccFhmehVcrRq{e@lfc@uec@dgFhwhA"

  user = User.new(
    fname: fname,
    lname: lname,
    email: email,
    password: password,
    zipcode: zipcode,
    elite: elite,
    img_url: "https://randomuser.me/api/portraits/med/men/#{index}.jpg",
    playing_area: playing_area
  )
  print user.save ? 'U ' : 'Fu '


end

puts
puts '*' * 80

#Generate player_sports
User.all.each do |user|
  [2,3].sample.times do
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
