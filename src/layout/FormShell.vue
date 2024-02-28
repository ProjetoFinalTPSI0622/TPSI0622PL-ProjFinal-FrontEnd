<template>
    <form @submit.prevent="$emit('formSubmit')" class="flex flex-col w-full h-full md:overflow-y-scroll 2xl:overflow-hidden md:p-3 xl:px-20" enctype="multipart/form-data">
        <div class="bg-grey rounded-md border-b-opacity-50 border-b my-5 lg:mx-10 xl:mx-0 xl:mt-0">
            <slot name="AvatarCard"/>
        </div>
        <div class="bg-grey flex flex-col p-8 rounded-md border-b-opacity-50 border-b mb-12 md:mb-0 m-5 lg:mx-10 xl:m-0">
            <slot name="Form"/>
        </div>
    </form>
</template>

