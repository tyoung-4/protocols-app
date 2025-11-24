# Protocols App

A Docker-based application for creating, editing, and managing laboratory protocols, inspired by Labguru and integrated with Protocols.io for importing protocols.

## 📂 Project Structure
```
README.md
├── docker-compose.yml
├── db/
│   └── (empty)
├── services/
    ├── api/
    │   ├── Dockerfile
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── src/
    │       ├── app.module.ts
    │       ├── main.ts
    │       ├── entities/
    │       │   ├── Experiment.ts
    │       │   ├── Protocol.ts
    │       │   ├── ProtocolVersion.ts
    │       │   └── Step.ts
    │       └── protocols/
    │           ├── protocols.controller.ts
    │           └── protocols.service.ts
    ├── collab/
    │   ├── Dockerfile
    │   ├── index.js
    │   └── package.json
    ├── src/
    │   ├── app.module.ts
    │   └── main.ts
    └── web/
        ├── Dockerfile
        ├── next.config.mjs
        ├── package.json
        ├── tsconfig.json
        ├── app/
        │   ├── layout.tsx
        │   └── page.tsx
        └── components/
            └── Editor.tsx
```

## 🏗 Architecture Overview
- **API Service (NestJS)**: Handles protocol creation, editing, and integration with Protocols.io.
- **Collab Service (Node.js)**: Provides real-time collaboration features.
- **Web Service (Next.js)**: Frontend interface for users to create and edit protocols.
- **Database**: Placeholder for future database integration (PostgreSQL or MongoDB).

## 🚀 Features
- Create and edit protocols with steps and versions.
- Import protocols from Protocols.io.
- Real-time collaboration for multiple users.
- Modular architecture using Docker containers.

## 🐳 Docker Setup
This project uses **Docker Compose** to orchestrate multiple services.

### docker-compose.yml Example
```yaml
version: '3.8'
services:
  api:
    build: ./services/api
    ports:
      - "3000:3000"
    depends_on:
      - db

  collab:
    build: ./services/collab
    ports:
      - "4000:4000"

  web:
    build: ./services/web
    ports:
      - "8080:3000"

  db:
    image: postgres:14
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: protocols
    ports:
      - "5432:5432"
```

## ▶️ How to Run
1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. **Start the application**:
   ```bash
   docker-compose up --build
   ```

3. Access services:
   - API: `http://localhost:3000`
   - Web: `http://localhost:8080`
   - Collab: `http://localhost:4000`

## 🔗 Integration with Protocols.io
- Use the API service to fetch and import protocols from Protocols.io.
- Configure API keys in `.env` file (not included in repo).

## 📌 Future Improvements
- Add authentication and user management.
- Implement database migrations.
- Enhance UI for protocol editing.

---
**Author:** tyoung-4  
**License:** 

