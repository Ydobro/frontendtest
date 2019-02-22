<template>
	<div class="chess-board">
        <ChessCell
            v-for="n in 64" :key="n"
            :position="n"
        ></ChessCell>
	</div>
</template>

<script src="./ChessBoard.js"></script>
<style src="./ChessBoard.scss" lang="scss"></style>
