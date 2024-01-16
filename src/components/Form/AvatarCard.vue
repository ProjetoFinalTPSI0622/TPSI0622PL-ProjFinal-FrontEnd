<!-- <template>
    <AvatarCardShell>
        <template v-slot:AvatarCard>
            <div class="flex flex-col gap-5 p-5 xl:w-full">
                <div class="flex flex-col gap-5 md:flex-row lg:text-nowrap">
                    <div class="flex flex-col w-full max-md:ml-0 items-center justify-center md:w-32">
                        <img loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&"
                            class="aspect-square object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full rounded-[50%] " />
                    </div>
                    <div class="flex flex-col items-center md:items-start md:justify-center">
                        <h2 class="text-primary text-xl">Upload New Photo</h2>
                        <p class="text-primary text-opacity-50 text-base mt-2.5">{{ FileName }}</p>
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:ButtonSubmit>
            <div class="flex justify-center mx-16 md:mx-28 lg:mx-10 lg:my-auto lg:w-full">
                <ButtonSubmit textButton="Choose Image" />
            </div>
        </template>
    </AvatarCardShell>
</template>

<script>
import AvatarCardShell from '../../layout/AvatarCardShell.vue';
import ButtonSubmit from './ButtonSubmit.vue';

export default {
    components: {
        AvatarCardShell,
        ButtonSubmit
    },
    data() {
        return {
            FileName: 'No file selected'
        }
    },
}
</script> -->


<template>
    <div>
      <input type="file" @change="handleImageChange" accept="image/*">
      <img v-if="imagePreview" :src="imagePreview" alt="Avatar Preview">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imagePreview: '../src',
      };
    },
    methods: {
      handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
          this.imagePreview = URL.createObjectURL(file);
          // Pode emitir um evento aqui para notificar o componente pai sobre a mudança na imagem.
          // this.$emit('image-selected', file);
        }
      },
    },
  };
  </script>