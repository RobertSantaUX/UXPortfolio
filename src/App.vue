<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand element-dark">
      <span class="spacer"></span>
      <router-link class="btn btn-nav" style="font-size:32px;line-height:39px;" to="/">Róbert Sánta</router-link>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="btn btn-nav" to="/projects" exact>Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-nav" to="/introduction" exact>Introduction</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-nav" to="/contact" exact>Contact</router-link>
        </li>
      </ul>
      <span class="spacer"></span>
    </nav>
    <router-view/>
    <footer id="footer" class="fixed-bottom text-center py-3 element-dark">
      <router-link id="copyright" to="/">© 2020 Copyright: <span class="hl-color-blue">Róbert Sánta</span></router-link>
    </footer>
  </div>
</template>

<style scoped>
#app {
  font: normal normal normal 26px/37px Corbel;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#copyright {
  font-size: 26px;
  line-height: 37px;
  padding: 0 0.8em 0 0.8em;
  color: inherit;
  text-decoration: inherit;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}

li > .btn.router-link-exact-active {
  background-color: #E6E6E6;
  color: #2A2A2A;
}

.btn.router-link-exact-active:hover {
  cursor: unset;
}
</style>
