export const endpoints = {
    account: {
      login: "api/user/login",
      signup: "api/user/signup",
      auth: "api/user/auth",
    },
    tour: {
      bookTour: "api/tour/booktour", // post request provide token also
      approvedTour: "api/tour/approvedTour", // post request provide admin token also
      cancelTour: "api/tour/cancelTour", // post request provide token also
      addNewTour: "api/tour/addTour", // post request provide admin token also
    },
  };
  