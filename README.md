# Webboard

## เกี่ยวกับโปรเจ็ค

Webboard เป็นเว็บบอร์ดสำหรับให้ผู้ใช้งานสามารถตั้งคำถามและแสดงความคิดเห็นได้ โปรเจ็คนี้แบ่งเป็นสามส่วนหลัก: Frontend, Backend และ Database

## Application Architecture

โปรเจค Webboard แยกส่วน Frontend และ Backend ออกจากกัน และใช้ MongoDB เป็นฐานข้อมูล ต่อไปนี้คือรายละเอียดของแต่ละส่วน:

### 1. Frontend (NextJS)

Frontend ใช้ NextJS ซึ่งเป็น React framework ที่มีประสิทธิภาพสูง โครงสร้างหลักประกอบด้วย:

-   `app/`: ใช้ App Router ของ Next.js 13+ สำหรับการจัดการเส้นทาง (routing)
-   `components/`: เก็บ React components ที่ใช้ร่วมกันทั่วทั้งแอปพลิเคชัน
-   `features/`: แบ่งโค้ดตาม features (เช่น auth, comment, community, post) เพื่อให้ง่ายต่อการจัดการ
-   `hooks/`: เก็บ custom React hooks
-   `lib/`: เก็บ utility functions และ types ต่างๆ
-   `services/`: จัดการการเชื่อมต่อกับ Backend API

Frontend ใช้ React Query สำหรับการจัดการ state ของข้อมูลที่มาจาก API และใช้ Zustand สำหรับการจัดการ global state

### 2. Backend (NestJS)

Backend ใช้ NestJS ซึ่งเป็น framework ที่สร้างขึ้นบน Express.js โครงสร้างหลักประกอบด้วย:

-   `modules/`: แบ่งโค้ดเป็นโมดูลต่างๆ ตาม feature (เช่น auth, comment, community, post, user)
-   `config/`: เก็บการตั้งค่าต่างๆ ของแอปพลิเคชัน
-   `common/`: เก็บ shared code เช่น decorators, guards, filters

แต่ละโมดูลใน `modules/` จะประกอบด้วย:

-   Controller: จัดการ HTTP requests และ responses
-   Service: ประกอบด้วย business logic
-   DTO (Data Transfer Object): กำหนดโครงสร้างข้อมูลที่รับเข้าและส่งออก
-   Schema: กำหนดโครงสร้างข้อมูลสำหรับ MongoDB

Backend ใช้ JWT (JSON Web Tokens) สำหรับการ authentication และ authorization

### 3. Database (MongoDB)

ใช้ MongoDB เป็นฐานข้อมูล NoSQL ซึ่งเหมาะสำหรับข้อมูลที่มีโครงสร้างยืดหยุ่น เช่น posts และ comments

การเชื่อมต่อระหว่าง Backend และ MongoDB ใช้ Mongoose ODM (Object Document Mapper) ซึ่งช่วยในการกำหนดโครงสร้างข้อมูลและการ query

## เทคโนโลยีหลัก

-   Frontend: NextJS
-   Backend: NestJS
-   Database: MongoDB (รันบน Docker Compose)

## การติดตั้ง

### Frontend

1. ติดตั้ง dependencies:

    ```
    pnpm i
    ```

2. สร้างไฟล์ `.env.local` ในโฟลเดอร์ `frontend` และเพิ่มข้อมูลต่อไปนี้:
    ```
    API_URL=http://localhost:4000
    NEXT_PUBLIC_API_URL=http://localhost:4000
    ```

### Backend

1. ติดตั้ง dependencies:

    ```
    pnpm i
    ```

2. สร้างไฟล์ `.env` ในโฟลเดอร์ `backend` และเพิ่มข้อมูลต่อไปนี้:
    ```
    PORT=4000
    MONGO_URI=mongodb://localhost:27017
    MONGO_USER=mongo_user
    MONGO_PASSWORD=strong_pass
    MONGO_DB_NAME=webboard
    SECRET_KEY=secret_key
    EXPIRES_IN=1d
    ```

