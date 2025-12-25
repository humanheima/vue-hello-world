<template>
    <div class="vant-demo2">
        <h2>Vant 组件 Demo2 - 图片预览功能</h2>

        <!-- 返回按钮 -->
        <div class="back-section">
            <van-button type="default" icon="arrow-left" @click="goBack" style="margin-bottom: 20px;">
                返回 VantDemo
            </van-button>
        </div>

        <!-- 图片预览示例 -->
        <div class="demo-section">
            <h3>🖼️ 图片预览功能</h3>

            <!-- 圆形缩略图 -->
            <div class="thumbnail-container">
                <img class="thumbnail-image"
                    src="https://imgservices-1252317822.image.myqcloud.com/coco/s11172022/6db4fb37.u34k62.png"
                    alt="点击查看大图" @click="showImagePreview = true" />
                <div class="view-hint">点击查看大图</div>
            </div>

            <!-- 图片预览弹出层 -->
            <van-popup v-model:show="showImagePreview" position="center" :overlay="true" :close-on-click-overlay="true"
                :style="{ background: 'rgba(0, 0, 0, 0.9)' }" closeable close-icon="close"
                :close-icon-position="'top-right'">
                <div class="image-preview-content">
                    <!-- 大图展示 -->
                    <div class="preview-image-container">
                        <img class="preview-image"
                            src="https://imgservices-1252317822.image.myqcloud.com/coco/s11172022/6db4fb37.u34k62.png"
                            alt="预览图片" @click="showImagePreview = false" />
                    </div>

                    <!-- 操作按钮 -->
                    <div class="preview-actions">
                        <van-button icon="download" type="primary" size="small" @click="downloadImage">
                            下载图片
                        </van-button>
                        <van-button icon="share" size="small" @click="shareImage">
                            分享
                        </van-button>
                    </div>
                </div>
            </van-popup>
        </div>

        <!-- 多图预览示例 -->
        <div class="demo-section">
            <h3>📷 多图预览画廊</h3>

            <!-- 图片网格 -->
            <div class="image-grid">
                <div v-for="(image, index) in images" :key="index" class="grid-item" @click="openPreview(index)">
                    <img :src="image.thumbnail" :alt="image.title" class="grid-image" />
                    <div class="image-overlay">
                        <van-icon name="eye-o" />
                    </div>
                </div>
            </div>

            <!-- 多图预览弹层 -->
            <van-popup v-model:show="showGalleryPreview" position="center"
                :style="{ background: 'rgba(0, 0, 0, 0.95)' }" closeable>
                <div class="gallery-preview">
                    <!-- 当前图片 -->
                    <div class="current-image">
                        <img :src="images[currentIndex]?.url" :alt="images[currentIndex]?.title"
                            class="gallery-image" />
                    </div>

                    <!-- 图片信息 -->
                    <div class="image-info">
                        <h4>{{ images[currentIndex]?.title }}</h4>
                        <p>{{ currentIndex + 1 }} / {{ images.length }}</p>
                    </div>

                    <!-- 导航按钮 -->
                    <div class="nav-buttons">
                        <van-button icon="arrow-left" @click="prevImage" :disabled="currentIndex === 0" />
                        <van-button icon="arrow" @click="nextImage" :disabled="currentIndex === images.length - 1" />
                    </div>
                </div>
            </van-popup>
        </div>

        <!-- 其他弹层示例 -->
        <div class="demo-section">
            <h3>📋 其他弹层应用</h3>

            <div class="button-group">
                <van-button type="primary" @click="showActionSheet = true">
                    操作面板
                </van-button>
                <van-button type="success" @click="showNoticePanel = true">
                    通知面板
                </van-button>
            </div>

            <!-- 操作面板弹层 -->
            <van-popup v-model:show="showActionSheet" position="bottom" :style="{ height: '40%' }" round closeable>
                <div class="popup-content">
                    <h4>📱 操作选择</h4>
                    <van-cell-group>
                        <van-cell title="拍照" icon="photograph" @click="handleAction('拍照')" />
                        <van-cell title="从相册选择" icon="photo" @click="handleAction('相册')" />
                        <van-cell title="文件管理" icon="folder-o" @click="handleAction('文件')" />
                        <van-cell title="取消" @click="showActionSheet = false" />
                    </van-cell-group>
                </div>
            </van-popup>

            <!-- 通知面板弹层 -->
            <van-popup v-model:show="showNoticePanel" position="center" round
                :style="{ width: '85%', padding: '20px' }">
                <div class="popup-content">
                    <h4>🔔 系统通知</h4>
                    <div class="notice-list">
                        <div class="notice-item" v-for="notice in notices" :key="notice.id">
                            <van-icon :name="notice.icon" :color="notice.color" />
                            <div class="notice-content">
                                <p class="notice-title">{{ notice.title }}</p>
                                <p class="notice-time">{{ notice.time }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="notice-actions">
                        <van-button size="small" @click="showNoticePanel = false">关闭</van-button>
                        <van-button type="primary" size="small" @click="clearNotices">清空通知</van-button>
                    </div>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>
import { Popup, Button, Toast, Icon, Cell, CellGroup } from 'vant'

export default {
    name: 'VantDemo2',
    components: {
        VanPopup: Popup,
        VanButton: Button,
        VanIcon: Icon,
        VanCell: Cell,
        VanCellGroup: CellGroup
    },
    data() {
        return {
            // 单图预览
            showImagePreview: false,
            imageUrl: 'https://imgservices-1252317822.image.myqcloud.com/coco/s11172022/6db4fb37.u34k62.png',

            // 多图预览
            showGalleryPreview: false,
            currentIndex: 0,
            images: [
                {
                    id: 1,
                    title: '示例图片 1',
                    thumbnail: 'https://imgservices-1252317822.image.myqcloud.com/coco/s11172022/6db4fb37.u34k62.png',
                    url: 'https://imgservices-1252317822.image.myqcloud.com/coco/s11172022/6db4fb37.u34k62.png'
                },
                {
                    id: 2,
                    title: '示例图片 2',
                    thumbnail: 'https://imgservices-1252317822.image.myqcloud.com/coco/s11172022/6db4fb37.u34k62.png',
                    url: 'https://imgservices-1252317822.image.myqcloud.com/coco/s11172022/6db4fb37.u34k62.png'
                },
                {
                    id: 3,
                    title: '示例图片 3',
                    thumbnail: 'https://imgservices-1252317822.image.myqcloud.com/coco/s11172022/6db4fb37.u34k62.png',
                    url: 'https://imgservices-1252317822.image.myqcloud.com/coco/s11172022/6db4fb37.u34k62.png'
                }
            ],

            // 其他弹层
            showActionSheet: false,
            showNoticePanel: false,
            notices: [
                { id: 1, title: '系统更新提醒', time: '5分钟前', icon: 'info-o', color: '#1989fa' },
                { id: 2, title: '新消息通知', time: '1小时前', icon: 'chat-o', color: '#07c160' },
                { id: 3, title: '安全提醒', time: '3小时前', icon: 'warning-o', color: '#ff976a' }
            ]
        }
    },
    methods: {
        // 返回功能
        goBack() {
            this.$emit('go-back')
        },

        // 单图预览功能
        downloadImage() {
            // 创建下载链接
            const link = document.createElement('a')
            link.href = this.imageUrl
            link.download = 'preview-image.png'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            Toast.success('开始下载图片')
        },

        shareImage() {
            // 分享功能
            if (navigator.share) {
                navigator.share({
                    title: '分享图片',
                    url: this.imageUrl
                })
            } else {
                // 复制链接到剪贴板
                navigator.clipboard.writeText(this.imageUrl).then(() => {
                    Toast.success('图片链接已复制到剪贴板')
                }).catch(() => {
                    Toast.fail('复制失败')
                })
            }
        },

        // 多图预览功能
        openPreview(index) {
            this.currentIndex = index
            this.showGalleryPreview = true
        },

        nextImage() {
            if (this.currentIndex < this.images.length - 1) {
                this.currentIndex++
            }
        },

        prevImage() {
            if (this.currentIndex > 0) {
                this.currentIndex--
            }
        },

        // 其他操作
        handleAction(action) {
            console.log('操作:', action)
            this.showActionSheet = false
            Toast.success(`选择了${action}`)
        },

        clearNotices() {
            this.notices = []
            this.showNoticePanel = false
            Toast.success('通知已清空')
        }
    }
}
</script>

<style scoped>
.vant-demo2 {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background: #f7f8fa;
    min-height: 100vh;
}

.demo-section {
    margin-bottom: 30px;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.demo-section h3 {
    margin: 0 0 15px 0;
    color: #323233;
    font-size: 16px;
}

/* 缩略图样式 */
.thumbnail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.thumbnail-container:hover {
    transform: scale(1.05);
}

.thumbnail-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #1989fa;
    box-shadow: 0 4px 12px rgba(25, 137, 250, 0.3);
    transition: all 0.3s ease;
}

.thumbnail-image:hover {
    border-color: #0570e6;
    box-shadow: 0 6px 16px rgba(25, 137, 250, 0.5);
}

.view-hint {
    margin-top: 10px;
    color: #646566;
    font-size: 14px;
    transition: color 0.2s ease;
}

.thumbnail-container:hover .view-hint {
    color: #1989fa;
}

/* 预览弹层样式 */
.image-preview-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vh;
    padding: 20px;
}

