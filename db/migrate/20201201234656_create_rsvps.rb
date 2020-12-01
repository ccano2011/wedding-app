class CreateRsvps < ActiveRecord::Migration[6.0]
  def change
    create_table :rsvps do |t|
      t.string :firstname
      t.string :lastname
      t.string :entree

      t.timestamps
    end
  end
end
