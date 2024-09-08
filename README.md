# Start Up Early

Start Up Early is a web application designed to manage and display events for users. The project includes a fully functional login page, an authentication flow using both access tokens and refresh tokens, and a dashboard that shows event cards fetched from an external API.

## Features
- **Login Page**: Secure login authentication using access and refresh tokens.
- **Dashboard**: Displays event cards with data fetched from an API using the access token.
  
## Authentication Flow
The authentication flow is built using access tokens and refresh tokens:
1. Upon successful login, an access token and a refresh token are issued.
2. The access token is used for API requests and is stored temporarily in memory for enhanced security.
3. For convenience during development, the access token is also stored in local storage to avoid re-login after refreshing the page.
4. The refresh token is stored in local storage to maintain long-term session validity.

## Best Practices (Consideration for Future Implementation)
While the current implementation stores the access token in memory but also in local storage, the recommended approach for securely handling tokens is to store them in HTTP-only cookies. Unfortunately, due to the backend not sending cookies at this moment, this implementation has been deferred. In future updates, the plan is to switch to storing tokens in HTTP-only cookies for better security.

## Future Improvements
- Transition to HTTP-only cookies for storing access and refresh tokens.
- Enhance the overall security of the authentication flow by implementing secure cookie storage as soon as the backend is configured to support this feature.

## Tech Stack
- **Frontend**: React
- **Backend**: Django

## ScreenShots of the project
# Login Screen
![login](https://github.com/user-attachments/assets/62dddb45-cf9f-485c-b8a9-2b72ea7c003b)

# Dashboard 
![dashboard](https://github.com/user-attachments/assets/0c57ce13-5e31-4527-9203-0447619ac03e)

# MobileView with drawer open
![openDrawer](https://github.com/user-attachments/assets/25fad299-5a05-4d89-acde-0ef2bda0048d)


# MobileView with drawer closed
![closedDrawer](https://github.com/user-attachments/assets/cdb6f994-4880-4eb6-8f82-9e69094fb275)



## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/start-up-early.git

2. npm install
3. npm run dev





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
