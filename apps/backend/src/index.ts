import dotenv from 'dotenv';
import { app, connectToDatabase } from './app';
import { initializeControllers } from './common/common.controller';

dotenv.config();

const PORT = process.env.SERVER_PORT;

initializeControllers()

const startServer = async () => {
  try {
    app.listen(PORT, () => {  
      console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`); 
    }); 
  } catch (e) {
    console.log(e)
  }
}

startServer()