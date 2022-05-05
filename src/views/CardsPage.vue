<template>
  <section class="cards" >
    <div class="card" v-for="post in allPosts" :key="post.id"> 
      <div class="card-hader">
        <div class="card-header_title title">Lorem ipsum</div>
      </div>
      <div class="card-body">
        <span class="card-body_title subtitle"></span>
        <input type="text" class="card-body__input">
        <span class="card-body__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti animi ipsa quas quaerat hic in a vero, rerum doloremque voluptatibus obcaecati? Illo vel quasi natus commodi magnam consequatur veritatis.</span>
      </div>
      <div class="card-footer">
        <button class="primary">Reade more...</button>
        <button class="primary">Delet card</button>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default{
computed:  mapGetters(['allPosts'])

}
</script>

<style>
  .cards{
    width: 100%;
    height: 100%;
    background: rgb(205, 202, 220);
    padding: 2rem;
    gap: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
    grid-template-rows: repeat(auto-fit, minmax(80px, min-content));
  }
  .card{
    border-radius: 5px;
    background: rgb(31, 31, 33);
    color: rgb(212, 222, 217);
    box-shadow: 6px 5px 17px 0px rgba(36, 135, 212, 0.5);
    padding: 1rem;
    display: grid;
    gap: 0.5rem;
    
  }
  .card-header_title{
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  .card-body{
    display: grid;
    gap: 0.5rem;
  }
  .card-footer{
    display: flex;
    justify-content: space-between;
  }
</style>