<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="card">
      <div class="column col1">
        <img class="image" src="@/assets/images/landingPage/pxa3.png" alt="" />
      </div>
      <div class="column col2">
        <div class="text">
          <span
            >En Room Heroes, navegarás por un extenso mundo repleto de secretos que esperan ser
            desvelados. Es una tierra repleta de personajes fascinantes, con sus propias historias.
          </span>
          <br />
          <br />
          <span
            >Encuentra tesoros ocultos y objetos clave que te ayudarán durante la aventura.</span
          >
          <div class="spriteContainer">
            <div class="sprite1"></div>
            <div class="sprite2"></div>
            <div class="sprite3"></div>
            <div class="sprite4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
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
}
.column {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin-inline: 20px;
}
.col1 {
  /* background-color: green; */
  width: 50%;
}
.image {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  border-radius: 30px 0px 0px 30px;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 3%, rgba(0, 0, 0, 0.65) 20%);
  transition: 0.3s;
}
.image:hover{
  transform: scale(1.1);
}
.col2 {
  /* background-color: rgb(79, 79, 6); */
  padding-top: 15px;
}
.text {
  font-family: 'Press Start 2P';
  user-select: none;
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
