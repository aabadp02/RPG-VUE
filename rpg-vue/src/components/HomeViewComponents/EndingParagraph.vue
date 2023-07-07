<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="text">
      <span
        >¿Estás listo para embarcarte en una extraordinaria odisea por el vibrante mundo de Room
        Heroes? Prepárate para dejarte cautivar por las maravillas pixeladas que te aguardan,
        mientras descubres los secretos, luchas contra las fuerzas de la oscuridad y te conviertes
        en un auténtico héroe en este inolvidable reino de fantasía. <br /><br />
        Tu aventura comienza ahora.</span
      >
    </div>
  </div>
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
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
.container {
  display: flex;
  justify-content: center;
}
.text {
  width: 50%;
  font-family: 'Press Start 2P';
  color: white;
  text-align: center;
}

.loginButton,
.playButton {
  padding-inline: 3%;
}
.botones {
  /* background: yellow; */
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3%;
  padding-bottom: 10%;
}
.loginButtonIcon img,
.playButtonIcon img {
  filter: invert(100%);
}
button {
  font-family: 'Press Start 2P';
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
</style>
