class Game < ApplicationRecord

  has_many :wins
  has_many :players, through: :wins :dependent => :delete_all

end
