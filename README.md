# Sentiric Dashboard UI

**Description:** A central web interface for system administrators and business analysts to monitor, manage, and generate reports for the Sentiric platform.

**Core Responsibilities:**
*   Providing a user-friendly, visual web-based administration panel.
*   Consuming APIs from other services (via `sentiric-api-gateway-service`) to visualize data and perform management operations (e.g., user management, dialplan configuration, CDR reports).
*   Offering insights into platform performance and usage.

**Technologies:**
*   JavaScript/TypeScript (e.g., React, Vue, Angular)
*   Node.js (for development server)
*   Web-based charting and UI libraries.
* we can use Next.js (SSR devre dışı) + Tremor	next export ile static

**API Interactions (As an API Client):**
*   Consumes APIs provided by `sentiric-api-gateway-service` (which in turn calls `sentiric-user-service`, `sentiric-dialplan-service`, `sentiric-cdr-service`, etc.).

**Local Development:**
1.  Clone this repository: `git clone https://github.com/sentiric/sentiric-dashboard-ui.git`
2.  Navigate into the directory: `cd sentiric-dashboard-ui`
3.  Install dependencies: `npm install`
4.  Create a `.env` file from `.env.example` to configure the API Gateway URL.
5.  Start the development server: `npm start` (or `npm run dev`).

**Configuration:**
Refer to `config/` or `src/` directories and `.env.example` for UI-specific configurations, including API endpoint URLs.

**Deployment:**
This is a frontend application, typically deployed as static files served by a web server (e.g., Nginx) or a CDN. Refer to `sentiric-infrastructure`.

**Contributing:**
We welcome contributions! Please refer to the [Sentiric Governance](https://github.com/sentiric/sentiric-governance) repository for coding standards and contribution guidelines.

**License:**
This project is licensed under the [License](LICENSE).
