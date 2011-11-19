require 'sinatra'
require 'erb'

# Allow rendering of partials. See: https://gist.github.com/119874
#helpers Sinatra::Partials

configure :development do
  require "sinatra/reloader"
end

helpers do
  include Rack::Utils
  alias_method :h, :escape_html
end

not_found do
  redirect '/404.html'
end


get '/' do
  erb :index
end