### Database

1. รัน MongoDB ด้วย Docker Compose:

    ```
    cd database
    docker compose up -d
    ```

2. ตรวจสอบให้แน่ใจว่า Docker environment มีการตั้งค่าดังนี้:
    ```
    MONGO_INITDB_ROOT_USERNAME: mongo_user
    MONGO_INITDB_ROOT_PASSWORD: strong_pass
    ```

## การรันโปรเจ็คในโหมดพัฒนา

-   Frontend:

    ```
    cd frontend
    pnpm dev
    ```

-   Backend:
    ```
    cd backend
    pnpm start:dev
    ```

## โครงสร้างโปรเจ็ค

โปรเจ็คแบ่งเป็น 3 ส่วนหลัก:

1. `frontend/`: โค้ด NextJS สำหรับ Frontend
2. `backend/`: โค้ด NestJS สำหรับ Backend API
3. `database/`: ไฟล์ Docker Compose สำหรับ MongoDB

สำหรับโครงสร้างไฟล์ที่ละเอียดกว่านี้ กรุณาดูที่ส่วนท้ายของ README

## Libraries และ Packages หลัก

### Frontend

-   @hookform/resolvers: ใช้สำหรับ form validation
-   @tanstack/react-query: จัดการ state และ caching ของข้อมูลจาก API
-   axios: ใช้สำหรับทำ HTTP requests
-   react-hook-form: จัดการ forms ใน React
-   tailwindcss: ใช้สำหรับ styling
-   zod: ใช้สำหรับ schema validation
-   zustand: จัดการ global state

### Backend

-   @nestjs/jwt: จัดการ JWT สำหรับ authentication
-   @nestjs/mongoose: ใช้เชื่อมต่อกับ MongoDB
-   bcrypt: ใช้สำหรับ hash passwords
-   class-validator: ใช้สำหรับ DTO validation

## การรัน Unit Tests

ขณะนี้ยังไม่มีการเขียน unit tests สำหรับโปรเจ็คนี้

---

## โครงสร้างไฟล์โดยละเอียด

