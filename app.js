import fetch from "node-fetch";

// Function to make the GET request
const makeGetRequestToDocInfo = () => {
  fetch("https://docinfo.onrender.com")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      console.log("GET request to DocInfo successful");
    })
    .catch((error) => {
      console.error("Error making GET request to DocInfo:", error.message);
    });
};

const makeGetRequestToDocInfoMockServer = () => {
  fetch("https://mock-server-docinfo.onrender.com")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      console.log("GET request to DocInfo successful");
    })
    .catch((error) => {
      console.error("Error making GET request to DocInfo:", error.message);
    });
};

// Function to make the GET request every 5 minutes
const sendRequestEveryFiveMinutes = () => {
  makeGetRequestToDocInfo();
  makeGetRequestToDocInfoMockServer();
  setTimeout(sendRequestEveryFiveMinutes, 5 * 60 * 1000); // 5 minutes in milliseconds
};

// Start sending the GET requests
sendRequestEveryFiveMinutes();
