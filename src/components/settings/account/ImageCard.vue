<template>
    <div class="w-full flex flex-col place-content-center mt-5">
        <div class="bg-grey m-5 px-10 md:px-0 rounded-md max-md:px-5 border-b-opacity-50 border-b">
            <div class="flex gap-5 max-md:flex-col p-5">
                <section class="flex flex-col w-[80%] max-md:w-full max-md:ml-0">
                    <div class="grow max-md:max-w-full max-md:mt-5">
                        <div class="gap-5 flex max-md:flex-col">
                            <DisplayImage />
                            <section class="flex flex-col w-[64%] ml-5 max-md:w-full max-md:ml-0">
                                <div class="flex flex-col my-auto max-md:mt-5 items-center md:items-start">
                                    <h2 class="text-primary text-2xl">
                                        Upload New Photo
                                    </h2>
                                    <p class="text-primary text-opacity-50 text-base whitespace-nowrap mt-2.5"
                                        aria-label="file_name.jpg"> file_name.jpg </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <div class="flex justify-center mx-10" >
                    <ButtonSubmit textButton="Update" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DisplayImage from './DisplayImage.vue';
import ButtonSubmit from '../../ButtonSubmit.vue';

export default {
    components: {
        DisplayImage,
        ButtonSubmit
    }
}
</script>
