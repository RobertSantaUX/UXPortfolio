<template>
  <div
      class="container-fluid"
      data-offset="50"
      data-spy="scroll"
      data-target="#sidenav"
      style="position: relative; overflow-y: scroll"
  >
    <div class="row">
      <div class="col-2 d-none d-lg-block sidenav-grey"></div>
      <div id="dcl" class="col-12 col-lg-10 page-content-bg">
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
          <a class="nav-link not-link" href="#summary">Summary</a>
          <a class="nav-link not-link" href="#personas">User personas</a>
          <a class="nav-link not-link" href="#requirements">Requirements</a>
          <a class="nav-link not-link" href="#user_journey">User journey</a>
          <a class="nav-link not-link" href="#wireframes">Wireframes</a>
          <a class="nav-link not-link" href="#high-fi_design">High-fi design</a>
          <a class="nav-link not-link" href="#prototype">Final prototype</a>
          <span style="flex: 1"></span>
          <a id="to-the-top" class="not-link" href="#dcl">To the top</a>
        </div>
      </nav>
      <main class="col-12 col-lg-10 page-content-bg">
        <section id="summary">
          <h1>Summary</h1>
          <div class="d-flex flex-column flex-sm-row">
            <div id="summary-img-showcase">
              <img
                  alt="Landing screen"
                  src="@/assets/images/landing-screen.png"
              />
              <img alt="Login screen" src="@/assets/images/login.png"/>
              <img
                  alt="Linking screen"
                  src="@/assets/images/fts-linking_linked.png"
              />
              <img
                  alt="Customize screen"
                  src="@/assets/images/fts-customize.png"
              />
              <img alt="Main screen" src="@/assets/images/main-screen.png"/>
              <img
                  alt="Settings screen"
                  src="@/assets/images/profile-personal.png"
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
          <div class="d-flex flex-column flex-lg-row justify-content-lg-between mt-1 ml-5 ml-lg-0">
            <section id="problem" class="ml-2 mr-2" style="flex: 1">
              <div class="content text-left text-lg-center">
                <h2 class="hl-color-purple">The problem</h2>
                <p class="pl-2 pr-2">
                  Let's say we want to spend some free time on the computer
                  and watch a movie/series episode, a couple videos or maybe
                  some livestreams, but we don't know what exactly we want to
                  see. We have to check every app/site we like to spend time
                  on to see what's new, what's happening. This is
                  time-consuming.
                </p>
              </div>
            </section>
            <section id="idea" class="ml-2 mr-2" style="flex: 1">
              <div class="content text-left text-lg-center">
                <h2 class="hl-color-purple">The idea</h2>
                <p class="pl-2 pr-2">
                  We want to design an app that lists what a user can do in
                  their free time, if they want to spend it watching something
                  online. The app will show new pieces of content from
                  different accounts in one place and provide quick access to
                  them.
                </p>
              </div>
            </section>
            <section id="target" class="ml-2 mr-2" style="flex: 1">
              <div class="content text-left text-lg-center">
                <h2 class="hl-color-purple">The target audience</h2>
                <p class="pl-2 pr-2">
                  People, who spend a lot of free time on the internet. Users,
                  who consume mainly digital content in the form of
                  livestreams, videos, series, movies and video games. People,
                  who are registered on multiple sites that provide the
                  aforementioned content and thus need to see what is
                  happening on those platforms.
                </p>
              </div>
            </section>
            <section id="drawbacks" class="ml-2 mr-2" style="flex: 1">
              <div class="content text-left text-lg-center">
                <h2 class="hl-color-purple">Possible drawbacks</h2>
                <p class="pl-2 pr-2">
                  We need to connect different accounts with this app. This
                  means that we have to contact other companies and ask for
                  permission. Also, accessing user data through API's might be
                  a very difficult development task.
                </p>
              </div>
            </section>
          </div>
          <img
              alt="Prerequisites lines"
              src="@/assets/images/lines/prerequisites_lines.svg"
              class="d-none d-lg-block"
              style="height: 18vh; width: 100%"
          />
        </section>
        <section id="ideation">
          <h1>Ideation</h1>
          <section id="personas" class="text-left">
            <h2 class="mt-4 mb-4 hl-color-purple">User personas:</h2>
            <persona v-for="(persona, i) in personas" :key="persona" :index="i+1" :data="persona"/>
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
                alt="User journey"
                src="@/assets/images/user_journey.png"
            />
          </section>
          <div class="d-flex flex-column flex-lg-row mt-5 mb-5 mb-lg-0">
            <div style="flex: 1">
                <span class="section-summary-tag" style="width: 50%">
                  <img alt="" src="@/assets/images/checkmark.svg" class="checkmark">
                  <span>Personas</span>
                </span>
            </div>
            <div class="mt-4 mt-lg-0 mb-4 mb-lg-0" style="flex: 1">
                <span class="section-summary-tag" style="width: 50%">
                  <img alt="" src="@/assets/images/checkmark.svg" class="checkmark">
                  <span>Features</span>
                </span>
            </div>
            <div style="flex: 1">
                <span class="section-summary-tag" style="width: 50%">
                  <img alt="" src="@/assets/images/checkmark.svg" class="checkmark">
                  <span>User journey</span>
                </span>
            </div>
          </div>
          <img
              alt="User journey lines"
              src="@/assets/images/lines/user_journey_lines.svg"
              class="d-none d-lg-block"
              style="height: 15vh; width: 100%"
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
                      alt="Registration"
                      src="@/assets/images/registration.jpg"
                  />
                </div>
                <div class="col-4">
                  <img
                      alt="Account linking"
                      src="@/assets/images/account_linking.jpg"
                  />
                </div>
                <div class="col-4">
                  <img
                      alt="Notification"
                      src="@/assets/images/notification.jpg"
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
            <div class="container-fluid" style="font-size: 24px; line-height: 27px; margin-bottom: 1rem">
              <div class="row">
                <div class="col-12 col-lg-3 text-center">
                  <img alt="Unused design 1" src="@/assets/images/unused_design1.jpg" class="w-100">
                </div>
                <div id="ud1" class="d-none d-lg-block col-lg-3 position-relative ud-desc" style="visibility: hidden; opacity: 0;">
                  <div class="position-absolute" style="top: 15%">
                    Nothing separates the title(s) section from the rest of the app.
                  </div>
                  <div class="position-absolute" style="top: 35%">
                    Categories and filtering are not needed, it might hinder the user's experience (they might find it hard to find an app). Let's just put every app in one list.
                  </div>
                </div>
                <div id="ud2" class="d-none d-lg-block col-lg-3 position-relative ud-desc" style="visibility: hidden; opacity: 0;">
                  <div class="position-absolute" style="top: 15%">
                    Nothing separates the title(s) section from the rest of the app.
                  </div>
                  <div class="position-absolute" style="top: 60%">
                    It's way too invasive to ask whether the user is a parent during onboarding and it might deter them from using the app.
                  </div>
                  <div class="position-absolute" style="bottom: 2%">
                    The "Skip" button is way too small
                  </div>
                </div>
                <div class="col-12 col-lg-3 text-center">
                  <img alt="Unused design 2" src="@/assets/images/unused_design2.jpg" class="w-100 mt-3 mt-lg-0">
                </div>
              </div>
              <div class="row d-none d-lg-flex">
                <div class="col-3"></div>
                <div class="col-3 text-center">
                  <closeable-button closed text="Why didn't this make it?" v-on:click="onToggleHide('ud1')"/>
                </div>
                <div class="col-3 text-center">
                  <closeable-button closed text="Why didn't this make it?" v-on:click="onToggleHide('ud2')"/>
                </div>
                <div class="col-3"></div>
              </div>
              <div class="row d-none d-lg-flex">
                <div class="col-3"></div>
                <div class="col-3 text-center">
                  <closeable-button closed text="Why didn't this make it?" v-on:click="onToggleHide('ud3')"/>
                </div>
                <div class="col-3 text-center">
                  <closeable-button closed text="Why didn't this make it?" v-on:click="onToggleHide('ud4')"/>
                </div>
                <div class="col-3"></div>
              </div>
              <div class="row">
                <div class="col-12 col-lg-3 text-center">
                  <img alt="Unused design 3" src="@/assets/images/unused_design3.jpg" class="w-100 mt-3 mt-lg-0">
                </div>
                <div id="ud3" class="d-none d-lg-block col-lg-3 ud-desc" style="visibility: hidden; opacity: 0;">
                  <div class="position-absolute" style="top: 15%">
                    Nothing separates the title(s) section from the rest of the app.
                  </div>
                  <div class="position-absolute" style="top: 35%">
                    We are the designers of the app, we should come up with a good design and feel that the user is comfortable with. Giving the user excessive customizability could hurt visibility as well.
                  </div>
                </div>
                <div id="ud4" class="d-none d-lg-block col-lg-3 ud-desc" style="visibility: hidden; opacity: 0;">
                  <div class="position-absolute" style="top: 15%">
                    Nothing separates the title(s) section from the rest of the app.
                  </div>
                  <div class="position-absolute" style="top: 40%">
                    The entire connect/planner feature was cancelled, so the design had to be too.
                  </div>
                </div>
                <div class="col-12 col-lg-3 text-center">
                  <img alt="Unused design 4" src="@/assets/images/unused_design4.jpg" class="w-100 mt-3 mt-lg-0">
                </div>
              </div>
            </div>
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
          <div class="d-flex flex-column flex-lg-row mt-5 mb-5 mb-lg-0">
            <div class="mb-4 mb-lg-0" style="flex: 1">
                <span class="section-summary-tag" style="width: 50%">
                  <img alt="" src="@/assets/images/checkmark.svg" class="checkmark">
                  <span>Low-fidelity design</span>
                </span>
            </div>
            <div style="flex: 1">
                <span class="section-summary-tag" style="width: 50%">
                  <img alt="" src="@/assets/images/checkmark.svg" class="checkmark">
                  <span>High-fidelity design</span>
                </span>
            </div>
          </div>
          <img
              alt="Design lines"
              src="@/assets/images/lines/design_lines.svg"
              class="d-none d-lg-block"
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
                allowfullscreen
                height="675"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqXv4AQqmDPmSOh80k8xEUJ%2FContent-Hub%3Fnode-id%3D102%253A482%26viewport%3D172%252C91%252C0.1915488839149475%26scaling%3Dscale-down&chrome=DOCUMENTATION"
                width="1200"
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
import CloseableButton from "@/components/CloseableButton";
import Persona from "@/components/Persona";

