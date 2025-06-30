## <a> 🖥️&nbsp;&nbsp; Zoofy (Fullstack)</a>

<br />

<p>
    <img
        src="https://skills.syvixor.com/api/icons?i=nextjs,react,ts,tailwind,shadcnui,motion,node,prisma" />
</p>

<p>
    Zoofy is full-stack web application for managing pets. It features secure
    authentication with NextAuth and user authorization via JWT tokens. Users
    can register, log in, and manage their pets—add, edit, view, or delete them.
    The app also includes integrated payment functionality using Stripe.
</p>

<p>
    <a href="https://rr-zoofy.vercel.app" target="_blank"
        >Live demo - see it in action</a
    >
</p>

<p>
    <a href="https://github.com/Rapkowsky/zoofy" target="_blank"
        >Github repo - see more details</a
    >
</p>

<br />

<p>
    <img width="50%" src="/zoofy.png" />
</p>

<br />

## <a> 🔋&nbsp;&nbsp; Core Features</a>

-   &nbsp;👤&nbsp;&nbsp; **User Registration:** Create new user accounts.
-   &nbsp;🔑&nbsp;&nbsp; **Authentication:** Log in and log out securely using NextAuth.
-   &nbsp;💳&nbsp;&nbsp; **Payment System:** Integrated payment functionality using Stripe.
-   &nbsp;🐾&nbsp;&nbsp; **Pet Management:**
    -   &nbsp;➕&nbsp;&nbsp; Add a new pet to the database.
    -   &nbsp;✏️&nbsp;&nbsp; Edit existing pet details.
    -   &nbsp;📄&nbsp;&nbsp; View the list of created pets.
    -   &nbsp;🗑️&nbsp;&nbsp; Delete pets from the database.

<br>

## <a name="local-development"> 🖥️&nbsp;&nbsp; Local Development</a>

0.  **Prerequisites** <br>
    Make sure you have the following installed on your machine:

    -   [Git](https://git-scm.com/)
    -   [Node.js](https://nodejs.org/en) (v20+)
    -   [npm](https://www.npmjs.com/) (Package Manager)

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Rapkowsky/zoofy.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd zoofy
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  Create a new file named `.env` in the root of your project and add the following content:

    ```env

    DATABASE_URL=

    AUTH_SECRET=

    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

    STRIPE_SECRET_KEY=

    STRIPE_WEBHOOK_SECRET=

    CANNONICAL_URL=

    ```

    Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the respective websites

5.  **Running the Project**

    ```bash
    npm run dev
    ```

    Visit &nbsp;[http://localhost:3000](http://localhost:3000)&nbsp; to access your app.

<br>
