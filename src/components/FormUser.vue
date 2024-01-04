<template>
    <div class="shadow-sm bg-grey flex max-w-[880px] flex-col px-10 py-8 rounded-md max-md:px-5 border-b-opacity-50 border-b">
        <h1 class="text-purple text-3xl font-bold max-md:max-w-full ">User Information</h1>
        <div class="flex justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
            <div class=" flex grow basis-[0%] flex-col">
                <label class="text-pink text-sm">Full Name*</label>
                <input type="name" placeholder="Insert your name" required v-model="name"
                    class="justify-center text-purple text-xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-purple">
            </div>
            <div class="items-stretch flex grow basis-[0%] flex-col">
                <label class="text-pink text-sm">Email*</label>
                <input type="email" placeholder="Insert your email" required v-model="email"
                    class="justify-center text-purple text-xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-purple">
            </div>
        </div>
        <div class=" flex grow basis-[0%] flex-col">
            <label class="text-pink text-sm mt-5">Address*</label>
            <input type="text" placeholder="Insert your address" required v-model="address"
            class="flex-wrap justify-center text-purple text-xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-purple max-md:max-w-full">
        </div>

        <!-- <div
            class="justify-center text-purple text-xl items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-purple max-md:max-w-full">
            4612 Araújo Travessa, Samora Correia, TX 0642
        </div> -->

        <div class="items-stretch flex justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
            <div class=" flex grow basis-[0%] flex-col">
                <label class="text-pink text-sm">City*</label>
                <input type="text" placeholder="Insert your city" required v-model="city"
                    class="justify-center text-purple text-xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-purple">
            </div>
            <div class="items-stretch flex grow basis-[0%] flex-col">
                <label class="text-pink text-sm">State/Province*</label>
                <input type="text" placeholder="Insert your state/province" required v-model="state"
                    class="justify-center text-purple text-xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-purple">
            </div>
        </div>
        <div class="items-stretch flex justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
            <div class=" flex grow basis-[0%] flex-col">
                <label class="text-pink text-sm">Zip Code*</label>
                <input type="number" placeholder="Insert your zip code" required v-model="zipCode"
                    class="justify-center text-purple text-xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-purple">
            </div>
            <div class="items-stretch flex grow basis-[0%] flex-col">
                <label class="text-pink text-sm">Country*</label>
                <input type="text" placeholder="Insert your country" required v-model="country"
                    class="justify-center text-purple text-xl whitespace-nowrap items-stretch border bg-white pl-2.5 py-1.5 rounded-xl border-solid border-purple">
            </div>
        </div>
        <button type="submit" class="text-white text-center text-xl mx-10 md:mx-0 font-bold whitespace-nowrap justify-center items-center bg-purple mt-8 mb-4 px-16 py-3 rounded-md max-md:max-w-full max-md:px-5">
            Update Information
        </button>
    </div>
</template>

<script>
export default {
    name: 'FormInfo',
    data() {
        return {
            name: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
        }
    },
}
</script>

<style lang="scss" scoped>

</style>