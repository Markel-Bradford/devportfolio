import React from "react";
import "../../App.css";
import "./Projects.css";
import styles from "../../styles/Global.module.scss";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { ref: title, inView: titleInView } = useInView({
    triggerOnce: true,
  });

  const { ref: project1, inView: project1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName1, inView: projectName1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo1, inView: projectInfo1InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project2, inView: project2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName2, inView: projectName2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo2, inView: projectInfo2InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project3, inView: project3InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName3, inView: projectName3InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo3, inView: projectInfo3InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project4, inView: project4InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName4, inView: projectName4InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo4, inView: projectInfo4InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project5, inView: project5InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName5, inView: projectName5InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo5, inView: projectInfo5InView } = useInView({
    triggerOnce: true,
  });

  const { ref: project6, inView: project6InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectName6, inView: projectName6InView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectInfo6, inView: projectInfo6InView } = useInView({
    triggerOnce: true,
  });

  return (
    <div id="projects" className="projectsBg">
      <div className="filler2"></div>
      <h1 ref={title} className="projects">
        {" "}
        <span
          className={`${titleInView ? styles.animationFade : styles.hidden}`}>
          Projects
        </span>
      </h1>
      <div ref={ref} className="project-container">
        <div className={`${inView ? styles.animationFade : styles.hidden}`}>
          <h2 className="project-view">
            Please browse and review the projects I've completed
          </h2>
        </div>
        <div className="project-files">
        <div
          ref={projectName3}
          className={`${
            projectName3InView ? styles.animationFade : styles.hidden
          }`}>
          <div className="project-name-container">
            <a
              className="text-links"
              href="https://nextproducttemplate.vercel.app/"
              target="_blank"
              rel="noreferrer">
              <h3 className="project-name">
                Platinum Threads E-Commerce Template:
                <br />{" "}
                <span className="tech"> NextJS, React, TypeScript, TailwindCSS</span>
              </h3>
            </a>
            <a
              href="https://github.com/Markel-Bradford/nextproducttemplate"
              target="_blank"
              rel="noreferrer">
              <img
                className="github"
                src="/devportfolio/images/github.png"
                alt="link to Github repository"
              />
              <img
                className="github2"
                src="/devportfolio/images/whitegithub.png"
                alt="link to Github repository"
              />
            </a>
          </div>
        </div>
        <div
          ref={project3}
          className={`${
            project3InView ? styles.animationFade : styles.hidden
          }`}>
          <div className="thumbnail-wrapper">
            <a
              className="text-links"
              href="https://nextproducttemplate.vercel.app/"
              target="_blank"
              rel="noreferrer">
              <video
                className="thumbnail"
                src="/devportfolio/videos/Pthread.mp4"
                alt="NextJS E-commerce template"
                muted
                playsInline
                autoPlay
                loop
              />
              <video
                className="thumbnail-mobile"
                src="/devportfolio/videos/pthreadsmobile.mp4"
                alt="NextJS E-commerce template mobile"
                muted
                playsInline
                autoPlay
                loop
              />
            </a>
          </div>
        </div>
        <div
          ref={projectInfo3}
          className={`${
            projectInfo3InView ? styles.animationFade : styles.hidden
          }`}>
          <p className="information">
            The objective of this project was to create a comprehensive
            e-commerce platform that showcases my expertise in modern web
            development technologies, particularly focusing on Next.js, Tailwind
            CSS, and related tools. This project highlights my ability to build
            a sophisticated, responsive, and dynamic web application from
            scratch.
          </p>
          <p className="information">
            The first part of the project involved setting up the frontend using
            Next.js, a popular React framework. Next.js facilitates server-side
            rendering, static site generation, and dynamic routing, ensuring
            optimal performance and SEO. The application's UI is built with
            Tailwind CSS, a utility-first CSS framework, to provide a consistent
            and visually appealing design across all pages.
          </p>
          <p className="information">
            The second part of the project focused on implementing responsive
            and interactive user interfaces. Components like the navbar, hero
            section, product cards, and footers were meticulously crafted using
            Tailwind CSS and React. These components ensure a seamless user
            experience across various devices, adapting to different screen
            sizes with ease.
          </p>
          <p className="information">
            The third aspect of the project involved integrating dynamic
            features and animations. Custom animations were defined in the
            Tailwind CSS configuration to enhance user interactions, such as
            smooth transitions and fade-in effects. These animations were
            applied to elements like product cards and the hero section to
            create a more engaging and interactive user interface.
          </p>
          <p className="information">
            Finally, the project was deployed on Vercel, a platform optimized
            for Next.js applications. This deployment step highlights my skills
            in deploying and managing web applications in a production
            environment. Vercel's seamless integration with GitHub ensured
            continuous deployment and version control, making it easy to manage
            and update the application.
          </p>
        </div>
          <div
            ref={projectName4}
            className={`${
              projectName4InView ? styles.animationFade : styles.hidden
            }`}>
            <div className="project-name-container">
              <a
                className="text-links"
                href="https://safariguessingame-0deac2bf61b5.herokuapp.com/"
                target="_blank"
                rel="noreferrer">
                <h3 className="project-name">
                  {" "}
                  Guessing Game:{" "}
                  <span className="tech">
                    {" "}
                    <br />
                    React, JavaScript, HTML5, CSS3, Flask, Python, Waitress,
                    Flask-CORS, Firebase Authentication
                  </span>
                </h3>
              </a>
              <a
                href="https://github.com/Markel-Bradford/safariguessinggame/tree/main"
                target="_blank"
                rel="noreferrer">
                <img
                  className="github"
                  src="/devportfolio/images/github.png"
                  alt="link to Github repository"
                />
                <img
                  className="github2"
                  src="/devportfolio/images/whitegithub.png"
                  alt="link to Github repository"
                />
              </a>
            </div>
          </div>
          <div
            ref={project4}
            className={`${
              project4InView ? styles.animationFade : styles.hidden
            }`}>
            <div className="thumbnail-wrapper">
              <a
                href="https://safariguessingame-0deac2bf61b5.herokuapp.com/"
                target="_blank"
                rel="noreferrer">
                <video
                  className="thumbnail"
                  src="/devportfolio/videos/Safarigame.mp4"
                  alt="guessing game thumbnail"
                muted
                playsInline
                autoPlay
                loop
                />
                <video
                  className="thumbnail-mobile"
                  src="/devportfolio/videos/safarimobile.mp4"
                  alt="guessing game mobile thumbnail"
                muted
                playsInline
                autoPlay
                loop
                />
              </a>
            </div>
          </div>
          <div
            ref={projectInfo4}
            className={`${
              projectInfo4InView ? styles.animationFade : styles.hidden
            }`}>
            <div>
              <p className="information">
                The objective of this project was to create a full-stack web
                application that combines my knowledge of frontend and backend
                development, specifically using React, Flask, and related
                technologies. This project demonstrates my ability to integrate
                various web development skills to build a complete and
                functional application.
              </p>
              <p className="information">
                The first part of the project involved developing the backend
                using Flask, a micro web framework for Python. The backend
                handles the game logic, processes user inputs, and serves API
                endpoints for starting a new game and making guesses. Flask-CORS
                was utilized to manage cross-origin requests, ensuring seamless
                communication between the frontend and backend hosted on
                different domains.
              </p>
              <p className="information">
                The second part of the project focused on building the frontend
                using React. This interactive interface allows users to engage
                with the game, providing real-time feedback and dynamic updates.
                The game’s UI is styled with CSS to ensure a responsive and
                visually appealing experience across various devices. React’s
                state management capabilities were leveraged to handle the
                game’s state and user interactions efficiently.
              </p>
              <p className="information">
                The third aspect involved integrating the frontend and backend
                components. API requests are made from the React frontend to the
                Flask backend to start a new game and make guesses. The backend
                processes these requests, updates the game state, and sends
                responses back to the frontend, which then updates the UI
                accordingly. This demonstrates my ability to build and manage a
                full-stack application with interactive and dynamic features.
              </p>
              <p className="information">
                Another critical component of the project was implementing
                Firebase Authentication for user management. This allowed users
                to sign up, log in, and maintain their game progress securely.
                Firebase Authentication provides robust security measures and
                easy integration with React, enhancing the application's overall
                user experience and security.
              </p>
              <p className="information">
                Finally, the project was deployed on Heroku, a cloud platform
                for hosting web applications. The backend is served using
                Waitress, a production-ready WSGI server for Python web
                applications, ensuring that the application is scalable and can
                handle user requests efficiently. This deployment step
                highlights my skills in managing and deploying web applications
                in a real-world environment.
              </p>
            </div>
          </div>
          <div
            ref={projectName6}
            className={`${
              projectName6InView ? styles.animationFade : styles.hidden
            }`}>
            <div className="project-name-container">
              <a
                className="text-links"
                href="https://mbconverter.onrender.com/"
                target="_blank"
                rel="noreferrer">
                <h3 className="project-name">
                  Global Currency Converter:
                  <br />{" "}
                  <span className="tech">
                    {" "}
                    React, JavaScript, HTML5, CSS3, REST API
                  </span>
                </h3>
              </a>
              <a
                href="https://github.com/Markel-Bradford/mbconverter"
                target="_blank"
                rel="noreferrer">
                <img
                  className="github"
                  src="/devportfolio/images/github.png"
                  alt="link to Github repository"
                />
                <img
                  className="github2"
                  src="/devportfolio/images/whitegithub.png"
                  alt="link to Github repository"
                />
              </a>
            </div>
          </div>
          <div
            ref={project6}
            className={`${
              project6InView ? styles.animationFade : styles.hidden
            }`}>
            <div className="thumbnail-wrapper">
              <a
                href="https://mbconverter.onrender.com/"
                target="_blank"
                rel="noreferrer">
                <video
                  id="portfolio-thumbnail"
                  className="thumbnail"
                  src="/devportfolio/videos/converter.mp4"
                  alt="curency convertor thumbnail"
                  muted
                playsInline
                autoPlay
                loop
                />
                <video
                  className="thumbnail-mobile"
                  id="mobile-portfolio"
                  src="/devportfolio/videos/convertermobile.mp4"
                  alt="curency convertor mobile thumbnail"
                  muted
                playsInline
                autoPlay
                loop
                />
              </a>
            </div>
          </div>
          <div
            ref={projectInfo6}
            className={`${
              projectInfo6InView ? styles.animationFade : styles.hidden
            }`}>
            <p className="information">
              The objective of this project was to develop a robust currency
              converter capable of converting any currency by leveraging the
              latest exchange rates from an API. To achieve this, I implemented
              JavaScript functions to fetch, process, and store the exchange
              rate data efficiently. Additionally, I utilized React frameworks
              such as React-Currency-Input-Field and React-Accessible-Accordion
              to enhance the user interface and overall functionality of the
              application.
            </p>
            <p className="information">
              The website's design incorporates both inline CSS and external
              stylesheets to ensure a visually appealing and cohesive layout.
              The web application is fully responsive, catering to various
              screen sizes, and supports both light and dark theme preferences
              for an optimal user experience. This attention to design detail
              ensures a seamless and engaging user experience across different
              devices and viewing conditions.
            </p>
            <p className="information">
              For secure hosting, I deployed the application on Render, ensuring
              that the API operates within a protected virtual environment to
              prevent misuse. This deployment strategy safeguards the integrity
              of the application and its data, providing users with a reliable
              and secure service. Overall, this project highlights my ability to
              integrate external data sources, enhance user interfaces with
              advanced React frameworks, and ensure robust security and
              responsiveness in a web application.
            </p>
          </div>
          <div ref={projectName1}>
            <div
              className={`${
                projectName1InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="project-name-container">
                <a
                  className="text-links"
                  href="https://mbweatherapp.onrender.com/"
                  target="_blank"
                  rel="noreferrer">
                  <h3 className="project-name">
                    React Weather App:
                    <br />{" "}
                    <span className="tech">
                      React, Java Script, HTML5, CSS3, REST APIs
                    </span>
                  </h3>
                  {/*<h3 className="grade">Grade: A</h3>*/}
                </a>
                <a
                  href="https://github.com/Markel-Bradford/react-weatherapp"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="github"
                    src="/devportfolio/images/github.png"
                    alt="link to Github repository"
                  />
                  <img
                    className="github2"
                    src="/devportfolio/images/whitegithub.png"
                    alt="link to Github repository"
                  />
                </a>
              </div>
            </div>
            <div
              ref={project1}
              className={`${
                project1InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="thumbnail-wrapper">
                <a
                  className="text-links"
                  href="https://mbweatherapp.onrender.com/"
                  target="_blank"
                  rel="noreferrer">
                  <video
                    className="thumbnail"
                    src="/devportfolio/videos/Weather.mp4"
                    alt="Weather app create using react, weather, and geo apis"
                    muted
                playsInline
                autoPlay
                loop
                  />
                  <video
                    className="thumbnail-mobile"
                    src="/devportfolio/videos/weathermobile.mp4"
                    alt="weather app mobile thumbnail"
                    muted
                playsInline
                autoPlay
                loop
                  />
                </a>
              </div>
            </div>
            <div
              ref={projectInfo1}
              className={`${
                projectInfo1InView ? styles.animationFade : styles.hidden
              }`}>
              <p className="information">
                The primary objective of this project was to develop a
                sophisticated web-based weather application capable of
                retrieving real-time data from REST APIs to provide users with
                comprehensive local weather updates and weekly forecasts.
                Utilizing Axios for asynchronous data fetching, the application
                accurately retrieves location and weather information from the
                OpenWeatherMap API and the Geolocation API. To display the
                weekly forecast, I implemented the React Accessible Accordion
                framework, ensuring an intuitive and seamless user experience
                while handling various HTTP methods, working with specific API
                endpoints, and passing query parameters to fetch the required
                data.
              </p>
              <p className="information">
                To enhance the visual appeal and functionality of the
                application, I meticulously customized the layout using CSS3
                stylesheets, resulting in a visually appealing and user-friendly
                interface. The integration of JavaScript fetch further
                facilitated the seamless retrieval of weather and location data
                from API endpoints, ensuring accurate and up-to-date information
                for the users. Additionally, I implemented robust error handling
                to manage potential issues with API requests, thus maintaining a
                smooth user experience..
              </p>
              <p className="information">
                For deployment, I employed Render to safeguard sensitive API
                keys, thereby maintaining data security and privacy. This
                approach ensured the integrity and confidentiality of the
                application's data sources, providing a secure and reliable user
                experience. Overall, this project showcases my ability to
                integrate and manipulate external data sources in a web
                application, demonstrating my proficiency in working with REST
                APIs and delivering a functional and visually engaging user
                interface.
              </p>
            </div>
            <div
              ref={projectName5}
              className={`${
                projectName5InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="project-name-container">
                <a
                  className="text-links"
                  href="https://markel-bradford.github.io/odinprojectfoundations/"
                  target="_blank"
                  rel="noreferrer">
                  <h3 className="project-name">
                    The Odin Project Foundations:
                    <br />{" "}
                    <span className="tech">
                      HTML, CSS, JavaScript, Responsive Design
                    </span>
                  </h3>
                </a>
                <a
                  href="https://github.com/Markel-Bradford/odinprojectfoundations"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="github"
                    src="/devportfolio/images/github.png"
                    alt="link to Github repository"
                  />
                  <img
                    className="github2"
                    src="/devportfolio/images/whitegithub.png"
                    alt="link to Github repository"
                  />
                </a>
              </div>
            </div>
            <div
              ref={project5}
              className={`${
                project5InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="thumbnail-wrapper">
                <a
                  href="https://markel-bradford.github.io/odinprojectfoundations/"
                  target="_blank"
                  rel="noreferrer">
                  <video
                    className="thumbnail"
                    src="/devportfolio/videos/Odin.mp4"
                    alt="Homepage for my Odin Project Foundations collection"
                    muted
                playsInline
                autoPlay
                loop
                  />
                  <video
                    className="thumbnail-mobile"
                    src="/devportfolio/videos/odinmobile.mp4"
                    alt="odin project mobile thumbnail"
                    muted
                playsInline
                autoPlay
                loop
                  />
                </a>
              </div>
            </div>
            <div
              ref={projectInfo5}
              className={`${
                projectInfo5InView ? styles.animationFade : styles.hidden
              }`}>
              <div>
                <div>
                  <p class="information">
                    The objective of this collection of projects was to
                    reinforce and further develop my understanding of the
                    fundamentals of web development, namely HTML, CSS, and
                    JavaScript. As these form the cornerstone of web
                    development, I deemed it imperative to solidify existing
                    knowledge and augment my skill set.
                  </p>
                  <p class="information">
                    The first project entailed replicating a generic landing
                    page based on a provided image, while infusing it with
                    original content. Opting to design a landing page for a
                    fitness business, I utilized flexbox for creating scalable
                    containers and content, employing solely HTML5 and CSS3 for
                    its realization.
                  </p>
                  <p class="information">
                    The second project involved crafting a simple rock, paper,
                    scissors game, employing JavaScript to manipulate the DOM.
                    In this interactive game, the player engages with a computer
                    opponent, with selections determined randomly from an array
                    of choices. Dynamic frontend updates based on player and
                    computer choices, alongside win condition functions, were
                    implemented, rendering the first player to attain 5 points
                    the winner.
                  </p>
                  <p class="information">
                    For the third project, the challenge was to complete an
                    etch-a-sketch by establishing a scalable grid using flexbox.
                    While CSS Grid could have been utilized, the aim was to
                    reinforce comprehension of flexbox and its practical
                    application. Leveraging JavaScript to manipulate the DOM,
                    the program facilitates the creation of the etch-a-sketch
                    grid layout, with event listeners enabling tile coloring in
                    either black or a randomly generated array of rainbow colors
                    upon mouse interaction.
                  </p>
                  <p class="information">
                    The final project entailed developing a functional
                    calculator capable of executing the four basic mathematical
                    functions. While the project stipulated a simple HTML-based
                    calculator, I opted for a more challenging
                    approach—employing DOM manipulation in JavaScript—to
                    consolidate learnings from prior assignments. Utilizing a
                    similar method as the etch-a-sketch for creating calculator
                    buttons, the program incorporates event listeners for
                    keydown, keyup, and onclick events, alongside arrays and
                    maps for key value creation. Additionally, individual
                    functions were created for each mathematical operation, with
                    switch cases facilitating operation execution.
                  </p>
                </div>
              </div>
            </div>
            <div
              ref={projectName2}
              className={`${
                projectName2InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="project-name-container">
                <a
                  className="text-links"
                  href="https://markel-bradford.github.io/WEB121-Final/index.html"
                  target="_blank"
                  rel="noreferrer">
                  <h3 className="project-name">
                    WEBD121 Final Project:
                    <br />
                    <span className="tech">
                      HTML5, CSS3, Java Script, Media Query
                    </span>
                  </h3>
                  <h3 className="grade"></h3>
                </a>
                <a
                  href="https://github.com/Markel-Bradford/WEB121-Final"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="github"
                    src="/devportfolio/images/github.png"
                    alt="link to Github repository"
                  />
                  <img
                    className="github2"
                    src="/devportfolio/images/whitegithub.png"
                    alt="link to Github repository"
                  />
                </a>
              </div>
            </div>
            <div
              ref={project2}
              className={`${
                project2InView ? styles.animationFade : styles.hidden
              }`}>
              <div className="thumbnail-wrapper">
                <a
                  className="text-links"
                  href="https://markel-bradford.github.io/WEB121-Final/index.html"
                  target="_blank"
                  rel="noreferrer">
                  <video
                    className="thumbnail"
                    src="/devportfolio/videos/Final.mp4"
                    alt="Final project for WEBD121 class"
                    muted
                playsInline
                autoPlay
                loop
                  />
                  <video
                    className="thumbnail-mobile"
                    src="/devportfolio/videos/finalmobile.mp4"
                    alt="final project mobile thumbnail"
                    muted
                playsInline
                autoPlay
                loop
                  />
                </a>
              </div>
            </div>
            <div
              ref={projectInfo2}
              className={`${
                projectInfo2InView ? styles.animationFade : styles.hidden
              }`}>
              <p className="information">
                For my final project in the Web Development Fundamentals class
                at American Military University, I took on the challenge of
                applying a range of concepts covered throughout the course to
                create a visually appealing website focused on my career
                aspirations in development. This project required me to
                integrate various skills and techniques to develop a functional
                online platform.
              </p>
              <p className="information">
                Using HTML as the foundation and CSS to style each element, I
                aimed to prioritize user experience by creating an intuitive
                interface. Additionally, I incorporated JavaScript
                functionalities to enhance interactivity, including features
                like a scroll-to-top button and animated homepage title. I also
                ensured the design was fully responsive, providing an optimal
                viewing experience on both desktop and mobile devices by using
                flexible grid layouts and media queries.
              </p>
              <p className="information">
                By paying close attention to detail and following best
                practices, I was able to transform theoretical knowledge into a
                polished web development project. The end result is a
                professional, responsive website that reflects my dedication to
                the field of web development and adapts seamlessly to different
                screen sizes and devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
