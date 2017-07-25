class AddDateToWin < ActiveRecord::Migration[5.1]
  def change
    add_column :wins, :date, :datetime
  end
end
