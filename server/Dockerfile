FROM ruby:2.6.3

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

CMD ["bundle", "exec", "rackup", "-p", "3000", "-o", "0.0.0.0"]
