<script>
    let name = 'Steve';
    let age = 36;

    // let uppercaseName; not required

    // js labeled statement "<label-word>:"
    // in svelte it must be "$:"
    // svelte will recalculate var after $: whenever params change
    $: uppercaseName = name.toUpperCase();

    $: console.log(name);

    function incrementAge() {
        age += 1;
    }

    function changeName() {
        name = 'Stefan';
    }
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Servus {uppercaseName}, my age is {age}!</h1>
<button on:click="{incrementAge}">Change Age</button>
<button on:click="{changeName}">Change Name</button>
