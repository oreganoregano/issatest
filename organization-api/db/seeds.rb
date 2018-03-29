# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Employee.destroy_all
employees = Employee.create(
  [
    {
      emp_id: 1,
      name: "Dade Murphy",
      title: "CEO"
    },
    {
      emp_id: 2,
      name: "Kate Libby",
      title: "CTO",
      manager_id: 1
    },
    {
      emp_id: 5,
      name: "Eugene Belfort",
      title: "VP of Engineering",
      manager_id: 2
    },
    {
      emp_id: 7,
      name: "Emmanuel Goldstein",
      title: "Lead Software Engineer",
      manager_id: 5
    },
    {
      emp_id: 8,
      name: "Paul Cook",
      title: "Software Engineer",
      manager_id: 5
    },
    {
      emp_id: 9,
      name: "Joey Pardella",
      title: "Junior Software Engineer",
      manager_id: 8
    },
    {
      emp_id: 11,
      name: "Ramon Sanches",
      title: "Software Engineer",
      manager_id: 8
    },
    {
      emp_id: 3,
      name: "Edward Vedder",
      title: "CFO",
      manager_id: 1,
    },
    {
      emp_id: 4,
      name: "Margo Wallace",
      title: "VP of Public Relations",
      manager_id: 1
    },
    {
      emp_id: 6,
      name: "Richard Gill",
      title: "Public Relations Manager",
      manager_id: 4
    },
    {
      emp_id: 10,
      name: "Agnes Pardella",
      title: "Project Manager",
      manager_id: 4,
    }
  ]
)
