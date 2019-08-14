todos = DB[:todos]
todos.insert(:title => "workout",           is_done: false)
todos.insert(:title => "watch porn",        is_done: true )
todos.insert(:title => "read a book",       is_done: false)
todos.insert(:title => "call mom",          is_done: false)
todos.insert(:title => "call friend's mom", is_done: false)
puts "Todos: #{todos.count}"
