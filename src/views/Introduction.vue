<template>
  <main class="container text-justify">
    <section class="row" style="background-color: #2A2A2A0A">
      <p class="col">
        <img id="profile-pic" src="@/assets/images/profile.jpg" alt="Profile" class="d-none d-md-block">
        Hi, I am Róbert.
        Allow me to tell you a short story about me, my approach to
        <b class="hl-color-purple">User Experience design</b>, and how I got into the field.
        <br><br>
        I was very young, in my early teens in fact, when I started developing an affinity for apps in general.
        By continuously playing games, browsing webpages and using programs I was quickly identifying pain points and bugs,
        as well as how new features could improve a given product.
        Based on this, I decided to start studying Computer Science at university, however, after a while,
        I came to the realization that I can't reach my full potential being a developer.
        It was a bit too much, a bit too strict, not enough flexibility.
        During my time at university, I did a course on UI and UX and it immediately caught my attention:
        a job where I can improve a product by enhancing user satisfaction through various areas,
        like designing intuitive UI, examining the user's journey, and so on.
        And there is no "one good answer", but multiple good ones and I can take various routes?
        Well, of course I found it to be the perfect fit for me, so, I began studying by myself.
      </p>
    </section>
    <section class="row">
      <p class="col">
        <img id="satisfaction-pic" src="@/assets/images/user-satisfaction.jpg" alt="User satisfaction" class="d-none d-md-block">
        Here is how I think when helping to create a new product or improving an existing one:
        <b class="hl-color-purple">user happiness comes first</b>.
        Let me elaborate: if a user has a bad experience for the first time when coming across the product,
        they are likely not going to use it for long and/or recommend it to anyone else.
        If a user keeps bumping into issues (no matter how small) while using the product for an extended period of time,
        the chances of them leaving keep increasing.
        This "problem" could be anything: bugs, non-intuitive UI, missing functions, and so on.
        Therefore, it is extremely important to identify these pain points and eliminate them.
        Designing with the user's journey across the product in mind
        (and of course, we have to know who this user is - research, personas!) is the way to get a smile,
        instead of a frown!
      </p>
    </section>
  </main>
</template>

<style scoped>
#profile-pic {
  box-shadow: 0 5px 10px #00000073;
  border-radius: 71px;
  margin-right: 2vw;
  width: 282px;
  height: 403px;
  float: left;
}

#satisfaction-pic {
  box-shadow: 0 5px 10px #00000073;
  border-radius: 70px;
  margin-left: 2vw;
  width: 560px;
  height: 331px;
  float: right;
}

p {
  font-size: 27px;
  line-height: 37px;
}

.container {
  max-width: fit-content;
}

.row {
  position: relative;
  padding: 2em 3vw;
}

.row + .row {
  padding-top: 2em;
  /*border-top: 2px solid #4B006E;*/
}

.row + .row:before {
  content: '';
  background-color: #4B006E;
  position: absolute;
  height: 2px;
  top: -1px;
  left: 3vw;
  right: 3vw;
}
</style>
