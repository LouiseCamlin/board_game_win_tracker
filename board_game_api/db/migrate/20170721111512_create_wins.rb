class CreateWins < ActiveRecord::Migration[5.1]
  def change
    create_table :wins do |t|
      t.references :player, foreign_key: true
      t.references :game, foreign_key: true

      t.timestamps
    end
  end
end
