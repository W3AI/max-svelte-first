import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
        name: 'all',
        myName: 'Stefan'
	}
});

export default app;