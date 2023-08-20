<template>
  <div class="main">
     <div class="main__grid">
         <slot/>
     </div>
 </div>
</template>

<style scoped>
 .main {
   width: 100%;
   padding-top: 24px;
 }

 .main__grid div {
   width: 216px;
   height: 216px;
   background-color: var(--color-gray-1);
 }

 .main__grid {
   max-width: 1200px;
   display: grid;
   place-items: center;
   margin: auto;
   gap: 24px;
   grid-template-columns: repeat(5, 1fr);
 }

/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */

 @media (min-width: 1025px){
 .main__grid {
   max-width: 1200px;
   grid-template-columns: repeat(5, 1fr);
 }
}

@media (min-width: 800px) and (max-width: 1025px){
 .main__grid {
   max-width: 936px;
   grid-template-columns: repeat(4, 1fr);
 }
}

@media (max-width: 690px){
 .main__grid {
   max-width: 456px;
   grid-template-columns: repeat(2, 1fr);
 }
}

@media (min-width: 700px) and (max-width: 910px){
 .main__grid {
   max-width: 696px;
   grid-template-columns: repeat(3, 1fr);

 }
}
</style>
