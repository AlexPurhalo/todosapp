Sequel.migration do
  up do
    create_table :todos do
      primary_key :id

      String :title, null: false
      FalseClass :is_done, default: false 
    end
  end

  down do
    drop_table :todos
  end
end
