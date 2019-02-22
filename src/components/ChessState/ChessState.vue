<template>
    <ul class="chess-state">
        <li class="chess-state__item" 
            v-for="(position, index) in this.items" :key="index"
        >
            <span class="chess-state__number">#{{ index + 1 }}:</span>
            <span class="chess-state__title">{{ getPostitionName(position) }}</span>
        </li>
    </ul>
</template>

<script src="./ChessState.js"></script>
<style src="./ChessState.scss" lang="scss"></style>
