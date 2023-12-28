<template>
    <div class="shadow-sm bg-neutral flex max-w-[880px] flex-col px-16 py-12 rounded-md max-md:px-5">
        <header class="text-primary text-3xl font-bold max-md:max-w-full">User Information</header>
        <div class="items-stretch flex justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
            <div class="items-stretch flex grow basis-[0%] flex-col">
                <div class="text-alternative text-base">Full Name*</div>
                <div
                    class="justify-center text-primary text-2xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-primary">
                    Antonio Jaquim Ferreira
                </div>
            </div>
            <div class="items-stretch flex grow basis-[0%] flex-col">
                <div class="text-alternative text-base">Email*</div>
                <div
                    class="justify-center text-primary text-2xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-primary">
                    antoniojaquim@cesae.pt
                </div>
            </div>
        </div>
        <div class="text-alternative text-base mt-8 max-md:max-w-full">Address*</div>
        <div
            class="justify-center text-primary text-2xl items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-primary max-md:max-w-full">
            4612 Araújo Travessa, Samora Correia, TX 0642
        </div>
        <div class="items-stretch flex justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
            <div class="items-stretch flex grow basis-[0%] flex-col">
                <div class="text-alternative text-base">City*</div>
                <div
                    class="justify-center text-primary text-2xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-primary">
                    Porto
                </div>
            </div>
            <div class="items-stretch flex grow basis-[0%] flex-col">
                <div class="text-alternative text-base">State/Province*</div>
                <div
                    class="justify-center text-primary text-2xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-primary">
                    Vila Nova de Gaia
                </div>
            </div>
        </div>
        <div class="items-stretch flex justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
            <div class="items-stretch flex grow basis-[0%] flex-col">
                <div class="text-alternative text-base">Zip Code*</div>
                <div
                    class="justify-center text-primary text-2xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-primary">
                    4400-345
                </div>
            </div>
            <div class="items-stretch flex grow basis-[0%] flex-col">
                <div class="text-alternative text-base">Country*</div>
                <div
                    class="justify-center items-stretch border bg-white flex gap-2.5 pl-2.5 pr-5 py-1.5 rounded-xl border-solid border-primary">
                    <div class="items-center self-center flex aspect-[1.25] flex-col justify-center my-auto py-1">
                        <div
                            class="flex-col fill-green-900 overflow-hidden relative flex aspect-[1.6666666666666667] w-[30px] justify-center items-center pl-1.5">
                            <img />
                            <img />
                        </div>
                    </div>
                    <div class="justify-center text-primary text-2xl grow shrink basis-auto">Portugal</div>
                    <img />
                </div>
            </div>
        </div>
        <button
            class="text-white text-center text-2xl font-bold whitespace-nowrap justify-center items-center bg-primary mt-8 mb-4 px-16 py-3 rounded-xl max-md:max-w-full max-md:px-5">
            Update Information
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>