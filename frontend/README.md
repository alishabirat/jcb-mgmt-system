jcb-rental-management/
│── public/                 # Static files (favicon, index.html, images, etc.)
│── src/                    # Main application source code
│   ├── assets/             # Images, fonts, and static files
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Button.jsx
│   │   ├── Modal.jsx
│   │   ├── Table.jsx
│   ├── pages/              # Main pages of the application
│   │   ├── Dashboard.jsx
│   │   ├── Customers.jsx
│   │   ├── Bookings.jsx
│   │   ├── Machines.jsx
│   │   ├── Invoices.jsx
│   │   ├── Login.jsx
│   ├── context/            # Context API for state management
│   │   ├── AuthContext.jsx
│   │   ├── BookingContext.jsx
│   │   ├── MachineContext.jsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   ├── services/           # API calls and external services
│   │   ├── authService.js
│   │   ├── bookingService.js
│   │   ├── machineService.js
│   ├── utils/              # Utility functions (format dates, calculate totals, etc.)
│   │   ├── formatDate.js
│   │   ├── calculatePrice.js
│   ├── routes/             # Routing configuration
│   │   ├── AppRoutes.jsx
│   ├── styles/             # Global styles
│   │   ├── index.css
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point
│── .env                    # Environment variables
│── .gitignore              # Files to ignore in Git
│── package.json            # Dependencies and scripts
│── README.md               # Project documentation
