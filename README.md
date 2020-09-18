# Tech Test

This is an app for displaying a list of items that their owners wish to give away. Users can view   
the items and 'like' them. 

The app is written with a Rails api and a React Typescript frontend, with a SQLite database. Tests in rspec and Jest for backend and frontend respectively. 

## To install

Clone repo  

Ensure you have yarn, Ruby, Bundle, and Node installed

CD into repo and run `yarn`  

Run `bundle install`

Run `rake db:migrate` and `rails db:migrate RAILS_ENV=test` to set up the database

## To run app

Run `./bin/webpack-dev-server` to compile the React app

Run `rails server -p 3000`

Go to http://localhost:3000 to view

## To run tests

Backend rails unit tests: `bundle exec rspec --require rails_helper`

Frontend Jest unit tests: `yarn test`
