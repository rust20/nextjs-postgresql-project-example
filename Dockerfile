# Stage 1: Install dependencies
FROM node:23-slim AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Stage 2: Build
FROM node:23-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm && pnpm run build

# Stage 3: Production
FROM node:23-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 appuser

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server-node.mjs ./server-node.mjs
COPY --from=builder /app/package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules

USER appuser

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server-node.mjs"]
