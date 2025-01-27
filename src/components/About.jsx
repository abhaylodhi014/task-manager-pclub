import React from "react";

const About = ({ theme }) => {
  return (
    <div className="container   my-5">
      <div
        className="card    shadow-lg animate__animated animate__headShake"
        style={{
          backgroundColor: theme === "dark" ? "black" : "azure",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <div className="card-body">
          <h1 className="card-title text-center text-primary mb-3 fw-bold animate__animated animate__swing">
            About Task Manager
          </h1>
          <p className="card-text fs-5  fw-bold">
            Welcome to <strong>Task Manager</strong>, a simple yet effective
            tool for managing your daily tasks and staying productive. Whether
            you're organizing your work projects or tracking personal goals,
            Task Manager makes it easy to stay on top of your priorities.
          </p>
          <h2 className="mt-4">Key Features</h2>
          <div
            className="my-2 "
            style={{
              backgroundColor: theme === "dark" ? "black" : "azure",
              color: theme === "dark" ? "white" : "black",
            }}
          >
            <ul className="ps-3">
              <li className="bi bi-check-circle fs-5 me-2">
                Create, edit, and delete tasks with ease.
              </li>
              <li className="bi bi-check-circle fs-5 me-2">
                Persistent storage using localStorage for your tasks.
              </li>
              <li className="bi bi-check-circle fs-5 me-2">
                Mark tasks as completed to track progress.
              </li>
              <li className="bi bi-check-circle fs-5 me-2">
                Receive reminders for upcoming deadlines.
              </li>
              <li className="bi bi-check-circle fs-5 me-2">
                Bootstrap-powered responsive design for all devices.
              </li>
            </ul>
          </div>

          <p className="mt-4 ">
            Task Manager is lightweight, user-friendly, and designed to help you
            stay organized. Whether you're at home or on the go, your tasks are
            always accessible and easy to manage.
          </p>
          <p className="text-center text-primary font-weight-bold fw-bold fs-5 mt-4">
            Start using Task Manager today and boost your productivity!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
