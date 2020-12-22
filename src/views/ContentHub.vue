<template>
  <div
    class="container-fluid"
    data-spy="scroll"
    data-target="#sidenav"
    data-offset="50"
    style="position: relative; overflow-y: scroll"
  >
    <div class="row">
      <div class="col-2 d-none d-lg-block sidenav-grey"></div>
      <div id="disclaimer" class="col-12 col-lg-10 page-content-bg">
        Disclaimer: this project is not a real project that I worked on for a
        company or client. This is a sample project that I did as if it was a
        real one.
      </div>
    </div>
    <div class="row">
      <nav
        id="sidenav"
        class="col-2 d-none d-lg-block sidenav-grey border-right-custom"
      >
        <div
          class="sidenav-content-fix d-flex flex-column"
          style="height: 75vh"
        >
          <a href="#summary" class="nav-link not-link">Summary</a>
          <a href="#personas" class="nav-link not-link">User personas</a>
          <a href="#requirements" class="nav-link not-link">Requirements</a>
          <a href="#user_journey" class="nav-link not-link">User journey</a>
          <a href="#wireframes" class="nav-link not-link">Wireframes</a>
          <a href="#high-fi_design" class="nav-link not-link">High-fi design</a>
          <a href="#prototype" class="nav-link not-link">Final prototype</a>
          <span style="flex: 1"></span>
          <a href="#" id="to-the-top" class="not-link">To the top</a>
        </div>
      </nav>
      <main class="col-12 col-lg-10 page-content-bg">
        <section id="summary">
          <h1>Summary</h1>
          <div class="d-flex flex-column flex-sm-row">
            <div id="summary-img-showcase">
              <img
                src="@/assets/images/landing-screen.png"
                alt="Landing screen"
              />
              <img src="@/assets/images/login.png" alt="Login screen" />
              <img
                src="@/assets/images/fts-linking_linked.png"
                alt="Linking screen"
              />
              <img
                src="@/assets/images/fts-customize.png"
                alt="Customize screen"
              />
              <img src="@/assets/images/main-screen.png" alt="Main screen" />
              <img
                src="@/assets/images/profile-personal.png"
                alt="Settings screen"
              />
            </div>
            <div class="d-flex flex-column justify-content-center pl-2">
              <p class="text-left">
                Content Hub is a new app that aims to make it easier & faster
                for users to look for and choose online multimedia content
                (series, movies, livestreams and videos).
              </p>
              <p class="text-left">
                Features include (but are not restricted to) account linking,
                customization, notification management and parental control.
              </p>
            </div>
          </div>
        </section>
        <section id="prerequisites">
          <h1 class="mt-5 mb-4">Prerequisites</h1>
          <div class="container-fluid mt-1">
            <div class="row">
              <section id="problem" class="col-3">
                <div class="content">
                  <h2 class="hl-color-purple">The problem</h2>
                  <p>
                    Let's say we want to spend some free time on the computer
                    and watch a movie/series episode, a couple videos or maybe
                    some livestreams, but we don't know what exactly we want to
                    see. We have to check every app/site we like to spend time
                    on to see what's new, what's happening. This is
                    time-consuming.
                  </p>
                </div>
              </section>
              <section id="idea" class="col-3">
                <div class="content">
                  <h2 class="hl-color-purple">The idea</h2>
                  <p>
                    We want to design an app that lists what a user can do in
                    their free time, if they want to spend it watching something
                    online. The app will show new pieces of content from
                    different accounts in one place and provide quick access to
                    them.
                  </p>
                </div>
              </section>
              <section id="target" class="col-3">
                <div class="content">
                  <h2 class="hl-color-purple">The target audience</h2>
                  <p>
                    People, who spend a lot of free time on the internet. Users,
                    who consume mainly digital content in the form of
                    livestreams, videos, series, movies and video games. People,
                    who are registered on multiple sites that provide the
                    aforementioned content and thus need to see what is
                    happening on those platforms.
                  </p>
                </div>
              </section>
              <section id="drawbacks" class="col-3">
                <div class="content">
                  <h2 class="hl-color-purple">Possible drawbacks</h2>
                  <p>
                    We need to connect different accounts with this app. This
                    means that we have to contact other companies and ask for
                    permission. Also, accessing user data through API's might be
                    a very difficult development task.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <img
            src="@/assets/images/lines/prerequisites_lines.svg"
            style="height: 18vh; width: 100%"
          />
        </section>
        <section id="ideation">
          <h1>Ideation</h1>
          <section id="personas">
            <h2 class="hl-color-purple">User personas:</h2>
            <!--          <div v-for="(persona, i) in personas" :key="persona">-->
            <!--            <div>-->
            <!--              Persona #{{i+1}} - <i class="hl-color-purple">{{persona.name}}</i><br>-->
            <!--              <i class="hl-color-purple">{{persona.age}}</i> year old <i class="hl-color-purple">{{persona.job}}</i>-->
            <!--            </div>-->
            <!--            <img :src="require('@/assets/images/' + persona.picture)" :alt="persona.name" height="50" width="50">-->
            <!--            <div>-->
            <!--              What {{persona.gender === 'male' ? 'he' : 'she'}} likes:-->
            <!--              <ul>-->
            <!--                <li v-for="like in persona.likes" :key="like">{{like}}</li>-->
            <!--              </ul>-->
            <!--            </div>-->
            <!--            <div>-->
            <!--              What {{persona.gender === 'male' ? 'he' : 'she'}} doesn't like:-->
            <!--              <ul>-->
            <!--                <li v-for="dislike in persona.dislikes" :key="dislike">{{dislike}}</li>-->
            <!--              </ul>-->
            <!--            </div>-->
            <!--            <p>{{persona.description}}</p>-->
            <!--          </div>-->
          </section>
          <section id="requirements" class="text-left">
            <h2 class="mt-4 mb-4 hl-color-purple">
              Main requirements & features:
            </h2>
            <p style="font-size: 28px">
              In order to be able to start working on the design of the app, I
              needed to know what features the product was going to have, so it
              was time to outline them.
            </p>
            <ul>
              <li>User creation and login</li>
              <li>Account linking</li>
              <li>
                Filtering - eg. livestreams only, series & movies only, etc.
              </li>
              <li>Notification management; reminders</li>
              <li>"Open in... / Go to … app"</li>
              <li>Parental control/guidance</li>
              <li>
                Basic messaging/connect/planner feature that allows the user to
                do something together with another user (eg. watch an episode
                with someone)
              </li>
              <li>Personalization</li>
              <li>Sync with calendar app(s)</li>
            </ul>
            <p>
              I also felt like we should include a first time setup - or
              onboarding screen(s) - for new users. So, it was time to create a
              user journey chart for that.
            </p>
          </section>
          <section id="user_journey" class="text-left">
            <h2 class="mt-4 mb-4 hl-color-purple">User journey - Onboarding</h2>
            <img
              id="user-journey-table"
              src="@/assets/images/user_journey.png"
              alt="User journey"
            />
          </section>
          <div class="container-fluid">
            <div class="row">
              <div class="col-4"><span>Personas</span></div>
              <div class="col-4"><span>Features</span></div>
              <div class="col-4"><span>User journey</span></div>
            </div>
          </div>
          <img
            src="@/assets/images/lines/user_journey_lines.svg"
            style="height: 10vh; width: 100%"
          />
        </section>
        <section id="design">
          <h1>Design</h1>
          <section id="wireframes" class="text-left">
            <h2 class="mt-3 mb-3 hl-color-purple">Wireframes</h2>
            <p>
              Now that we have defined what the app should be, created personas
              and outlined the main features and the user journey for the
              onboarding part, we can start designing how the app should look. I
              started with low-fidelity designs: wireframes on paper. I started
              playing around with ideas: looks, layouts, etc. I sketched these
              ideas on paper and then asked some other people to vote on them.
              You can see the different ideas on the pictures below, and you can
              also see the ones that got the most votes: their letters are
              circled.
            </p>
            <div class="container-fluid">
              <div class="row">
                <div class="col-4">
                  <img
                    src="@/assets/images/registration.jpg"
                    alt="Registration"
                  />
                </div>
                <div class="col-4">
                  <img
                    src="@/assets/images/account_linking.jpg"
                    alt="Account linking"
                  />
                </div>
                <div class="col-4">
                  <img
                    src="@/assets/images/notification.jpg"
                    alt="Notification"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="high-fi_design" class="text-left">
            <h2 class="mt-5 mb-3 hl-color-purple">High-fidelity design</h2>
            <p>
              Now that the general direction of the design of the product has
              been outlined, it was time to move on to the next phase:
              high-fidelity designs and prototyping. For this, I'd decided to
              use Figma. Over the next couple of days I started designing the
              app. First, the onboarding part and every screen of it. Then came
              the main main part(s) of the application: the main screen and its
              details. And lastly, the user's profile and settings. The reason
              I'd decided to go in this order was that this way, I felt I was
              more able to put myself in the position of the end user: design
              their journey and think of basics that are needed and nice to
              have's that are welcomed. During this intensive design period,
              when I felt like I was done with parts of the product (after the
              onboarding, the main screen & features and the user profile
              respectively) I conducted multiple usability tests. I shared my
              Figma prototype with a group of people and asked them to try to
              use it. I told them that it was a prototype that didn't contain
              any code so it wouldn't be taking into account any choices they
              make (eg. choosing a theme), but other than that, they should
              treat it as if it was a near-ready product.
            </p>
            <p>
              Some tests were one-on-one interviews where I could get more
              detailed feedback and some were group sessions where I let the
              members bounce ideas off of each other. Based on the feedbacks I
              got, the designs were adjusted multiple times.
            </p>
            <p style="font-size: 30px; line-height: 35px">
              Instead of showing you some pictures of the finalized design here,
              I thought it'd be a good idea to show you some
              <b class="hl-color-purple"><i>designs that didn't make it</i></b>
              - to show you that, of course, not everything went smoothly. And,
              if you'd like to, you can check why these design ended up reworked
              or scratched completely, using the buttons next to them.
            </p>
            <p>
              During this time, some features were cancelled as well, like the
              connections and planning features, that would've allowed users to
              add other users and plan watching something with them. Other
              features have been added that weren't among the initial ones, like
              the ability to report a bug or log out. The product's visual
              customization by the user was also toned down, in order to keep
              the signature color scheme and general feel of the app.
            </p>
          </section>
          <div class="container-fluid">
            <div class="row">
              <div class="col-6"><span>Low-fidelity design</span></div>
              <div class="col-6"><span>High-fidelity design</span></div>
            </div>
          </div>
          <img
            src="@/assets/images/lines/design_lines.svg"
            style="height: 15vh; width: 100%"
          />
        </section>
        <section id="prototype">
          <h1>Prototyping</h1>
          <section id="content_hub" class="text-left">
            <h2 class="mt-3 mb-3 hl-color-purple">Content Hub</h2>
            <p>
              Here, you can find the latest prototype. Feel free to play around
              with it!
            </p>
            <iframe
              id="figmaPrototype"
              width="1200"
              height="675"
              allowfullscreen
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqXv4AQqmDPmSOh80k8xEUJ%2FContent-Hub%3Fnode-id%3D102%253A482%26viewport%3D172%252C91%252C0.1915488839149475%26scaling%3Dscale-down&chrome=DOCUMENTATION"
            >
            </iframe>
          </section>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import personas from "@/assets/data/personas.json";

