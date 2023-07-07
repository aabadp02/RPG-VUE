<script setup lang="ts"></script>

<template>
  <div class="main-description">
    <div class="texto-ppal fade-in-left">
      <p class="title text-pop-up-top">
        Room<br />
        Heroes
      </p>
      <p class="subtitle">~ A pixel adventure ~</p>
      <hr class="divider" />
      <p class="description">
        Bienvenido al mundo de Room Heroes, un reino rebosante de magia, misterio y aventuras sin
        fin. En este cautivador juego de pixel art, embárcate en un extraordinario viaje que te
        transportará a un reino más allá de la imaginación. Cuando te pongas en la piel de nuestro
        intrépido héroe, prepárate para dejarte llevar por los vívidos paisajes, las antiguas ruinas
        y las fantásticas criaturas que habitan este maravilloso universo.
      </p>
      <div class="botones">
        <div class="loginButton">
          <button>
            <div class="loginButtonIcon">
              <img src="@/assets/images/landingPage/users.png" alt="" style="height: 1.5rem" />
            </div>
            <span>Login</span>
          </button>
        </div>
        <div class="playButton">
          <button>
            <div class="playButtonIcon">
              <img src="@/assets/images/landingPage/sword.png" alt="" style="height: 1.5rem" />
            </div>
            <span>Jugar</span>
          </button>
        </div>
      </div>
    </div>
    <img alt="" class="main-image fade-in" src="@/assets/images/landingPage/pxa1.png" />
  </div>

  <div class="to-scroll-down">
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z"
        fill="currentColor"
      />
    </svg>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
/* @import url('https://unpkg.com/css.gg@2.0.0/icons/css/arrow-down.css'); */

.main-description {
  margin: 2% 2% 0% 0%;
  display: flex;
  background-color: #031118;
  color: white;
  user-select: none;
}

.texto-ppal {
  padding: 5% 5% 2% 5%;
  font-family: 'Press Start 2P';
}
.title {
  color: white;
  text-align: center;
  font-size: 400%;
  margin: 0 0 0 0;
}

.subtitle {
  text-align: center;
  margin-bottom: 10%;
}
.divider {
  background-color: rgb(106, 106, 106);
  width: 60%;
  height: 0.5%;
  border: none;
  border-radius: 2px;
  margin-bottom: 5%;
  margin-left: 20%;
}
.description {
  line-height: 1.5rem;
  padding-left: 4%;
  color: white;
}

.loginButton,
.playButton {
  padding-inline: 5%;
}
.botones {
  /* background: yellow; */
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 5%;
}
.loginButtonIcon img,
.playButtonIcon img {
  filter: invert(100%);
}
button {
  font-family: inherit;
  font-size: 1rem;
  background: linear-gradient(to bottom, #4dc7d9 0%, #1774f7 100%);
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button img {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .loginButtonIcon,
button:hover .playButtonIcon {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover img {
  transform: translateX(2.7em) scale(1.1);
}

button:hover span {
  transform: translateX(9em);
}

button:active {
  transform: scale(0.9);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.2em);
  }

  to {
    transform: translateY(-0.2em);
  }
}

.main-image {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  border-radius: 30px;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 3%, rgba(0, 0, 0, 0.65) 20%);
}
.to-scroll-down {
  max-width: 2.5rem;
  margin: 0.8% 0% 0% 50%;
  transform: scale(var(--ggs, 1));
  animation: shake-vertical 4s infinite alternate-reverse both;
}
@keyframes shake-vertical {
  0%,
  100% {
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateY(-8px);
  }
  20%,
  40%,
  60% {
    transform: translateY(8px);
  }
  80% {
    transform: translateY(6.4px);
  }
  90% {
    transform: translateY(-6.4px);
  }
}


.fade-in-left {
  animation: fade-in-left 1.5s cubic-bezier(0.39, 0.575, 0.565, 1);
}
@keyframes fade-in-left {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.fade-in {
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.text-pop-up-top {
	animation: text-pop-up-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s both;
}
@keyframes text-pop-up-top {
  0% {
    transform: translateY(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    transform: translateY(-20px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}

</style>
