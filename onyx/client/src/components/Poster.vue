<template>
  <div class="card m-3" style="width: 150px;">
    <img :src="`${bck}`" onerror="this.src='http://localhost:5000/static/p_def.png'" class="card-image-top hover-zoom" style="height: 220px;">
    <div class="card-body">
      
      <h6 class="card-text text-center">{{title}}</h6>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Poster',
  props: {
    title: String,
    bck: String
  }
}
</script>

<style scoped>
  .card{
    transition: .3s;
    background-color: #404040;
    border-color: #0D0D0D;
    border-radius: 0%;
    border-width: 2px;
  }
  .card:hover{
    transform: scale(1.05);
    box-shadow: 4px 4px 3px #F24405;
  }
  h6{
    color: #F24405;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 130px;
  }
</style>>
