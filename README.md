# Elysia + SolidJS Template

High-performance full-stack TypeScript — **Elysia** on the edge, **SolidJS** in the browser.

A monorepo template for building modern, type-safe web applications with a fast Bun-powered backend and a reactive SolidJS frontend.

## Tech Stack

### Backend — `elysia(server)/`
- **[Bun](https://bun.sh/)** — JavaScript runtime optimized for speed
- **[Elysia](https://elysiajs.com/)** — ergonomic TypeScript web framework built for Bun
- **Eden Treaty** — end-to-end type safety between server and client
- **TypeScript** — fully typed throughout

### Frontend — `solid(client)/`
- **[SolidJS](https://www.solidjs.com/)** — fine-grained reactive UI framework
- **TypeScript**
- **CSS** — component styles

### Infrastructure — `infra/`
- Docker Compose for local service orchestration

---

## Monorepo Structure

```
├── elysia(server)/     # Elysia backend API server (Bun)
├── solid(client)/      # SolidJS frontend application
└── infra/              # Infrastructure & Docker configuration
```

---

## Requirements

- **[Bun](https://bun.sh/)** (latest) — used as runtime, package manager, and bundler
- **Docker & Docker Compose** (for infrastructure services)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ian-nwb/ElysiaAndSolidTemplate.git
cd ElysiaAndSolidTemplate
```

### 2. Install dependencies

Install dependencies for both workspaces:

```bash
# Backend
cd elysia(server)
bun install

# Frontend
cd ../solid(client)
bun install
```

### 3. Start infrastructure services

```bash
cd infra
docker compose up -d
```

### 4. Start the development servers

**Backend:**

```bash
cd elysia(server)
bun dev
```

**Frontend:**

```bash
cd solid(client)
bun dev
```

---

## Development

### Backend (Elysia)

The Elysia server runs on Bun and exposes a typed REST API. Eden Treaty is used to generate a fully type-safe client from the server's route definitions — no code generation step required.

Key conventions:
- Routes are defined with Elysia's fluent builder API
- Input validation is handled by Elysia's built-in schema validation
- The server exports its type for consumption by the frontend client

### Frontend (SolidJS)

The SolidJS app consumes the backend via Eden Treaty, giving the frontend full TypeScript inference of all API endpoints, request/response shapes, and error types.

Key conventions:
- Fine-grained reactivity — no virtual DOM overhead
- Components are organized by feature
- Styles are colocated with components

---

## Scripts

### Backend

| Command       | Description                   |
|---------------|-------------------------------|
| `bun dev`     | Start dev server with hot reload |
| `bun start`   | Start production server       |
| `bun build`   | Build for production          |

### Frontend

| Command       | Description                   |
|---------------|-------------------------------|
| `bun dev`     | Start Vite dev server         |
| `bun build`   | Production build              |
| `bun preview` | Preview production build      |

---

## Why This Stack?

| Feature | Detail |
|---|---|
| **Runtime** | Bun is significantly faster than Node.js for cold starts and throughput |
| **Type Safety** | Eden Treaty provides end-to-end types from server routes to client calls — no manual type duplication |
| **Reactivity** | SolidJS compiles to vanilla DOM operations, eliminating virtual DOM overhead |
| **DX** | Full TypeScript across the entire stack with a single language |
| **Simplicity** | Minimal abstraction — both Elysia and SolidJS have small, focused APIs |

---
