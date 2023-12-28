<template>
    <div class="w-full flex flex-col gap-5 place-content-center">
        <div class="shadow-sm bg-neutral max-w-[880px] px-10 rounded-md max-md:px-5">
            <header class="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
                <section class="flex flex-col items-stretch w-[79%] max-md:w-full max-md:ml-0">
                    <form class="grow py-5 max-md:max-w-full max-md:mt-10 max-md:pr-5">
                        <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <section class="flex flex-col max-md:w-full max-md:ml-0 items-center">
                                <img loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3dfa67f2b0cecdeeee6e3fbbfccca88facbe0352f8d8770997ff3c51a4d8bbe7?apiKey=2a87045b09624ad1bf395d74cc848b53&"
                                    class="aspect-square object-contain object-center w-[120px] overflow-hidden shrink-0 max-w-full rounded-[50%] max-md:mt-10" />
                            </section>
                            <section class="flex flex-col items-stretch w-[64%] ml-5 max-md:w-full max-md:ml-0 ">
                                <div class="items-stretch flex flex-col my-auto max-md:mt-10">
                                    <h2 class="text-primary text-3xl whitespace-nowrap" aria-label="Upload New Photo">
                                        Upload New Photo
                                    </h2>
                                    <p class="text-primary text-opacity-50 text-xl whitespace-nowrap mt-2.5"
                                        aria-label="file_name.jpg"> file_name.jpg </p>
                                </div>
                            </section>
                        </div>
                    </form>
                </section>
                <section class="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
                    <button
                        class="text-white text-2xl whitespace-nowrap justify-center bg-primary w-full my-auto px-9 py-3 rounded-md border-solid border-indigo-950 max-md:mt-10 max-md:px-5"
                        aria-label="Update"> Update </button>
                </section>
            </header>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>