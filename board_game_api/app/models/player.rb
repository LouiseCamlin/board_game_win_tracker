class Player < ApplicationRecord

  has_many :wins
  has_many :games, through: :wins, :dependent => :delete_all

end
