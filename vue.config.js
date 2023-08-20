module.exports = {
  devServer: {
    proxy: {
      '/api/v5/users/enjoei-pro/products/liked': {
        target: 'https://thingproxy.freeboard.io/fetch/https://www.enjoei.com.br/'
      }
    }
 }
}
