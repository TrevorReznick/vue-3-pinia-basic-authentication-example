<script setup>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

import { useAuthStore } from "@/stores";

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

function onSubmit(values, { setErrors }) {
  const authStore = useAuthStore();
  const { username, password } = values;

  return authStore
    .login(username, password)
    .catch((error) => setErrors({ apiError: error }));
}
</script>
<template>
  <div class="login-view-container">
    <div class="login-view-header">
      <header
        data-thq="thq-navbar"
        class="navbarContainer login-view-navbar-interactive"
      >
        <span class="logo">rankup inside</span>
        <div data-thq="thq-navbar-nav" class="login-view-desktop-menu">
          <nav class="login-view-links"></nav>
          <div class="login-view-buttons">
            <button class="login-view-login buttonFlat">Login</button>
            <button class="buttonFilled">Register</button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="login-view-burger-menu">
          <svg viewBox="0 0 1024 1024" class="login-view-icon socialIcons">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          class="login-view-mobile-menu1 mobileMenu"
        >
          <div class="login-view-nav">
            <div class="login-view-top">
              <span class="logo">LOGINO</span>
              <div data-thq="thq-close-menu" class="login-view-close-menu">
                <svg
                  viewBox="0 0 1024 1024"
                  class="login-view-icon02 socialIcons"
                >
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                  ></path>
                </svg>
              </div>
            </div>
            <nav class="login-view-links1">
              <span class="login-view-nav12 bodySmall">Home</span>
              <span class="login-view-nav22 bodySmall">Login</span>
              <span class="login-view-nav32 bodySmall">Sign Up</span>
            </nav>
            <div class="login-view-buttons1">
              <button class="buttonFlat">Login</button>
              <button class="buttonFilled">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="login-view-icon04 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              class="login-view-icon06 socialIcons"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path></svg>

            <svg viewBox="0 0 602.2582857142856 1024" class="login-view-icon08 socialIcons">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
    <div class="login-view-hero">
      <div class="heroContainer login-view-hero1">
        <div class="login-view-container1">
          <div class="login-view-feature-card">
            <svg viewBox="0 0 1024 1024" class="login-view-icon10">
              <path
                d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"
              ></path>
            </svg>
            <Form @submit="onSubmit">
              <h2 class="login-view-text">App Login</h2>
              <span class="login-view-text1">Inserisci le credenziali</span>
              <div class="login-view-container2">               
                <label class="login-view-text2">Email</label>
                <Field
                  name="username"
                  type="text"
                  placeholder="email"
                  class="login-view-textinput input form control"
                />              
                <label>Password</label>
                <Field 
                  name="password" 
                  type="password"
                  placeholder="password"
                  class="login-view-textinput1 input form-control"                                
                />                
              </div>              
              <button                             
                class="login-view-hero-button1 buttonFilled"               
              >Login
              </button>              
            </Form>
          </div>
                               
        </div>
      </div>
    </div>
    <div class="login-view-footer">
      <footer class="footerContainer login-view-footer1">
        <div class="login-view-separator"></div>
        <div class="login-view-container4">
          <span class="bodySmall login-view-text4">
            © 2023 myCompany, All Rights Reserved.
          </span>
          <div class="login-view-icon-group1">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              class="login-view-icon12 socialIcons"
            >
              <path
                d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"
              ></path></svg
            ><svg
              viewBox="0 0 877.7142857142857 1024"
              class="login-view-icon14 socialIcons"
            >
              <path
                d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
              ></path></svg
            ><svg
              viewBox="0 0 602.2582857142856 1024"
              class="login-view-icon16 socialIcons"
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
  
  <script>
export default {
  name: "LoginView",
  props: {},
  metaInfo: {
    title: "LoginView - Handmade Sane Eland",
    meta: [
      {
        property: "og:title",
        content: "LoginView - Handmade Sane Eland",
      },
    ],
  },
};
</script>