-   **webboard\-app\-nextjs\-nestjs\-mongodb**
    -   **backend**
        -   **src**
            -   [app.controller.spec.ts](backend/src/app.controller.spec.ts)
            -   [app.controller.ts](backend/src/app.controller.ts)
            -   [app.module.ts](backend/src/app.module.ts)
            -   [app.service.ts](backend/src/app.service.ts)
            -   **common**
            -   **config**
                -   [app.config.ts](backend/src/config/app.config.ts)
                -   [configuration.ts](backend/src/config/configuration.ts)
                -   [database.config.ts](backend/src/config/database.config.ts)
            -   [main.ts](backend/src/main.ts)
            -   **modules**
                -   **auth**
                    -   [auth.controller.spec.ts](backend/src/modules/auth/auth.controller.spec.ts)
                    -   [auth.controller.ts](backend/src/modules/auth/auth.controller.ts)
                    -   [auth.module.ts](backend/src/modules/auth/auth.module.ts)
                    -   [auth.service.spec.ts](backend/src/modules/auth/auth.service.spec.ts)
                    -   [auth.service.ts](backend/src/modules/auth/auth.service.ts)
                    -   **decorators**
                        -   [public.decorator.ts](backend/src/modules/auth/decorators/public.decorator.ts)
                    -   **dto**
                        -   [sign\-in.dto.ts](backend/src/modules/auth/dto/sign-in.dto.ts)
                    -   **guards**
                        -   [auth.guard.ts](backend/src/modules/auth/guards/auth.guard.ts)
                    -   **types**
                        -   [access\-token\-payload.ts](backend/src/modules/auth/types/access-token-payload.ts)
                        -   [access\-token.ts](backend/src/modules/auth/types/access-token.ts)
                -   **comment**
                    -   [comment.controller.spec.ts](backend/src/modules/comment/comment.controller.spec.ts)
                    -   [comment.controller.ts](backend/src/modules/comment/comment.controller.ts)
                    -   [comment.module.ts](backend/src/modules/comment/comment.module.ts)
                    -   [comment.service.spec.ts](backend/src/modules/comment/comment.service.spec.ts)
                    -   [comment.service.ts](backend/src/modules/comment/comment.service.ts)
                    -   **dto**
                        -   [create\-comment.dto.ts](backend/src/modules/comment/dto/create-comment.dto.ts)
                        -   [update\-comment.dto.ts](backend/src/modules/comment/dto/update-comment.dto.ts)
                    -   **schema**
                        -   [comment.schema.ts](backend/src/modules/comment/schema/comment.schema.ts)
                -   **community**
                    -   [community.controller.spec.ts](backend/src/modules/community/community.controller.spec.ts)
                    -   [community.controller.ts](backend/src/modules/community/community.controller.ts)
                    -   [community.module.ts](backend/src/modules/community/community.module.ts)
                    -   [community.service.spec.ts](backend/src/modules/community/community.service.spec.ts)
                    -   [community.service.ts](backend/src/modules/community/community.service.ts)
                    -   **dto**
                        -   [create\-community.dto.ts](backend/src/modules/community/dto/create-community.dto.ts)
                        -   [query\-community.dto.ts](backend/src/modules/community/dto/query-community.dto.ts)
                        -   [update\-community.dto.ts](backend/src/modules/community/dto/update-community.dto.ts)
                    -   **schema**
                        -   [community.schema.ts](backend/src/modules/community/schema/community.schema.ts)
                -   **post**
                    -   **dto**
                        -   [create\-post.dto.ts](backend/src/modules/post/dto/create-post.dto.ts)
                        -   [query\-post.dto.ts](backend/src/modules/post/dto/query-post.dto.ts)
                        -   [update\-post.dto.ts](backend/src/modules/post/dto/update-post.dto.ts)
                    -   [post.controller.spec.ts](backend/src/modules/post/post.controller.spec.ts)
                    -   [post.controller.ts](backend/src/modules/post/post.controller.ts)
                    -   [post.module.ts](backend/src/modules/post/post.module.ts)
                    -   [post.service.spec.ts](backend/src/modules/post/post.service.spec.ts)
                    -   [post.service.ts](backend/src/modules/post/post.service.ts)
                    -   **schema**
                        -   [post.schema.ts](backend/src/modules/post/schema/post.schema.ts)
                -   **user**
                    -   **dto**
                        -   [create\-user.dto.ts](backend/src/modules/user/dto/create-user.dto.ts)
                        -   [update\-user.dto.ts](backend/src/modules/user/dto/update-user.dto.ts)
                    -   **schema**
                        -   [user.schema.ts](backend/src/modules/user/schema/user.schema.ts)
                    -   [user.controller.spec.ts](backend/src/modules/user/user.controller.spec.ts)
                    -   [user.controller.ts](backend/src/modules/user/user.controller.ts)
                    -   [user.module.ts](backend/src/modules/user/user.module.ts)
                    -   [user.service.spec.ts](backend/src/modules/user/user.service.spec.ts)
                    -   [user.service.ts](backend/src/modules/user/user.service.ts)
            -   **utils**
                -   [index.ts](backend/src/utils/index.ts)
        -   **test**
            -   [app.e2e\-spec.ts](backend/test/app.e2e-spec.ts)
            -   [jest\-e2e.json](backend/test/jest-e2e.json)
        -   [README.md](backend/README.md)
        -   [nest\-cli.json](backend/nest-cli.json)
        -   [node_modules](backend/node_modules)
        -   [package.json](backend/package.json)
        -   [pnpm\-lock.yaml](backend/pnpm-lock.yaml)
        -   [tsconfig.build.json](backend/tsconfig.build.json)
        -   [tsconfig.json](backend/tsconfig.json)
    -   **database**
        -   [docker\-compose.yml](database/docker-compose.yml)
    -   **frontend**
        -   **public**
            -   [next.svg](frontend/public/next.svg)
            -   [notebook\-papers\-pencil.png](frontend/public/notebook-papers-pencil.png)
            -   [vercel.svg](frontend/public/vercel.svg)
        -   **src**
            -   **app**
                -   **(app)**
                    -   **[postId]**
                        -   [page.tsx](<frontend/src/app/(app)/[postId]/page.tsx>)
                    -   [layout.tsx](<frontend/src/app/(app)/layout.tsx>)
                    -   **our\-blog**
                        -   [page.tsx](<frontend/src/app/(app)/our-blog/page.tsx>)
                    -   [page.tsx](<frontend/src/app/(app)/page.tsx>)
                -   **(auth)**
                    -   [layout.tsx](<frontend/src/app/(auth)/layout.tsx>)
                    -   **sign\-in**
                        -   [page.tsx](<frontend/src/app/(auth)/sign-in/page.tsx>)
                -   [favicon.ico](frontend/src/app/favicon.ico)
                -   [globals.css](frontend/src/app/globals.css)
                -   [layout.tsx](frontend/src/app/layout.tsx)
            -   **components**
                -   **share**
                    -   [back\-button.tsx](frontend/src/components/share/back-button.tsx)
                    -   [user\-avatar\-loading.tsx](frontend/src/components/share/user-avatar-loading.tsx)
                    -   [user\-avatar.tsx](frontend/src/components/share/user-avatar.tsx)
                -   **ui**
                    -   [alert\-dialog.tsx](frontend/src/components/ui/alert-dialog.tsx)
                    -   [badge.tsx](frontend/src/components/ui/badge.tsx)
                    -   [button.tsx](frontend/src/components/ui/button.tsx)
                    -   [dialog.tsx](frontend/src/components/ui/dialog.tsx)
                    -   [dropdown\-menu.tsx](frontend/src/components/ui/dropdown-menu.tsx)
                    -   [form.tsx](frontend/src/components/ui/form.tsx)
                    -   [input.tsx](frontend/src/components/ui/input.tsx)
                    -   [label.tsx](frontend/src/components/ui/label.tsx)
                    -   [select.tsx](frontend/src/components/ui/select.tsx)
                    -   [sheet.tsx](frontend/src/components/ui/sheet.tsx)
                    -   [spinner.tsx](frontend/src/components/ui/spinner.tsx)
                    -   [textarea.tsx](frontend/src/components/ui/textarea.tsx)
                    -   [toast.tsx](frontend/src/components/ui/toast.tsx)
                    -   [toaster.tsx](frontend/src/components/ui/toaster.tsx)
                    -   [use\-toast.ts](frontend/src/components/ui/use-toast.ts)
            -   **features**
                -   **auth**
                    -   **components**
                        -   [alert\-sign\-in\-first.tsx](frontend/src/features/auth/components/alert-sign-in-first.tsx)
                        -   [form\-sign\-in.tsx](frontend/src/features/auth/components/form-sign-in.tsx)
                        -   [profile\-avatar.tsx](frontend/src/features/auth/components/profile-avatar.tsx)
                    -   **hoc**
                        -   [with\-sign\-in\-first.tsx](frontend/src/features/auth/hoc/with-sign-in-first.tsx)
                    -   **hooks**
                        -   [use\-profile.ts](frontend/src/features/auth/hooks/use-profile.ts)
                        -   [use\-sign\-in\-first.tsx](frontend/src/features/auth/hooks/use-sign-in-first.tsx)
                        -   [use\-sign\-in.ts](frontend/src/features/auth/hooks/use-sign-in.ts)
                    -   **store**
                        -   [auth.store.ts](frontend/src/features/auth/store/auth.store.ts)
                        -   [user.store.ts](frontend/src/features/auth/store/user.store.ts)
                -   **comment**
                    -   **components**
                        -   [card\-comment.tsx](frontend/src/features/comment/components/card-comment.tsx)
                        -   [create\-comment.tsx](frontend/src/features/comment/components/create-comment.tsx)
                    -   **hooks**
                        -   [use\-comment.ts](frontend/src/features/comment/hooks/use-comment.ts)
                -   **community**
                    -   **components**
                        -   [filter\-with\-community.tsx](frontend/src/features/community/components/filter-with-community.tsx)
                        -   [select\-community.tsx](frontend/src/features/community/components/select-community.tsx)
                    -   **hooks**
                        -   [use\-community.ts](frontend/src/features/community/hooks/use-community.ts)
                    -   **store**
                        -   [community.store.ts](frontend/src/features/community/store/community.store.ts)
                -   **post**
                    -   **components**
                        -   [card\-post.tsx](frontend/src/features/post/components/card-post.tsx)
                        -   [create\-post.tsx](frontend/src/features/post/components/create-post.tsx)
                        -   [dialog\-delete\-post.tsx](frontend/src/features/post/components/dialog-delete-post.tsx)
                        -   [dialog\-form\-post.tsx](frontend/src/features/post/components/dialog-form-post.tsx)
                        -   [feed\-post.tsx](frontend/src/features/post/components/feed-post.tsx)
                        -   [my\-feed\-post.tsx](frontend/src/features/post/components/my-feed-post.tsx)
                        -   [post\-detail.tsx](frontend/src/features/post/components/post-detail.tsx)
                        -   [search\-post.tsx](frontend/src/features/post/components/search-post.tsx)
                    -   **hooks**
                        -   [use\-post.ts](frontend/src/features/post/hooks/use-post.ts)
                    -   **store**
                        -   [post.store.ts](frontend/src/features/post/store/post.store.ts)
            -   **hooks**
            -   **layouts**
                -   **app\-layout**
                    -   [app\-layout.tsx](frontend/src/layouts/app-layout/app-layout.tsx)
                    -   [nav\-bar.tsx](frontend/src/layouts/app-layout/nav-bar.tsx)
                    -   [sidebar\-menu.tsx](frontend/src/layouts/app-layout/sidebar-menu.tsx)
                    -   [sidebar\-mobile.tsx](frontend/src/layouts/app-layout/sidebar-mobile.tsx)
                    -   [sidebar.tsx](frontend/src/layouts/app-layout/sidebar.tsx)
            -   **lib**
                -   [constants.ts](frontend/src/lib/constants.ts)
                -   [dayjs.ts](frontend/src/lib/dayjs.ts)
                -   [query\-client.ts](frontend/src/lib/query-client.ts)
                -   **types**
                    -   [auth.type.ts](frontend/src/lib/types/auth.type.ts)
                    -   [comment.type.ts](frontend/src/lib/types/comment.type.ts)
                    -   [community.type.ts](frontend/src/lib/types/community.type.ts)
                    -   [index.ts](frontend/src/lib/types/index.ts)
                    -   [post.type.ts](frontend/src/lib/types/post.type.ts)
                    -   [user.type.ts](frontend/src/lib/types/user.type.ts)
                -   [utils.ts](frontend/src/lib/utils.ts)
            -   **providers**
                -   [app\-provider.tsx](frontend/src/providers/app-provider.tsx)
                -   [query\-provider.tsx](frontend/src/providers/query-provider.tsx)
            -   **services**
                -   [auth.service.ts](frontend/src/services/auth.service.ts)
                -   [comment.service.ts](frontend/src/services/comment.service.ts)
                -   [community.service.ts](frontend/src/services/community.service.ts)
                -   [http\-common.ts](frontend/src/services/http-common.ts)
                -   [post.service.ts](frontend/src/services/post.service.ts)
        -   [README.md](frontend/README.md)
        -   [components.json](frontend/components.json)
        -   [next\-env.d.ts](frontend/next-env.d.ts)
        -   [next.config.mjs](frontend/next.config.mjs)
        -   [node_modules](frontend/node_modules)
        -   [package.json](frontend/package.json)
        -   [pnpm\-lock.yaml](frontend/pnpm-lock.yaml)
        -   [postcss.config.mjs](frontend/postcss.config.mjs)
        -   [tailwind.config.ts](frontend/tailwind.config.ts)
        -   [tsconfig.json](frontend/tsconfig.json)

---
