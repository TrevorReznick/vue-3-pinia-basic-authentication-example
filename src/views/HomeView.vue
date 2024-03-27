<script>
export default {
  name: 'HomeView',
  props: {},
  data() {
    return {
      rawwrtb: ' ',
      raw3goo: ' ',
      raw8ox1: ' ',
      rawbj0n: ' ',
      rawjwnm: ' ',
      raw4vyk: ' ',
      rawg3gc: ' ',
    }
  },
  metaInfo: {
    title: 'Handmade Sane Eland',
    meta: [
      {
        property: 'og:title',
        content: 'Handmade Sane Eland',
      },
    ],
  },
}
</script>

<script setup>
import { storeToRefs } from "pinia";

import { useAuthStore, useUsersStore } from "@/stores";

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();
</script>

<template>
  <div class="home-view-container">
    <div class="home-view-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer home-view-navbar-interactive"
      >
        <span class="logo">rankup inside</span>
        <div data-thq="thq-navbar-nav" class="home-view-desktop-menu">
          <nav class="home-view-links"></nav>
          <div class="home-view-buttons">
            <router-link to="/login" class="home-view-login buttonFlat">
              Login
            </router-link>
            <router-link
              to="/register-view"
              class="home-view-register buttonFilled"
            >
              Register
            </router-link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="home-view-burger-menu">
          <svg viewBox="0 0 1024 1024" class="home-view-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          class="home-view-mobile-menu1 mobileMenu"
        >
          <div class="home-view-nav">
            <div class="home-view-top">
              <span class="logo">LOGINO</span>
              <div data-thq="thq-close-menu" class="home-view-close-menu">
                <svg
                  viewBox="0 0 1024 1024"
                  class="home-view-icon02 socialIcons"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="home-view-links1">
              <span class="home-view-nav12 bodySmall">Home</span>
              <span class="home-view-nav22 bodySmall">Login</span>
              <span class="home-view-nav32 bodySmall">Sign Up</span>
            </nav>
            <div class="home-view-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="home-view-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="home-view-icon06 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="home-view-icon08 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="home-view-hero">
      <div class="home-view-hero1 heroContainer">
        <div class="home-view-container1">
          <h1 class="home-view-hero-heading heading1">
            La tua piattaforma di Blog Competitivo
          </h1>
          <h3 class="home-view-text">Quando le parole fanno la differenza</h3>
          <span class="home-view-hero-sub-heading bodyLarge">
            <span>
              <span>
                <span>Login to your account</span>
                <span><span v-html="rawwrtb"></span></span>
              </span>
              <span>
                <span><span v-html="raw3goo"></span></span>
                <span><span v-html="raw8ox1"></span></span>
              </span>
            </span>
            <span>
              <span>
                <span><span v-html="rawbj0n"></span></span>
                <span><span v-html="rawjwnm"></span></span>
              </span>
              <span>
                <span><span v-html="raw4vyk"></span></span>
                <span><span v-html="rawg3gc"></span></span>
              </span>
            </span>
          </span>
          <div class="home-view-btn-group">
            <router-link
              to="/login"
              class="home-view-hero-button1 buttonFilled"
            >
              Login
            </router-link>
            <router-link
              to="/register-view"
              class="home-view-hero-button2 buttonFlat"
            >
              Register
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="home-view-footer">
      <footer class="footerContainer home-view-footer1">
        <div class="home-view-separator"></div>
        <div class="home-view-container2">
          <span class="bodySmall home-view-text15">
            © 2023 myCompany, All Rights Reserved.
          </span>
          <div class="home-view-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="home-view-icon10 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="home-view-icon12 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="home-view-icon14 socialIcons"
            >
              <path
                d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
              ></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>



<style scoped>
.home-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-view-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.home-view-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.home-view-links {
  flex: 1;
  display: flex;
  align-items: center;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: row;
  justify-content: center;
}
.home-view-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-view-login {
  margin-right: 32px;
  text-decoration: none;
}
.home-view-register {
  text-decoration: none;
}
.home-view-burger-menu {
  display: none;
}
.home-view-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.home-view-mobile-menu1 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: 32px;
  z-index: 100;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
}
.home-view-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-view-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.home-view-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-view-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.home-view-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.home-view-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-view-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-view-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.home-view-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-view-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-view-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.home-view-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.home-view-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.home-view-hero1 {
  background-color: transparent;
}
.home-view-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-view-hero-heading {
  max-width: 800px;
  text-align: center;
}
.home-view-text {
  color: rgba(0, 0, 0, 0.65);
}
.home-view-hero-sub-heading {
  font-size: 18px;
  text-align: center;
}
.home-view-btn-group {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  align-items: center;
  flex-direction: row;
}
.home-view-hero-button1 {
  text-decoration: none;
}
.home-view-hero-button2 {
  text-decoration: none;
}
.home-view-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-view-separator {
  flex: 0 0 auto;
  width: 100%;
  height: 0px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: flex-start;
  margin-left: 0px;
  border-color: var(--dl-color-gray-900);
  border-style: solid;
  border-width: 1px;
  margin-right: 0px;
  margin-bottom: var(--dl-space-space-twounits);
  flex-direction: row;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
}
.home-view-container2 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-view-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-view-icon10 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.home-view-icon12 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.home-view-icon14 {
  width: 24px;
  height: 24px;
}
@media (max-width: 991px) {
  .home-view-hero1 {
    flex-direction: column;
  }
  .home-view-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
  .home-view-hero-heading {
    text-align: center;
  }
  .home-view-hero-sub-heading {
    text-align: center;
    padding-left: var(--dl-space-space-threeunits);
    padding-right: var(--dl-space-space-threeunits);
  }
}
@media (max-width: 767px) {
  .home-view-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-view-desktop-menu {
    display: none;
  }
  .home-view-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-view-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-view-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-view-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-view-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-view-hero-sub-heading {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-view-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .home-view-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-view-container2 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-view-text15 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media (max-width: 479px) {
  .home-view-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .home-view-mobile-menu1 {
    padding: 16px;
  }
  .home-view-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .home-view-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-view-btn-group {
    flex-direction: column;
  }
  .home-view-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .home-view-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .home-view-container2 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .home-view-text15 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
