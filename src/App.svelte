<script>
    let name = 'Steve';
    let age = 36;

    function incrementAge() {
        age += 1;
    }
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Servus {name}, my age is {age}!</h1>
<button on:click="{incrementAge}">Change Age</button>
