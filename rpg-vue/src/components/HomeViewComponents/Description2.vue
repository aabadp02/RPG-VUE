<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="card">
      <div class="column col2">
        <div class="text">
          <span
            >Atraviesa vibrantes paisajes adornados con imponentes castillos, frondosos bosques y
            desolados páramos, cada uno con sus secretos y desafíos.
          </span>
          <br />
          <br />
          <span
            >Con su fascinante estética pixel art, Room Heroes te transporta a la edad de oro de los
            videojuegos, donde cada píxel rebosa detalles intrincados y nostalgia.
          </span>
        </div>
        <!-- <div class="spriteContainer">
          <div class="sprite1"></div>
          <div class="sprite2"></div>
          <div class="sprite3"></div>
          <div class="sprite4"></div>
        </div> -->
      </div>
      <div class="column col1">
        <img class="image" src="@/assets/images/landingPage/pxa2.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  /* background-color: rgb(228, 114, 114); */
  display: flex;
  justify-content: center;
  color: white;
  margin: 4rem 0rem 4rem 0rem;
}
.card {
  width: 60%;
  flex-flow: row;
  display: flex;
  max-height: 100%;
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin-inline: 20px;
  max-width: 100%;
}
.col1 {
  /* background-color: green; */
  width: 50%;
  height: 100%;
}
.image {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  border-radius: 0px 30px 30px 0px;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 0) 3%, rgba(0, 0, 0, 0.65) 20%);
  transition: 0.3s;
  filter: brightness(1.3);
}
.image:hover {
  transform: scale(1.1);
}
.col2 {
  /* background-color: rgb(79, 79, 6); */
  padding-top: 15px;
  overflow: hidden;
}
.text {
  font-family: 'Press Start 2P';
  user-select: none;
  overflow: hidden;
}

.spriteContainer {
  margin-top: 10%;
  /* background-color: rgb(228, 114, 114); */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.sprite1,
.sprite2,
.sprite3,
.sprite4 {
  background-image: url('../../assets/images/items-spritesheet.png');
  background-repeat: no-repeat;
  transition: 0.3s;
  transform: scale(1.3);
}
.sprite1:hover,
.sprite2:hover,
.sprite3:hover,
.sprite4:hover {
  transform: scale(1.6);
}
.sprite1 {
  width: 48px;
  height: 24px;
  background-position: -527px -188px;
}
.sprite2 {
  width: 39px;
  height: 48px;
  background-position: -485px -230px;
}
.sprite3 {
  width: 48px;
  height: 48px;
  background-position: -586px -382px;
}
.sprite4 {
  width: 50px;
  height: 48px;
  background-position: -574px -574px;
}
</style>
