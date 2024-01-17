<template>
    <form class="flex flex-col w-full xl:w-10/12 gap-5" enctype="multipart/form-data">
        <div class="bg-grey rounded-md border-b-opacity-50 border-b m-5 lg:mx-10 xl:mx-0">
            <slot name="AvatarCard"/>
        </div>
        <div class="bg-grey flex flex-col p-8 rounded-md border-b-opacity-50 border-b mb-12 md:mb-0 ">
            <slot name="Form"/>
        </div>
    </form>
</template>

