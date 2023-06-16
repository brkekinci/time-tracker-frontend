export const PageRoutes = {
  Homepage: {
    path: "/",
  },
  User: {
    Page: { path: "/users" },
    Create: {
      path: "/users/create",
    },
    Edit: {
      path: "/users/edit/:id",
    },
  },
  Reports: {
    path: "/reports",
  },
  Auth: {
    SignIn: {
      path: "signin",
    },
    SignUp: {
      path: "signup",
    },
  },
};
