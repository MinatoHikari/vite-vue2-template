<template>
    <a-layout id="components-layout-demo-responsive" style="min-height: 100%">
        <a-layout-sider
            style="position: fixed; height: 100%"
            breakpoint="lg"
            collapsed-width="0"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
        >
            <div class="logo" />
            <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
                <a-menu-item key="1">
                    <a-icon type="user" />
                    <span class="nav-text">nav 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="video-camera" />
                    <span class="nav-text">nav 2</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="upload" />
                    <span class="nav-text">nav 3</span>
                </a-menu-item>
                <a-menu-item key="4">
                    <a-icon type="user" />
                    <span class="nav-text">nav 4</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout style="margin-left: 200px">
            <a-layout-header :style="{ background: '#fff', padding: 0 }" />
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    content
                    <a-button @click="changeB">测试</a-button>
                    <a-button @click="changeA">测试a</a-button>
                    <a-button @click="stayB">测试stay</a-button>
                </div>
            </a-layout-content>
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    content
                </div>
            </a-layout-content>
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    content
                </div>
            </a-layout-content>
            <a-layout-footer style="textalign: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        return {};
    },
    methods: {
        onCollapse(collapsed: unknown, type: unknown) {
            window.console.log(collapsed, type);
        },
        onBreakpoint(broken: unknown) {
            window.console.log(broken);
        },
    },
});
</script>

<style>
#components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
</style>
