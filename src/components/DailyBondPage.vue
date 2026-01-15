<template>
    <div class="bg-[#f6f6f6] relative w-full min-h-screen">
        <!-- 背景装饰圆圈 -->
        <div class="absolute left-[-3.75rem] w-[18rem] h-[18rem] top-[-8.0625rem] pointer-events-none">
            <div class="absolute inset-[-69.44%] bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
        </div>
        <div class="absolute left-[10rem] w-[18rem] h-[18rem] top-[-8.0625rem] pointer-events-none">
            <div class="absolute inset-[-69.44%] bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
        </div>

        <!-- 顶部状态栏和标题 -->
        <div class="flex flex-col items-start w-full">
            <!-- 状态栏 -->
            <div class="h-[2.75rem] relative w-full px-[0.875rem] flex items-center justify-between">
                <p class="font-semibold text-[0.9375rem] text-[#25293d] tracking-[-0.020625rem]">9:27</p>
                <div class="flex items-center gap-2">
                    <div class="w-[1.125rem] h-[0.75rem]"></div>
                    <div class="w-[0.9375rem] h-[0.75rem]"></div>
                    <div class="w-[1.5625rem] h-[0.75rem]"></div>
                </div>
            </div>

            <!-- 标题栏 -->
            <div class="h-[2.75rem] relative w-full flex items-center justify-center">
                <div class="absolute left-[1rem] flex items-center cursor-pointer" @click="goBack">
                    <div class="w-[1.25rem] h-[1.25rem] flex items-center justify-center">
                        <svg class="w-[0.375rem] h-[0.75rem]" viewBox="0 0 6 12" fill="none">
                            <path d="M5 1L1 6L5 11" stroke="#111" stroke-width="0.125rem" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <p class="font-semibold text-[1rem] text-[#111] leading-[1.125rem]">每日羁绊</p>
            </div>
        </div>

        <!-- 今日亲密度卡片 -->
        <div class="mx-[1rem] mt-[0.6875rem] h-[8.25rem] rounded-[1.25rem] relative overflow-hidden"
            style="background: linear-gradient(180.25deg, rgba(255, 255, 255, 0.32) 12.16%, rgba(255, 255, 255, 0) 99.45%); border: 0.0625rem solid white;">
            <!-- 装饰图标 -->
            <div class="absolute right-[-0.3125rem] top-[-1.375rem] w-[3.55rem] h-[3.5rem]">
                <div class="w-full h-full bg-pink-400 rounded-full opacity-80"></div>
            </div>

            <!-- 今日亲密度标题 -->
            <div class="absolute left-[1.25rem] top-[1rem] flex items-center">
                <div class="w-[2.5rem] h-[2.5rem] bg-purple-100 rounded-full mr-2"></div>
                <div class="font-bold text-[1.125rem] tracking-[0.0625rem]">
                    <span
                        class="bg-gradient-to-b from-[#8368cd] to-[rgba(199,122,238,0.5)] bg-clip-text text-transparent">今日亲密度</span>
                </div>
            </div>

            <!-- 进度值 -->
            <p class="absolute right-[1.25rem] top-[2.375rem] text-[0.75rem] text-[rgba(17,17,17,0.4)]"><span> {{
                currentProgress }}</span>/<span> {{ maxProgress }}</span>
            </p>

            <!-- 进度条和说明 -->
            <div class="absolute left-[1.25rem] right-[1.25rem] top-[3.75rem] flex flex-col gap-[0.375rem]">
                <div class="relative w-full h-[0.5rem] bg-[rgba(255,255,255,0.56)] rounded-[0.4375rem] overflow-hidden">
                    <div class="absolute left-0 top-0 h-full rounded-[2.25rem] bg-gradient-to-r from-purple-400 to-pink-400"
                        :style="{ width: progressPercentage + '%' }"></div>
                </div>
                <p class="text-[0.625rem] text-[rgba(17,17,17,0.4)] leading-[0.75rem]">
                    每日好感度获取上限200（超出不计算），每日04:00重置任务
                </p>
            </div>
        </div>

        <!-- 任务列表 -->
        <div class="flex flex-col gap-[0.75rem] px-[1rem] mt-[1.125rem] pb-[3.125rem]">
            <!-- 文本聊天任务卡片 1 -->
            <div class="bg-white rounded-[1rem] p-[1rem] shadow-sm">
                <div class="flex items-center justify-between mb-[0.25rem]">
                    <p class="font-semibold text-[0.875rem] text-[#111]">文本聊天</p>
                    <p class="text-[0.75rem] text-[rgba(17,17,17,0.4)]">
                        <span class="text-[#8183ff]">10</span>/200
                    </p>
                </div>

                <p class="text-[0.75rem] text-[rgba(17,17,17,0.64)] leading-[1rem] mb-[0.5rem]">
                    仅限单聊，每轮聊天可获得1好感，60轮后可获得3倍好感两行字样式两行两行字样式两行
                </p>

                <div class="relative mb-[0.5rem]">
                    <div class="flex items-center gap-[0.75rem]">
                        <div class="flex-1 relative pt-[1.625rem]">
                            <!-- 3倍标签 -->
                            <div
                                class="absolute left-[8.53125rem] top-0 bg-[#8183ff] text-white text-[0.75rem] font-bold rounded-[1.125rem] px-[0.375rem] py-[0.1875rem] flex items-center gap-[0.0625rem]">
                                <span>3</span>
                                <span class="text-[0.625rem] font-normal">倍亲密</span>
                            </div>

                            <div class="h-[0.375rem] bg-[rgba(17,17,17,0.04)] rounded-[0.4375rem] relative">
                                <div
                                    class="absolute left-0 top-0 h-full w-[25%] rounded-[2.25rem] bg-gradient-to-r from-purple-400 to-blue-400">
                                </div>
                            </div>
                            <div class="flex justify-between text-[0.625rem] text-[rgba(17,17,17,0.4)] mt-[0.75rem]">
                                <span>0轮</span>
                                <span>60轮</span>
                                <span>90轮</span>
                            </div>
                        </div>
                        <button
                            class="bg-[#8183ff] text-white text-[0.75rem] font-semibold rounded-[0.5rem] px-[0.5rem] py-[0.375rem] h-[1.875rem] w-[3.75rem] whitespace-nowrap">
                            去聊天
                        </button>
                    </div>

                </div>
            </div>

            <!-- 文本聊天任务卡片 2 -->
            <div class="bg-white rounded-[1rem] p-[1rem] shadow-sm">
                <div class="flex items-center justify-between mb-[0.25rem]">
                    <p class="font-semibold text-[0.875rem] text-[#111]">文本聊天</p>
                    <p class="text-[0.75rem] text-[rgba(17,17,17,0.4)]">
                        <span class="text-[#8183ff]">10</span>/200
                    </p>
                </div>

                <p class="text-[0.75rem] text-blue-400 leading-[1rem] mb-[0.5rem]">
                    仅限单聊，每轮聊天可获得1好感，60轮后可获得3倍好感两行字样式两行两行字样式两行
                </p>

                <div class="relative mb-[0.5rem]">
                    <div class="flex items-center gap-[0.75rem]">
                        <div class="flex-1 relative pt-[1.375rem]">


                            <div
                                class="absolute left-[8.53125rem] top-0 w-[1.75rem] h-[2.1875rem] flex items-center justify-center">
                                <div class="relative">
                                    <div
                                        class="w-[1.625rem] h-[1.1677rem] bg-gradient-to-b from-pink-400 to-pink-300 rounded-[50%] transform rotate-[-20deg]">
                                    </div>
                                    <span
                                        class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[0.75rem] font-bold">x3</span>
                                </div>
                            </div>

                            <!-- 进度条 -->
                            <div class="h-[0.375rem] bg-red-300 rounded-[0.4375rem] relative mt-2">
                                <div
                                    class="absolute left-0 top-0 h-full w-[68%] rounded-[2.25rem] bg-gradient-to-r from-purple-400 to-blue-400">
                                </div>
                            </div>


                            <div class="flex justify-between text-[0.625rem] text-[rgba(17,17,17,0.4)] mt-[0.75rem]">
                                <span>0轮</span>
                                <span>60轮</span>
                                <span>90轮</span>
                            </div>

                        </div>
                        <button
                            class="bg-[#8183ff] text-white text-[0.75rem] font-semibold rounded-[0.5rem] px-[0.5rem] py-[0.375rem] h-[1.875rem] w-[3.75rem] whitespace-nowrap">
                            去聊天
                        </button>
                    </div>
                </div>
            </div>

            <!-- 语音通话任务卡片 -->
            <div class="bg-white rounded-[1rem] p-[1rem] shadow-sm">
                <div class="flex items-start justify-between mb-[0.375rem]">
                    <div class="flex-1">
                        <p class="font-semibold text-[0.875rem] text-[#111] mb-[0.375rem]">语音通话</p>
                        <p class="text-[0.75rem] text-[rgba(17,17,17,0.64)] leading-[1rem]">
                            每1分钟语音通话，可获得5好感度
                        </p>
                    </div>
                    <p class="text-[0.75rem] text-[rgba(17,17,17,0.4)]">
                        <span class="text-[#8183ff]">50</span>/50
                    </p>
                </div>

                <div class="flex items-center gap-[0.75rem]">
                    <div class="flex-1 relative pt-[0.75rem]">
                        <div class="h-[0.375rem] bg-[rgba(17,17,17,0.04)] rounded-[0.4375rem] relative">
                            <div
                                class="absolute left-0 top-0 h-full w-full rounded-[2.25rem] bg-gradient-to-r from-purple-400 to-blue-400">
                            </div>
                        </div>
                        <div class="flex justify-between text-[0.625rem] text-[rgba(17,17,17,0.4)] mt-[0.5rem]">
                            <span>0分钟</span>
                            <span>90轮</span>
                        </div>
                    </div>
                    <button
                        class="bg-[#8183ff] text-white text-[0.75rem] font-semibold rounded-[0.5rem] px-[0.5rem] py-[0.375rem] h-[1.875rem] w-[3.75rem] whitespace-nowrap">
                        去聊天
                    </button>
                </div>
            </div>

            <!-- 发朋友圈任务卡片 -->
            <div class="bg-white rounded-[1rem] p-[1rem] shadow-sm">
                <div class="flex items-start justify-between mb-[0.375rem]">
                    <div class="flex-1">
                        <p class="font-semibold text-[0.875rem] text-[#111] mb-[0.375rem]">发朋友圈</p>
                        <p class="text-[0.75rem] text-[rgba(17,17,17,0.64)] leading-[1rem]">
                            发朋友圈并@梦中人时，该梦中人可获得20好感
                        </p>
                    </div>
                    <p class="text-[0.75rem] text-[rgba(17,17,17,0.4)]">
                        <span class="text-[#a1a2ff]">0</span>/20
                    </p>
                </div>

                <div class="flex items-center gap-[0.75rem]">
                    <div class="flex-1 relative pt-[0.75rem]">
                        <div class="h-[0.375rem] bg-[rgba(17,17,17,0.04)] rounded-[0.4375rem] relative"></div>
                        <div class="flex justify-between text-[0.625rem] text-[rgba(17,17,17,0.4)] mt-[0.5rem]">
                            <span>@0次</span>
                            <span>@5次</span>
                        </div>
                    </div>
                    <button
                        class="bg-[#8183ff] text-white text-[0.75rem] font-semibold rounded-[0.5rem] px-[0.5rem] py-[0.375rem] h-[1.875rem] w-[3.75rem] whitespace-nowrap">
                        前往
                    </button>
                </div>
            </div>

            <!-- 评论朋友圈任务卡片 -->
            <div class="bg-white rounded-[1rem] p-[1rem] shadow-sm">
                <div class="flex items-start justify-between mb-[0.375rem]">
                    <div class="flex-1">
                        <p class="font-semibold text-[0.875rem] text-[#111] mb-[0.375rem]">评论朋友圈</p>
                        <p class="text-[0.75rem] text-[rgba(17,17,17,0.64)] leading-[1rem]">
                            每评论1次该梦中人的朋友圈时，可获得5好感度
                        </p>
                    </div>
                    <p class="text-[0.75rem] text-[rgba(17,17,17,0.4)]">
                        <span class="text-[#8183ff]">0</span>/10
                    </p>
                </div>

                <div class="flex items-center gap-[0.75rem]">
                    <div class="flex-1 relative pt-[0.75rem]">
                        <div class="h-[0.375rem] bg-[rgba(17,17,17,0.04)] rounded-[0.4375rem] relative"></div>
                        <div class="flex justify-between text-[0.625rem] text-[rgba(17,17,17,0.4)] mt-[0.5rem]">
                            <span>0次</span>
                            <span>5次</span>
                        </div>
                    </div>
                    <button
                        class="bg-[#eee] text-[#c6c6c6] text-[0.75rem] font-semibold rounded-[0.5rem] px-[0.5rem] py-[0.375rem] h-[1.875rem] w-[3.75rem] flex items-center justify-center gap-1 whitespace-nowrap">
                        <svg class="w-[0.75rem] h-[0.75rem]" viewBox="0 0 12 12" fill="none">
                            <path d="M6 3V6M6 6V9M6 6H9M6 6H3" stroke="#c6c6c6" stroke-width="0.09375rem"
                                stroke-linecap="round" />
                            <rect x="4" y="1" width="4" height="4" rx="1" stroke="#c6c6c6" stroke-width="0.09375rem" />
                        </svg>
                        Lv.9
                    </button>
                </div>
            </div>

            <!-- 创建互动小剧场任务卡片 -->
            <div class="bg-white rounded-[1rem] p-[1rem] shadow-sm">
                <div class="flex items-start justify-between mb-[0.375rem]">
                    <div class="flex-1">
                        <p class="font-semibold text-[0.875rem] text-[#111] mb-[0.375rem]">创建互动小剧场</p>
                        <p class="text-[0.75rem] text-[rgba(17,17,17,0.64)] leading-[1rem]">
                            每个公开互动小剧场创建审核通过+50亲密度（注意：无意义的小剧场巡检后将扣除相应亲密度）
                        </p>
                    </div>
                    <p class="text-[0.75rem] text-[rgba(17,17,17,0.4)]">
                        <span class="text-[#8183ff]">0</span>/50
                    </p>
                </div>

                <div class="flex items-center gap-[0.75rem]">
                    <div class="flex-1 relative pt-[0.75rem]">
                        <div class="h-[0.375rem] bg-[rgba(17,17,17,0.04)] rounded-[0.4375rem] relative"></div>
                        <div class="flex justify-between text-[0.625rem] text-[rgba(17,17,17,0.4)] mt-[0.5rem]">
                            <span>0次</span>
                            <span>1次</span>
                        </div>
                    </div>
                    <button
                        class="bg-[#eee] text-[#c6c6c6] text-[0.75rem] font-semibold rounded-[0.5rem] px-[0.5rem] py-[0.375rem] h-[1.875rem] w-[3.75rem] whitespace-nowrap"
                        disabled>
                        去创建
                    </button>
                </div>
            </div>
        </div>

        <!-- 底部指示条 -->
        <div class="fixed bottom-0 left-0 right-0 h-[2.125rem] flex items-center justify-center">
            <div class="w-[8.4375rem] h-[0.3125rem] bg-[#1f2233] rounded-[0.625rem]"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DailyBondPage',
    data() {
        return {
            currentProgress: 120,
            maxProgress: 200,
        }
    },
    computed: {
        progressPercentage() {
            return (this.currentProgress / this.maxProgress) * 100
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
/* WindiCSS 已经提供了大部分样式，这里只添加必要的自定义样式 */
button:disabled {
    cursor: not-allowed;
}
</style>
