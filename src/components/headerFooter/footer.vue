<script setup>


</script>

<template>
  <footer>
    <div>
      <div class="socialNetworkLinks">
        <img src="../../assets/icons/instagram.svg" alt="instagram" width="30" height="30" />
        <p>instagram/be-queen.fr</p>
      </div>
      <div class="socialNetworkLinks marginTop">
        <img src="../../assets/icons/facebook.svg" alt="facebook" width="30" height="30" />
        <p>facebook/be-queen.fr</p>
      </div>
    </div>
    <div>
      <div class="socialNetworkLinks">
        <img src="../../assets/icons/linkedin.svg" alt="linkedin" width="30" height="30" />
        <p>linkedin/be-queen.fr</p>
      </div>
      <div class="socialNetworkLinks marginTop">
        <img src="../../assets/icons/adress.svg" alt="adress" width="30" height="30" />
        <p>adress/be-queen.fr</p>
      </div>
    </div>
    <p>&copy; copyright by be queen team</p>
    <div>
      <p>linkedin@gmail.fr</p>
      <p class="marginTop">06 01 23 45 67</p>
    </div>
  </footer>
</template>

<style scoped>

footer {
  background-color: var(--black);
  height: 100px;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
  top: calc(100vh - 100px);
}

.socialNetworkLinks {
  display: flex;
  align-items: center;
}

.socialNetworkLinks > img {
  margin-right: 10px;
}

.marginTop {
  margin-top: 10px;
}
</style>