.preview-image-container {
    flex: 1;
    display: flex;
    /* 控制竖直方向上居中 */
    align-items: center;    
    /* 控制水平方向上居中 */
    justify-content: center;
    width: 100%;
    max-height: 80vh;
}

.preview-image {
    max-width: 90vw;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.preview-image:hover {
    transform: scale(1.02);
}

.preview-actions {
    display: flex;
    gap: 15px;
    margin-top: 20px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(10px);
}

/* 图片网格样式 */
.image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
    margin-bottom: 20px;
}

.grid-item {
    position: relative;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease;
}

.grid-item:hover {
    transform: scale(1.05);
}

.grid-image {
    width: 100%;
    height: 100px;
    object-fit: cover;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: white;
    font-size: 24px;
}

.grid-item:hover .image-overlay {
    opacity: 1;
}

/* 画廊预览样式 */
.gallery-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
}

.current-image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.gallery-image {
    max-width: 90vw;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 8px;
}

.image-info {
    text-align: center;
    color: white;
    margin: 20px 0;
}

.image-info h4 {
    margin: 0 0 5px 0;
}

.image-info p {
    margin: 0;
    font-size: 14px;
    opacity: 0.8;
}

.nav-buttons {
    display: flex;
    gap: 20px;
}

/* 按钮组样式 */
.button-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

/* 弹层内容样式 */
.popup-content {
    padding: 20px;
}

.popup-content h4 {
    margin: 0 0 15px 0;
    color: #323233;
    text-align: center;
}

/* 通知样式 */
.notice-list {
    margin: 15px 0;
}

.notice-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}

.notice-item:last-child {
    border-bottom: none;
}

.notice-content {
    margin-left: 10px;
    flex: 1;
}

.notice-title {
    margin: 0;
    font-size: 14px;
    color: #323233;
}

.notice-time {
    margin: 5px 0 0 0;
    font-size: 12px;
    color: #969799;
}

.notice-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .vant-demo2 {
        padding: 10px;
    }

    .thumbnail-image {
        width: 100px;
        height: 100px;
    }

    .preview-actions {
        flex-direction: column;
        gap: 10px;
    }

    .preview-image {
        max-width: 95vw;
        max-height: 60vh;
    }

    .image-grid {
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    }

    .grid-image {
        height: 80px;
    }

    .button-group {
        flex-direction: column;
    }
}

/* 弹层关闭按钮样式优化 */
:deep(.van-popup__close-icon) {
    color: white;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    padding: 8px;
}
</style>