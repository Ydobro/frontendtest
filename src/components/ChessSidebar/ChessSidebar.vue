<template>
	<aside class="chess-sidebar">
        <SiteWidget title="Selected:">
            <template v-if="this.selected.length">
                <ChessState :items="this.selected" v-slot></ChessState>
                <template slot="footer">
                    <button type="button" class="btn btn_main btn_full"
                        @click="clearSelected">
                        Clear
                    </button>
                </template>
            </template>
            <template v-else>
                <span>No seleted squares.</span> 
            </template>
        </SiteWidget>

        <SiteWidget title="History:">
            <template v-if="this.history.length">
                <ChessState :items="this.history"></ChessState>
                <template slot="footer">
                    <button type="button" class="btn btn_main btn_full"
                        @click="clearHistory">
                        Clear
                    </button>
                </template>
            </template>
            <template v-else>
                <span>History is empty.</span> 
            </template>
        </SiteWidget>
	</aside>
</template>

<script src="./ChessSidebar.js"></script>
<style src="./ChessSidebar.scss" lang="scss"></style>
