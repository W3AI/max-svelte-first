<script>
  import ContactCard from "./ContactCard.svelte";

  let name = "Max";
  let title = "";
  let image = "";
  let description = "";
  let formState = 'empty';

  let createdContact;

  function addContact() {
      if ( 
          name.trim().length == 0 || 
          title.trim().length == 0 || 
          image.trim().length == 0 || 
          description.trim().length == 0 
          ) {
            formState = 'invalid';
            return;
      }
      createdContact = { 
          name: name, 
          jobTitle: title, 
          imageUrl: image, 
          desc: description 
        }
      formState = 'done';
  }

</script>

<style>
  #form {
    width: 30rem;
    max-width: 100%;
  }
</style>

<div id="form">
  <div class="form-control">
    <label for="userName">User Name</label>
    <input type="text" bind:value={name} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input type="text" bind:value={title} id="jobTitle" />
  </div>
  <div class="form-control">
    <label for="image">Image URL</label>
    <input type="text" bind:value={image} id="image" />
  </div>
  <div class="form-control">
    <label for="desc">Description</label>
    <textarea rows="3" bind:value={description} id="desc" />
  </div>
</div>

<button on:click={addContact}>Add Contact Card</button>

{#if formState === 'done'}
<ContactCard 
    userName={createdContact.name} 
    jobTitle={createdContact.jobTitle} 
    description={createdContact.desc} 
    userImage={createdContact.imageUrl} />
{:else if formState === 'invalid'}
    <p>Form not complete.</p>
{:else}
    <p>Please enter some data and hit the button!</p>
{/if}
