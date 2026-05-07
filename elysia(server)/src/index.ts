import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { healthRoutes } from './routes/health';

const app = new Elysia()
    .use(cors())
    .use(healthRoutes)
    .get('/', () => ({ message: 'Welcome to Elysia' }))
    .listen(3000);

export type App = typeof app;

console.log(`🦊 Elysia Template is running at ${app.server?.hostname}:${app.server?.port}`);