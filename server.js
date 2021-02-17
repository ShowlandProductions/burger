const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static('public'));
// Parse app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set Handlebars.
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Import routes & give the server access to them.
const routes = require('./controllers/burgers_controller.js');
app.use(routes);
// Start server function
app.listen(PORT, function() {
// Log when server starts
  console.log(`Server listening on: http://localhost:${PORT}`);
});