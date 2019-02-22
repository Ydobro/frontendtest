<template>
    <div class="site-widget">
        <div class="site-widget__header" v-if="title">
            <h3 class="site-widget__title">{{ title }}</h3>
        </div>
        <div class="site-widget__body">
            <slot></slot>
        </div>
        <div class="site-widget__footer" v-if="this.$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'site-widget',
        props: {
            title: {
                type: String,
                required: false,
            },
        },
    };
</script>

<style lang="scss">
    .site-widget {
        border-radius: 3px;
        background-color: #fff;
        color: #666463;
        overflow: hidden;
        & + & {
            margin-top: 15px;    
        }
        &__header {
            background-color: #f1f1f1;
            padding: 10px 15px;
        }
        &__title {
            margin: 0;
            font-size: 18px;
            font-weight: 500;
            line-height: 1.5;
        }
        &__body {
            padding: 15px;
        }
        &__footer {
            border-top: 1px solid #dbd9d7;
            padding: 10px 15px;
        }
    }
</style>
