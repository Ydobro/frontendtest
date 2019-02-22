<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
    
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 14px;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: #333;
        color: #fff;
    }

    .btn {
        display: inline-block;
        font-weight: 400;
        color: #212529;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: 
            color .15s ease-in-out,
            background-color .15s ease-in-out,
            border-color .15s ease-in-out,
            box-shadow .15s ease-in-out;
        cursor: pointer;
        &.disabled,
        &:disabled {
            opacity: .85;
            pointer-events: none;
        }
        &_full {
            width: 100%;    
        }
        &_main {
            background-color: #e6912c;
            border-color: #e6912c;
            border-bottom-color: #ad6d21;
            color: #fff;
            &:hover {
                background-color: #d37e19;
                border-color: #d37e19;
            }
        }
    }
</style>