export default {
  name: "ContentHub",
  components: {Persona, CloseableButton},
  data: function () {
    return {
      personas,
    };
  },
  methods: {
    onToggleHide: function (id) {
      const e = document.getElementById(id);
      console.log(e?.style?.visibility)
      if (e?.style?.visibility === "hidden") {
        e.style.visibility = "visible";
        e.style.opacity = "1";
      } else {
        e.style.visibility = "hidden";
        e.style.opacity = "0";
      }
    }
  },
  mounted: function () {
    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href'))
                .scrollIntoView({
                  behavior: 'smooth'
                });
          });
    });
  }
};
</script>

<style scoped>
#dcl {
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
  box-shadow: 0 5px 10px #00000073;
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
  box-shadow: 0 5px 10px #00000073;
  border-radius: 15px;
}

#design {
  background-color: #6e00a105;
}

#wireframes img {
  height: 100%;
  width: 100%;
  box-shadow: 0 5px 10px #00000073;
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

img.checkmark {
  display: inline-block;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 10px;
  bottom: 0;
  top: 0;
  margin: auto;
}

img.checkmark + span {
  margin-left: 35px;
  margin-right: 35px
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

.show-hide-button {
  font-size: 24px;
  line-height: 35px;
  background-color: #4B006E;
  color: #E6E6E6;
  box-shadow: 0 0 7px #00000091;
  border: 1px solid transparent;
  border-radius: 10px;
  outline: 0;
  padding: 0.3em;
  margin: 0.5em 0;
  transition: background-color 200ms ease-in 0ms, border 200ms ease-in 0ms;
}

.show-hide-button:hover {
  background-color: #2A2A2A;
  border: 1px solid #FFFFFF;
  transition: background-color 200ms ease-out 0ms, border 200ms ease-out 0ms;
}

.ud-desc {
  transition: opacity 100ms linear 0ms, visibility 100ms linear 0ms;
}

.section-summary-tag {
  display: inline-block;
  position: relative;
  min-width: max-content;
  font-size: 32px;
  line-height: 37px;
  background-color: white;
  border: 1px solid #4b006e;
  border-radius: 7px;
  padding: 0.1em;
}
</style>