export default {
  name: "ContentHub",
  data: function () {
    return {
      personas,
    };
  },
};
</script>

<style scoped>
#disclaimer {
  font-size: 40px;
  line-height: 49px;
  color: red;
  padding-bottom: 1em;
}

#to-the-top {
  background-color: inherit;
  color: #4b006e;
  box-shadow: 2px 5px 10px #00000033;
  border: 1px solid #2a2a2a;
  border-radius: 3px;
  /*transform: translateY(20vh);*/
}

main > section {
  padding-right: 3vw;
}

#summary {
  padding-bottom: 4vh;
}

#summary-img-showcase img {
  width: 10vw;
  margin: 0.5rem;
  box-shadow: 0px 5px 10px #00000073;
}

#prerequisites,
#prototype {
  background-color: #2a2a2a0a;
}

#prerequisites .content {
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  height: 100%;
  width: 100%;
}

#prerequisites .content::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: -1;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

#problem .content::after {
  background-image: url("~@/assets/images/problem.png");
}

#idea .content::after {
  background-image: url("~@/assets/images/idea.png");
}

#target .content::after {
  background-image: url("~@/assets/images/target.png");
}

#drawbacks .content::after {
  background-image: url("~@/assets/images/qa.png");
}

#user-journey-table {
  box-shadow: 0px 5px 10px #00000073;
  border-radius: 15px;
}

#design {
  background-color: #6e00a105;
}

#wireframes img {
  height: 100%;
  width: 100%;
  box-shadow: 0px 5px 10px #00000073;
}

#figmaPrototype {
  border: 1px solid rgba(0, 0, 0, 0.1);
}

h1 {
  display: inline-block;
  text-transform: uppercase;
  padding: 0.2em;
  border: 1px solid #4b006e;
  border-radius: 7px;
}

h2 {
  font-weight: bold;
}

.border-right-custom {
  border-right: 2px solid #4b006e;
}

.sidenav-content-fix {
  position: fixed;
  left: 0;
  width: 100%;
  max-width: inherit;
}

.sidenav-content-fix a {
  font-size: 32px;
  line-height: 39px;
  text-align: left;
  padding-left: 0.3em;
  background-color: white;
  box-shadow: 0 0 5px #00000026;
  border-radius: 2px;
  margin: 0.4em;
}

.sidenav-content-fix a.active {
  background-color: #2a2a2a;
  color: white;
}

.sidenav-content-fix a:hover,
#to-the-top:hover {
  background-color: #4b006e;
  color: white;
}

.sidenav-grey {
  background-color: #e6e6e6;
}

.page-content-bg {
  background-color: #6e00a105;
}
</style>
