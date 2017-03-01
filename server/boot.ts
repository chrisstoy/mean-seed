import app from './app';

// Bootstrap our Express app
const PORT = (process.env.PORT || 3000);
const HOST = (process.env.HOST || '127.0.0.1');

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
