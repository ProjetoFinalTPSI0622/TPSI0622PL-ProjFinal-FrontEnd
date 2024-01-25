<template>
    <div class="bg-white flex w-full h-[8vh] px-5 shadow-md place-content-between">

        <img src="../../assets/logo.png">

        <div class="flex flex-row h-full py-3.5 justify-end items-center sm:gap-4 ">

            <div
                class="bg-purple flex flex-row h-full rounded-3xl items-center justify-center px-3 py-4 sm:p-5 hoverBlue">
                <img class="object-cover w-7 sm:min-w-8" src="../../assets/Bell.svg">
            </div>

            <div
                class="relative bg-purple hidden md:flex flex-row h-full rounded-3xl items-center content-between py-5 pl-2 sm:gap-3 sm:pl-5 hoverBlue">
                <input type="checkbox" id="sortbox" class="hidden absolute">
                <label for="sortbox" class="flex items-center space-x-1 cursor-pointer">
                    <img src="../../assets/Chevron Down.svg">
                    <p class="hidden sm:block text-white text-xl">Jorge Alberto</p>
                    <img class="w-12" src="../../assets/Ellipse 5.svg">
                </label>

                <!-- <div id="sortboxmenu"
                    class="absolute w-[80%] top-full min-w-max shadow rounded-2xl rounded-t-none opacity-0 bg-purple transition ease-in-out z-10">
                    <ul class="block text-right text-white">
                        <li><a href="#" class="block px-3 py-2 hoverPurpleLight">yooooo</a></li>
                        <li><a href="#" class="block px-3 py-2 hoverPurpleLight">yooooo</a></li>
                        <li><a href="#" class="block px-3 py-2 hoverPurpleLight">yooooo</a></li>
                        <li><a href="#" class="block px-3 py-2 hoverPurpleLight rounded-2xl rounded-t-none">yooooo</a></li>
                    </ul>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
#sortbox:checked~#sortboxmenu {
    opacity: 1;
}
</style>