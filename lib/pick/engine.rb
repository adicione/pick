module Pick
  class Engine < ::Rails::Engine
    initializer "pick.assets" do |app|
      app.config.assets.paths << Engine.root.join("app/javascript")
      app.config.assets.paths << Engine.root.join("app/assets/stylesheets")
    end

    initializer "pick.importmap", before: "importmap" do |app|
      app.config.importmap.paths << Engine.root.join("config/importmap.rb")
      app.config.importmap.cache_sweepers << Engine.root.join("app/javascript")
    end
  end
end
