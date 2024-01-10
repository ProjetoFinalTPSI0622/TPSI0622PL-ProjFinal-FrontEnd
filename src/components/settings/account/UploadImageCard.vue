<template>
    <div class="w-full flex flex-col place-content-center mt-5">
        <div class="bg-grey m-5 px-10 md:px-0 rounded-md max-md:px-5 border-b-opacity-50 border-b">
            <div class="flex gap-5 max-md:flex-col p-3">
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
                <section class="flex flex-col justify-center items-center md:w-[20%]  max-md:w-full max-md:ml-0">
                    <button
                        class="text-white text-lg font-bold bg-purple w-36 md:w-full px-9 py-3 rounded-md max-md:mb-5 max-md:px-5 md:justify-center md:px-3"
                        aria-label="Update"> Update 
                    </button>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import DisplayImage from './DisplayImage.vue';

export default {
    components: { 
        DisplayImage 
    }
}
</script>
