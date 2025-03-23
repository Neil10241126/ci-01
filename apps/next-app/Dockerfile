FROM node:20-alpine AS base

RUN apk add --no-cache libc6-compat

FROM base AS pruner
WORKDIR /app

RUN npm install -g pnpm turbo

COPY . .

RUN pnpm turbo prune meditruss --docker

FROM base AS builder
WORKDIR /app

RUN npm install -g pnpm turbo

COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/full/ .

RUN pnpm install  --frozen-lockfile

RUN pnpm turbo build

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/meditruss/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/meditruss/.next/static ./apps/meditruss/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/meditruss/public ./apps/meditruss/public

ENV NODE_ENV=production \
    PORT=8080

EXPOSE 8080
CMD ["node", "apps/meditruss/server.js"]