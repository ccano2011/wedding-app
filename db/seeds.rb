# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all


@admin = User.create(name: 'admin', email: 'admin@email.com', password: '1234')

@post = Post.create(name: 'Chris', content: "Lorem Ipsum", user: @admin)