<template>
	<form
		:class="[
			'o-FormGroup',
			inline ? 'o-FormGroup--inline' : '',
			blockLabel ? 'o-FormGroup--blockLabel' : ''
		]"
	>
		<slot></slot>
	</form>
</template>

<script>
	const props = {
		labelWidth: {
			type: [String, Number],
			default: 80
		},
		inline: {
			type: Boolean,
			default: false
		},
		blockLabel: {
			type: Boolean,
			default: false
		},
		verifyResult: {
			type: Object,
			default () {
				return {}
			}
		}
	}

	export default {
		name: 'FormGroup',
		props,
		// TODO: validate form
	}
</script>
