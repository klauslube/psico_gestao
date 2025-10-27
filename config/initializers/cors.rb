Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # Permite requisições do React em desenvolvimento
    origins "http://localhost:3001", "http://localhost:3000"

    resource "*",
      headers: :any,
      expose: ['Authorization'],
      methods: [ :get, :post, :put, :patch, :delete, :options, :head ],
      credentials: true
  end
end
