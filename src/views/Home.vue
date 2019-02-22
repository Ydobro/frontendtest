<template>
	<div class="site-page home">
        <main class="site-content site-content_two-column">
            <div class="site-content__main">
                <ChessBoard></ChessBoard>
            </div>
		    <ChessSidebar class="site-content__sidebar site-content__sidebar_right"></ChessSidebar>
        </main>
	</div>
</template>

<script>
	// @ is an alias to /src
	import ChessBoard from '@/components/ChessBoard/ChessBoard.vue';
	import ChessSidebar from '@/components/ChessSidebar/ChessSidebar.vue';

	export default {
		name: 'home',
		components: {
			ChessBoard,
			ChessSidebar,
		},
	};

</script>

<style lang="scss">
    .home {
        padding: 15px;
    }

    .site-content {
        max-width: 1000px;
        margin: 0 auto;
        &_two-column {
            display: flex;
            @include max-screen($r_mobile) {
                flex-direction: column;
            }
        }
        &__main {
            width: 100%;
            flex-grow: 1;
        }
        &__sidebar {
            width: 300px;
            flex-shrink: 0;
            @include max-screen($r_mobile) {
                width: 100%;
            }
            &_right {
                margin-left: 15px;
                @include max-screen($r_mobile) {
                    margin-left: 0;
                    margin-top: 15px;
                }
            }
        }
    }
</style>
