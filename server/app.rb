require 'rubygems'
require 'bundler/setup'

Bundler.require :default

DB = Sequel.sqlite

DB.create_table :todos do
  primary_ey :id

  String :title, null: false
  TrueClass :is_done, default: false
end

todos = DB[:todos]
todos.insert(id: 1, title: "workout",           is_done: false)
todos.insert(id: 2, title: "watch porn",        is_done: true )
todos.insert(id: 3, title: "read a book",       is_done: false)
todos.insert(id: 4, title: "call mom",          is_done: false)
todos.insert(id: 5, title: "call friend's mom", is_done: false)
puts "Todos: #{todos.count}"

class App < Grape::API
  format :json

  get '/todos/' do
    DB[:todos].all
  end

  params do
    requires :title, type: String
  end
  post '/todos/' do
    DB[:todos].insert(params)
    DB[:todos].all
  end

  delete '/todos/:id' do
    DB[:todos].where(id: params[:id]).delete
    DB[:todos].all
  end
end

