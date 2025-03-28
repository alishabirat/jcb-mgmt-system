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



<!-- ========================================================================================= -->

📦 JCB-Rental-System updated
├── 📂 backend
│   ├── 📂 config
│   │   ├── db.js                  # Database connection
│   │   ├── keys.js                # API keys (eSewa, Khalti, Stripe, etc.)
│   ├── 📂 controllers
│   │   ├── authController.js      # User authentication logic
│   │   ├── bookingController.js   # Booking-related logic
│   │   ├── invoiceController.js   # Invoice generation & tracking
│   │   ├── jcbController.js       # JCB machine management
│   │   ├── paymentController.js   # Payment processing
│   │   ├── userController.js      # User profile and role management
│   ├── 📂 middleware
│   │   ├── authMiddleware.js      # Protect routes & roles (Admin, Superadmin)
│   │   ├── errorHandler.js        # Global error handling
│   ├── 📂 models
│   │   ├── Booking.js             # Booking schema
│   │   ├── Invoice.js             # Invoice schema (all-time history)
│   │   ├── JCB.js                 # JCB machine schema
│   │   ├── Payment.js             # Payment tracking schema
│   │   ├── User.js                # User authentication schema
│   ├── 📂 routes
│   │   ├── authRoutes.js          # Routes for authentication (login, register)
│   │   ├── bookingRoutes.js       # Routes for booking management
│   │   ├── invoiceRoutes.js       # Routes for invoice tracking (all-time history)
│   │   ├── jcbRoutes.js           # Routes for JCB machines
│   │   ├── paymentRoutes.js       # Routes for payment tracking
│   │   ├── userRoutes.js          # Routes for user management
│   ├── 📂 utils
│   │   ├── generateInvoice.js     # Function to generate invoices
│   │   ├── paymentGateway.js      # Functions for eSewa, Khalti, Stripe
│   │   ├── sendEmail.js           # Function to send invoice notifications
│   ├── server.js                  # Main backend entry file
│   ├── .env                       # Environment variables
│   ├── package.json               # Backend dependencies
│   ├── README.md                   # Backend documentation
│
├── 📂 frontend (Vite + React)
│   ├── 📂 src
│   │   ├── 📂 assets               # Static assets (images, icons)
│   │   ├── 📂 components
│   │   │   ├── BookingForm.jsx       # Form to book a JCB
│   │   │   ├── InvoiceList.jsx       # Displays all-time invoice history
│   │   │   ├── InvoiceDetails.jsx    # Invoice details page
│   │   │   ├── JCBCard.jsx           # Display JCB machine details
│   │   │   ├── PaymentStatus.jsx     # Show payment tracking status
│   │   ├── 📂 context
│   │   │   ├── AuthContext.jsx        # Handles authentication state
│   │   │   ├── BookingContext.jsx     # Booking management state
│   │   │   ├── InvoiceContext.jsx     # Invoice tracking state
│   │   ├── 📂 pages
│   │   │   ├── AdminDashboard.jsx    # Admin dashboard
│   │   │   ├── BookingPage.jsx       # Booking page
│   │   │   ├── CustomerDashboard.jsx # Customer dashboard (all invoices)
│   │   │   ├── HomePage.jsx          # Landing page
│   │   │   ├── InvoicePage.jsx       # Invoice list (admin/customer view)
│   │   │   ├── InvoiceDetailsPage.jsx# Invoice details with transactions
│   │   │   ├── JCBListPage.jsx       # List all JCBs
│   │   │   ├── LoginPage.jsx         # Login and authentication
│   │   │   ├── PaymentPage.jsx       # Payment gateway integration
│   │   ├── 📂 utils
│   │   │   ├── api.js                # API calls (Axios setup)
│   │   │   ├── formatDate.js         # Helper function for dates
│   │   ├── App.jsx                    # Main React app file
│   │   ├── main.jsx                   # React DOM rendering (Vite)
│   ├── index.html                      # Vite entry point
│   ├── vite.config.js                   # Vite configuration
│   ├── .env                              # Environment variables for frontend
│   ├── package.json                      # Frontend dependencies
│   ├── README.md                          # Frontend documentation
│
├── 📂 docs
│   ├── API_Endpoints.md              # API endpoints documentation
│   ├── Database_Structure.md         # Database schema design
│   ├── Setup_Guide.md                # Setup instructions
│
└── README.md                         # Project overview

