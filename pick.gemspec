require_relative "lib/pick/version"

Gem::Specification.new do |spec|
  spec.name        = "pick"
  spec.version     = Pick::VERSION
  spec.authors     = [ "Ayres Narita" ]
  spec.email       = [ "eu@ayresnarita.com" ]
  spec.homepage    = "https://github.com/adicione/pick"
  spec.summary     = "Air DatePicker wrapper."
  spec.description = "Pick provides a simple and customizable date picker for Rails applications."

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = "https://github.com/adicione/pick/blob/main/CHANGELOG.md"

  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    Dir["{ app,config,db,lib }/**/*", "MIT-LICENSE", "Rakefile", "README.md"]
  end
end