<style scoped>
.login-view-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.login-view-header {
  width: 100%;
  display: flex;
  z-index: 100;
  position: fixed;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.login-view-desktop-menu {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.login-view-links {
  flex: 1;
  display: flex;
  align-items: center;
  border-color: rgba(120, 120, 120, 0.4);
  border-style: dashed;
  border-width: 0px;
  flex-direction: row;
  justify-content: center;
}
.login-view-buttons {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.login-view-login {
  margin-right: 32px;
}
.login-view-burger-menu {
  display: none;
}
.login-view-icon {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.login-view-mobile-menu1 {
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
.login-view-nav {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.login-view-top {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: var(--dl-space-space-threeunits);
  justify-content: space-between;
}
.login-view-close-menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-view-icon02 {
  width: var(--dl-size-size-xsmall);
  cursor: pointer;
  height: var(--dl-size-size-xsmall);
}
.login-view-links1 {
  flex: 0 0 auto;
  display: flex;
  align-self: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.login-view-nav12 {
  margin-bottom: var(--dl-space-space-unit);
}
.login-view-nav22 {
  margin-bottom: var(--dl-space-space-unit);
}
.login-view-nav32 {
  margin-bottom: var(--dl-space-space-unit);
}
.login-view-buttons1 {
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.login-view-icon04 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.login-view-icon06 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
  margin-right: var(--dl-space-space-twounits);
}
.login-view-icon08 {
  width: var(--dl-size-size-xsmall);
  height: var(--dl-size-size-xsmall);
}
.login-view-hero {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 96px;
  align-items: flex-start;
  justify-content: center;
}
.login-view-container1 {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 977px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.login-view-feature-card {
  width: 537px;
  height: 490px;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  border-color: var(--dl-color-gray-black);
  border-style: ridge;
  border-width: 1px;
  flex-direction: column;
  background-color: rgba(138, 200, 237, 0.17);
}
.login-view-icon10 {
  fill: var(--dl-color-gray-500);
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
}
.login-view-text {
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  text-align: center;
  font-weight: 500;
  margin-bottom: var(--dl-space-space-unit);
}
.login-view-text1 {
  color: var(--dl-color-gray-700);
  text-align: center;
}
.login-view-container2 {
  width: 302px;
  height: 53px;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  justify-content: center;
}
.login-view-text2 {
  font-size: 18px;
  text-align: left;
  font-family: "Inter";
  margin-right: var(--dl-space-space-oneandhalfunits);
}
.login-view-textinput {
  width: 135px;
  height: 50%;
}
.login-view-container3 {
  width: 302px;
  height: 53px;
  display: flex;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  justify-content: center;
}
.login-view-text3 {
  font-size: 18px;
  text-align: left;
  font-family: "Inter";
  margin-right: var(--dl-space-space-oneandhalfunits);
}
.login-view-textinput1 {
  width: 135px;
  height: 50%;
}
.login-view-hero-button1 {
  margin-top: var(--dl-space-space-twounits);
  text-decoration: none;
}
.login-view-footer {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-view-separator {
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
.login-view-container4 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.login-view-icon-group1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.login-view-icon12 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.login-view-icon14 {
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-twounits);
}
.login-view-icon16 {
  width: 24px;
  height: 24px;
}
@media (max-width: 991px) {
  .login-view-hero1 {
    flex-direction: column;
  }
  .login-view-container1 {
    align-items: center;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-twounits);
    padding-right: 0px;
  }
}
@media (max-width: 767px) {
  .login-view-navbar-interactive {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .login-view-desktop-menu {
    display: none;
  }
  .login-view-burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-view-nav12 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-view-nav22 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-view-nav32 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-view-hero1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .login-view-footer1 {
    padding-left: var(--dl-space-space-twounits);
    padding-right: var(--dl-space-space-twounits);
  }
  .login-view-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .login-view-container4 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .login-view-text4 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
@media (max-width: 479px) {
  .login-view-navbar-interactive {
    padding: var(--dl-space-space-unit);
  }
  .login-view-mobile-menu1 {
    padding: 16px;
  }
  .login-view-hero1 {
    padding-top: var(--dl-space-space-twounits);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-twounits);
  }
  .login-view-container1 {
    margin-bottom: var(--dl-space-space-unit);
  }
  .login-view-footer1 {
    padding: var(--dl-space-space-unit);
  }
  .login-view-separator {
    margin-top: var(--dl-space-space-oneandhalfunits);
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .login-view-container4 {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  .login-view-text4 {
    text-align: center;
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
}
</style>
  
