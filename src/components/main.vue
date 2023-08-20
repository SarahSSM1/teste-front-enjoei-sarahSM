<template>
  <div class="c-main">
     <div class="c-main__grid">
         <slot />
     </div>
</div>
</template>

<style scoped>
 .c-main {
     padding-top: 24px;
     width: 100%;
 }

 .c-main__grid {
     margin: auto;
     max-width: 1200px;
     display: grid;
     grid-template-columns: repeat(5, 1fr);
     place-items: center;
     gap: 24px;
 }

 .c-main__grid div {
     width: 216px;
     height: 216px;
     background-color: var(--color-gray-1);
 }

@media (max-width: 699px){
 .c-main__grid {
     grid-template-columns: repeat(2, 1fr);
      max-width: 456px;
 }
}
@media (min-width: 700px) and (max-width: 799px){
 .c-main__grid {
     grid-template-columns: repeat(3, 1fr);
     max-width: 696px;
 }
}

@media (min-width: 800px) and (max-width: 1024px){
 .c-main__grid {
    grid-template-columns: repeat(4, 1fr);
    max-width: 936px;
 }
}

@media (min-width: 1025px){
 .c-main__grid {
    grid-template-columns: repeat(5, 1fr);
    max-width: 1200px;
 }
}

</style>
