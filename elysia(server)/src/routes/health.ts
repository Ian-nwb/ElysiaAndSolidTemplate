import { Elysia } from 'elysia';
import { AppService } from '../services/app.service';

export const healthRoutes = new Elysia({ prefix: '/health' })
    .get('/', () => AppService.getHealth());