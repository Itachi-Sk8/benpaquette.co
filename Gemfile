# Local builds use the same gem set as GitHub Pages.
# Build: bundle exec jekyll build    Preview: bundle exec jekyll serve
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "webrick"

# Windows and JRuby do not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", platforms: [:windows]
