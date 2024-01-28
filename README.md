# Freedom_Financial
Members: 
1. Phi Dinh Van Toan - 17431
2. Tra Nguyen Ngoc - 17156
3. Nguyen Duy Nhat -
Instructor: Dr. Dinh Hai Dung
Project
29 January 2024
Web app for calculating the Financial Freedom Point

This report proposes an online application that users can use to determine their financial freedom point or the moment they become financially independent, given certain inputs. The web application gathers user input on preferences and financial status using an intuitive interface made by Vue.js. After that, the backend processes the input data using k-means clustering to compare the user's freedom point with other users who started from the same spot. The web app aims to help user Informed about their current financial freedom status compared to others who have the same start.
Project Link: https://github.com/LoveLess1212/Freedom_Financial_Point_Calculator
# METHOD
In this section, we describe the technical details of our web app, including the frontend, the database, and the backend.

## Frontend(Phi Dinh Van Toan)
We use Vue.js as the frontend framework, which enables us to create a single-page application (SPA) that enhances the user experience. We use Vuetify as the CSS framework, which provides us with a set of reusable UI components that follow the Material Design guidelines. We use Chart.js to draw interactive charts that visualize the user's financial freedom point and the k-means clustering results. We use Axios to control the API calls to the backend. We also use local storage in the front end to store the current user data, which is used to calculate the freedom point right in the frontend.
## Database (Tra Nguyen Ngoc)
We use MongoDB as the NoSQL database, which allows us to store and query user data in a flexible and scalable way. The database is mainly used for calculating the k-means clustering, which groups the users based on their financial freedom points and other features. The database also serves as a data source for data scientists who are interested in researching the financial freedom concept and its implications. The data we store includes the following information:
- User basic info: salutation, name, age, expected age, expected FFP, actual FFP
- User current asset-liabilities: cash, investment, real estate business, other assets, mortgage, student loan, credit, other liabilities
- User financial plan: start stage, end stage, incomes, expenses for each stage
## Backend (Tra Nguyen Ngoc, Nguyen Duy Nhat)
We use Express.js as the backend framework, which handles the API requests from the frontend and communicates with the database. The backend is mainly responsible for calculating the k-means clustering, which uses the k-means algorithm to partition the user data into k clusters based on their similarity
# ALGORITHM
## Financial Freedom Point (FFP) (Phi Dinh Van Toan)
In this section, we explain the algorithm that we use to calculate the FFP, which is the amount of money that a user needs to achieve their desired level of financial freedom. The algorithm is based on the user's input data, which includes their current assets and liabilities, their financial plan for different stages of their life, and their expected age. The algorithm consists of three main steps:
- Step 1: We create a spreadsheet model in Excel to test the algorithm and verify the calculation with the given model. The spreadsheet model simulates the user's cash flow and net worth over time, based on their input data and some assumptions.
- Step 2: We rewrite the algorithm in JavaScript and deploy it to the website. The JavaScript code implements the same logic as the spreadsheet model. The code also uses some libraries and frameworks, such as Vue.js, Vuetify, Chart.js, and Axios, to enhance the functionality and the user interface of the web app.
To model this algorithm in Js, there are 3 functions needed:
### Saving
This method calculates the expected savings for each year of a user's life, considering their income, expenses, and rate of increase in money.
Pseudocode:

1.  Calculate the number of years left in the user's life (`ageLeft`) by subtracting the user's current age from their expected age.
2. Create a new array (`Saving`) with a length equal to `ageLeft`. Each element in this array will represent the savings for a specific year.
3. For each stage in the `income` array:
    1. Calculate the net revenue by adding up the dependent income, self-employment income, renting income, and other income, and subtracting the tax expense, daily life expense, maintenance expense, and other expenses.
    2. If it's the first stage, set the savings for the first year to the free equity plus the revenue.
    3. For each year in the current stage:
        1. If it's not the first year, calculate the savings for the current year by adding the revenue to the savings from the previous year and multiplying by one plus the rise in the money rate.
4. Return the `Saving` array, which contains the expected rise in savings for each year of the user's life.
### Money Needed
This method calculates the amount of money needed for each year of a user's life, based on their expected age and current age, considering their inputted expenses and inflation.
Pseudocode:
1. Calculate the number of years left in the user's life (`ageLeft`) by subtracting the user's current age from their expected age.
2. Create a new array (`MoneyNeed`) with a length equal to `ageLeft`. Each element in this array will represent the money needed for a specific year.
3. Calculate the total expenses for the last year of income.
4. Calculate the money needed for the last year of the user's life and store it in the last element of the `MoneyNeed` array.
5. Iterate over the `income` array in reverse order. For each `income` stage:
    1. Calculate the total expenses for the stage (`expense`).
    2. Iterate over the years in the stage in reverse order. For each year:
        1. If the year is less than `ageLeft - 1`, calculate the money needed for the year and store it in the corresponding element of the `MoneyNeed` array.
6. Return the `MoneyNeed` array.




### Freedom Point
This function calculates the freedom point of the user by comparing user’s Saving and money needed. The age when saving is greater than Money needed is the freedom point.
Pseudocode:
1. Initialize a variable (`point`) to 0. This variable will store the index of the first year when the user's savings exceed their money needs.
2. Iterate over the years left in the user's life. For each year:
    1. Calculate the difference between the savings and the money needed for the year and store it in the corresponding element of the `FreedomPoint` array.
    2. If the difference is greater than 0, set `point` to the current index and break the loop.
