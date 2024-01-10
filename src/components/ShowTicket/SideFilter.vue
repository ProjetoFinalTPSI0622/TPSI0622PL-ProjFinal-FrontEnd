<template>
    <div class="flex flex-col w-[20%]">
        <div class=" bg-grey flex flex-col flex-grow border-r-black border-r border-solid">
            <div class="justify-center flex flex-col px-5 py-5 border-b-black border-b border-solid">
                <span class="justify-between flex gap-5">
                    <div class="text-purple text-2xl">Tickets</div>
                    <span class="text-white text-xl justify-center bg-purple px-3 rounded-2xl">+ New ticket</span>
                </span>
            </div>
            <div class="flex flex-col p-5 gap-4">
                <span
                    class="border bg-white flex justify-between px-2.5 rounded-xl border-solid border-black border-opacity-20">
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8924cf9b87a9ac8c714bc39eb9f2f1e4dbacd969a523930ca05221671cf2023?apiKey=a9b902b8934746c7aacbbad131e88c89&"
                        class="aspect-square object-contain object-center" />
                    <div class="text-black text-opacity-10 text-xl self-center">
                        Search all tickets...
                    </div>
                </span>
                <div class=" flex flex-col px-4 gap-4">
                    <span
                        class="text-pink-600 text-xl justify-center py-3.5 border-b-purple border-b-opacity-30 border-b border-solid">
                        All tickets
                    </span>
                    <div
                        class="justify-center py-3.5 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                        <span class="justify-between flex gap-0">
                            <div class="text-purple text-xl  whitespace-nowrap">
                                Assigned to me
                            </div>
                            <span
                                class="text-white text-xl whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span>
                    </div>
                    <div
                        class="justify-center py-3.5 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                        <span class="justify-between  flex gap-0">
                            <div class="text-purple text-xl  whitespace-nowrap">
                                My open tickets
                            </div>
                            <span
                                class="text-white text-xl whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span>
                    </div>
                    <div class="justify-center flex flex-col gap-6 pt-2">
                        <span class="justify-between  flex gap-0">
                            <div class="text-purple text-xl  whitespace-nowrap">
                                Pending
                            </div>
                            <span
                                class="text-white text-xl whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span><span class="justify-between flex">
                            <div class="text-purple text-xl">Unassigned</div>
                            <span
                                class="text-white text-xl whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span><span class="justify-between flex gap-0">
                            <div class="text-purple text-xl whitespace-nowrap">
                                Assigned
                            </div>
                            <span
                                class="text-white text-xl whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span><span class="justify-between flex gap-0">
                            <div class="text-purple text-xl whitespace-nowrap">
                                In Progress
                            </div>
                            <span
                                class="text-white text-xl whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span><span class="justify-between flex gap-0">
                            <div class="text-purple text-xl whitespace-nowrap">
                                Completed
                            </div>
                            <span
                                class="text-white text-xl whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span><span class="justify-between flex gap-0">
                            <div class="text-purple text-xl whitespace-nowrap">
                                Solved
                            </div>
                            <span
                                class="text-white text-xl whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>