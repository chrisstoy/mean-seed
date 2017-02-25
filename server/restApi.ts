/**
 * REST Api implemented using Typescript
 */
import * as http from 'http';
import app from './server';

const PORT = (process.env.PORT || 3000);
app.set('port', PORT);




