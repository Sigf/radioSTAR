class Song < ActiveRecord::Base
  belongs_to :chart
  belongs_to :playlist
  
end
