<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="card">
      <div class="column col1">
        <img class="image" src="@/assets/images/landingPage/pxa4.png" alt="" />
      </div>
      <div class="column col2">
        <div class="text">
          <span
            >Guiado por tu espíritu indomable y tu valor inquebrantable, te embarcarás en una búsqueda épica que pondrá a prueba tu temple y marcará el destino del reino.
          </span>
          <br />
          <br />
          <span
            >Armado con una espada legendaria y dotado de poderes extraordinarios, te pondrás en la piel de nuestro héroe, listo para enfrentarte a formidables desafíos y desentrañar el intrincado tapiz de un mundo que se tambalea al borde del olvido.</span
          >
        </div>
        <!-- <div class="spriteContainer">
          <div class="sprite1"></div>
          <div class="sprite2"></div>
          <div class="sprite3"></div>
          <div class="sprite4"></div>
        </div> -->
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
  border-radius: 30px 0px 0px 30px;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%);
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 3%, rgba(0, 0, 0, 0.65) 20%);
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
