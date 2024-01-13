<template>
    <div class="hidden lg:flex flex-col xl:w-[20%]">
        <div class=" bg-grey flex flex-col flex-grow border-r-black border-r border-solid">
            <div class="justify-center flex flex-col px-5 py-5 border-b-black border-b border-solid">
                <span class="justify-between flex flex-col xl:flex-row gap-4 xl:gap-5">
                    <div class="text-purple text-2xl">Tickets</div>
                    <span class="text-white text-xl justify-center bg-purple py-1 xl:py-0 px-3 rounded-2xl w-[64%]">+ New
                        ticket</span>
                </span>
            </div>
            <div class="flex flex-col p-2 xl:p-5 gap-4">
                <span
                    class="border bg-white flex justify-between px-2.5 rounded-xl border-solid border-black border-opacity-20">
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8924cf9b87a9ac8c714bc39eb9f2f1e4dbacd969a523930ca05221671cf2023?apiKey=a9b902b8934746c7aacbbad131e88c89&"
                        class="aspect-square object-contain object-center" />
                    <input type="text"
                        class="bg-transparent text-gray-900 focus:outline-none focus-visible:outline-none rounded-lg w-full p-2.5"
                        placeholder="Search all tickets... ">
                </span>
                <div class=" flex flex-col px-4 gap-2 xl:gap-4">
                    <span
                        class="text-pink-600 text-l xl:text-lg justify-center py-3.5 border-b-purple border-b-opacity-30 border-b border-solid">
                        All tickets
                    </span>
                    <div
                        class="justify-center py-3.5 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                        <span class="justify-between flex gap-0">
                            <div class="text-purple text-l xl:text-lg  whitespace-nowrap">
                                Assigned to me
                            </div>
                            <span
                                class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span>
                    </div>
                    <div
                        class="justify-center py-3.5 flex flex-col border-b-purple border-b-opacity-30 border-b border-solid">
                        <span class="justify-between  flex gap-0">
                            <div class="text-purple text-l xl:text-lg  whitespace-nowrap">
                                My open tickets
                            </div>
                            <span
                                class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span>
                    </div>
                    <div class="justify-center flex flex-col gap-6 pt-2">
                        <span class="justify-between  flex gap-0">
                            <div class="text-purple text-l xl:text-lg  whitespace-nowrap">
                                Pending
                            </div>
                            <span
                                class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span><span class="justify-between flex">
                            <div class="text-purple text-l xl:text-lg">Unassigned</div>
                            <span
                                class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span><span class="justify-between flex gap-0">
                            <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                                Assigned
                            </div>
                            <span
                                class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span><span class="justify-between flex gap-0">
                            <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                                In Progress
                            </div>
                            <span
                                class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span><span class="justify-between flex gap-0">
                            <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                                Completed
                            </div>
                            <span
                                class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span><span class="justify-between flex gap-0">
                            <div class="text-purple text-l xl:text-lg whitespace-nowrap">
                                Solved
                            </div>
                            <span
                                class="text-white text-l xl:text-lg whitespace-nowrap justify-center  bg-purple aspect-[1.5] px-2.5 rounded-3xl">10</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
</div></template>