3. Return the age at which the user reaches their financial freedom point by adding `point` to the user's current age.


## K-means clustering
K-Means algorithm is used in this project as it is a popular unsupervised machine learning technique used for clustering data points into groups based on their similarity. The algorithm follows an iterative process that involves assigning data points to centroids and updating the centroids until convergence. We use it for customer segmentation based on two components which is Cash and Business from their input at the start of the web and cluster them into three groups (Normal citizen, Saving and Investor). This also means the algorithms only work when there are more than three people or data points already in the Mongodb database. Additionally, the code includes a functionality to determine the group to which a specific person belongs based on their financial information. The function is used in the project:
kmeans(data, k): This function is the main entry point for the K-Means algorithm. It takes two parameters: data, which represents the dataset containing financial information of individuals, and k, the desired number of clusters. The function returns the final cluster assignments. It initializes centroids, assigns data points to the nearest centroid, and iteratively updates the centroids and assignments until convergence.
getRandomCentroids(data, k): This function randomly initializes centroids by selecting k random indices from the data. It ensures that each centroid is unique and returns the initial centroid positions.
assignPointsToCentroids(data, centroids): This function assigns each data point to the nearest centroid based on the Euclidean distance. It iterates over each data point and calculates the distance to each centroid. The point is assigned to the centroid with the minimum distance.
updateCentroids(data, assignments, k): This function updates the centroids based on the current cluster assignments. It initializes an array of centroids and an array to keep track of the cluster sizes. It iterates over the data points, accumulating the values of each feature for each cluster. Finally, it divides the accumulated values by the cluster sizes to obtain the updated centroid coordinates.
euclideanDistance(pointA, pointB): This function calculates the Euclidean distance between two points in the feature space. It iterates over the dimensions of the points, computes the squared difference for each dimension, and returns the square root of the sum of squared differences.
isEqual(arr1, arr2): This function checks if two arrays are equal by comparing their lengths and corresponding elements. It returns true if the arrays are equal and false otherwise.
The K-Means algorithm demonstrates the process of initializing centroids, assigning data points to the nearest centroid, and updating centroids iteratively until convergence. The code also includes an example of identifying the group to which a person belongs based on their financial characteristics. It is important to note that the code assumes a specific structure of the data with two columns named "cash" and "business." Customization may be required to adapt the code to different datasets or handle additional features or data types.

# DATABASE
Set up mongoDB (Tra Nguyen Ngoc)
The website uses the localhost mongoDB for the database. In this section, we will guide through how to set up the mongoDB database.
Step 1:  Go to the MongoDB website, download and install the MongoDB compass. Remember to select the platform that you are currently using and the right version.

Step 2 : After installing the MongoDB, you can see the database app will open and show you the figure below.

The URL in the figure is the database URL where the database is going to run in localhost. You can press “Connect” button to start the database. After press or before press, you need to copy URL or find the copy connection string if you have already pressed “connect” button. Then you need to go to the “src” folder in the source folder code website and find the file name “indexdb.js”. From here, you will paste the URL that you previously copied into line 14.



# USING MANUAL
## Start website
As our website is not deployed on the internet yet, so you have to run the script manually.
1. Cd to the directory where you have the project
2. Type “npm install” ( if this is the first time you run the app)
3. Press “Connect” in the mongodb compass to start the database.
4. Type “npm run run_server” to start the Server
5. Type “npm run dev” to start the Frontend server

## Using the web browser to use the app
1. Fill all the fields in the page
2. Click the button ‘submit’ to save the data
3. Click next - previous to go to the next step - previous step

Step 1. Basic information
Step 2. Balance Sheet
* You can input any currency, as long as, all the numbers-input are in the same currency. However, we suggest you use USD. 
Step 3. Life Stages
* All the money you input in here is (per year), not per month or per day. For example, in the “Dependent” field, you input 1000, which means you earn 1000 (currency) per year.
Step 4. Freedom point chart 
* Inflation is your estimation of Inflation on the plan period in real numbers (Ex. 0.02 not 2%)
* Rise expected is the rise expected on your asset.
Step 5. The result
* The below result is just for example, that function is not finished

# CONCLUSION
In this report, we have presented our web app that aims to help users calculate their financial freedom point (FFP) and compare their results with different groups of people. The web app uses Vue.js, Vuetify, Chart.js, Axios, MongoDB, and Node.js to create a user-friendly and interactive interface that collects and processes user data. The web app also uses k-means clustering to group the users based on their FFP and other features and provides them with personalized feedback and insights.
However, the web app is still a work in progress and has some limitations and challenges. Some of the issues that we encountered are:
- The web app is not fully functional and has some bugs and errors that affect the performance and the accuracy of the FFP calculation and the k-means clustering.
- The web app has some minor UI issues that affect the usability of the web app, such as the layout is sometimes not responsive.
- The web app does not have the feature to compare the user's results with other members in their group, which would enhance the self evaluate aspect and the motivation of the web app.
- The web app is not deployed to the internet and is only accessible locally, which limits the reach and the impact of the web app.

The future plan is to improve and refine our web app in the future by fixing the bugs and errors, enhancing the UI, adding the group comparison feature, and deploying the web app to the internet. 


