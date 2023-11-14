# minerals-analysis
Program to determine global metal demand

Description:

Backend Setup:
Read Excel Data: Use a Node.js backend with a package like xlsx to parse the Excel file and convert it to JSON.
Serve Base Case: Create an endpoint that sends the base case data to the frontend.
Receive User Input: Create an endpoint to receive user inputs, perform calculations, and send back the updated data.
Persist User Sessions: If you need to persist changes per user session without altering the base case, you can store the changes in memory or use a database like MongoDB, which can be easily integrated with a Node.js backend.

Frontend Setup:
Fetch Base Case: When the component mounts, fetch the base case data from the backend and store it in the state.
User Input Form: Create a form that allows users to submit changes. Upon submission, send this data to the backend for calculations.
Display Charts: Use ECharts to display charts based on the data fetched from the backend.
