# Getting Started with Create React App

This project was bootstrapped with Create React App.

## Project Description: Albums List React App

This React application is designed to manage a list of albums. The app interacts with the API at https://jsonplaceholder.typicode.com/albums to perform basic CRUD (Create, Read, Update, Delete) operations. The key features of the app include:

• Fetching Albums: Retrieve and display a list of albums from the API.
• Adding Albums: Add a new album by making a POST request to the API. While the request is a dummy call and does not persist data to the server, it updates the React state to simulate album addition.
• Updating Albums: Modify an existing album by making a PUT request to the API. Similar to adding, this is a dummy call that reflects changes in the app’s state.
• Deleting Albums: Remove an album by making a DELETE request to the API. This is also a dummy request that updates the state accordingly.

This application provides a practical demonstration of handling API interactions and managing state in a React environment.

## Created By

This project was created by Anurag Verma.

## Available Scripts

Within the project directory, you have access to the following scripts:

### npm start

This command starts the application in development mode.
You can open http://localhost:3000 in your web browser to view the running app.

The page will automatically reload if you make edits to the code.
You may also notice any linting errors appearing in the console.

### npm test

This command initiates the test runner in an interactive watch mode.
For more details, refer to the section on running tests in the Create React App documentation.

### npm run build

This command generates a production-ready build of the application, outputting the files to the build folder.
React is correctly bundled in production mode, with optimizations applied for performance.

The build process minifies the code, and filenames include hashes for cache busting.
Once the build is complete, your app is ready for deployment.

For deployment instructions, please see the deployment section of the Create React App documentation.

### npm run eject

Note: Ejecting is a one-way operation; once you eject, it cannot be undone.

If you are not satisfied with the default build tool and configuration options, you can eject at any time. This will remove the single build dependency from your project.

Upon ejection, all configuration files and transitive dependencies (such as webpack, Babel, and ESLint) will be directly copied into your project, giving you full control. While all other commands will continue to function, they will now point to the copied scripts, allowing you to modify them as needed. At this point, you will be responsible for maintaining the configuration.

You are never required to use eject. The curated feature set is designed to be suitable for small to medium-scale deployments. However, we understand that this tool may not be useful if you require extensive customization options.

## Learn More

For additional information, refer to the Create React App documentation.

If you are new to React, we recommend reviewing the React documentation.

### Additional Resources

• Code Splitting: Learn more about code splitting
• Analyzing the Bundle Size: How to analyze bundle size
• Making a Progressive Web App: Steps to create a PWA
• Advanced Configuration: Advanced configuration options
• Deployment: Deployment guide
• npm run build fails to minify: Troubleshooting build failures