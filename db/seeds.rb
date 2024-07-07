# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

case Rails.env
when "development" || "test" || "production"
  puts "starting to seed the database"
  50.times do |iter|
  Article.create(name: Faker::Device.unique.model_name)
end
#puts "finished seeding the database"
#when "production"
  #puts "production environment"
#when "test"
  #puts "test environment"
end