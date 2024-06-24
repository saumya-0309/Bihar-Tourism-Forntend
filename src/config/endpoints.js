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
    blog : {
      postBlog: "api/blog/addblog", // post request provide admin token also
      getBlog: "api/blog/getallblog", // post request provide admin token also
      getBlogBySlug : "api/blog/getblogbyslug", // post request provide admin
      getBlogByCityOrReligion : "api/blog/suggestblog", // city , religion and not seggest id provided in params
    }
  };
  