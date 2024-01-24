<script>
  import { enhance } from "$app/forms";

  export let data;
  export let form;
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<form class="form-base" method="POST" action="?/login" use:enhance>
  <div class="item-form">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" value={form?.email ?? ""} />
  </div>

  <div class="item-form">
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      value={form?.password ?? ""}
    />
  </div>

  {#if form?.error}
    <p class="notify error">{form.error}</p>
  {/if}

  <button class="btn-submit">Login</button>
</form>

<table>
  <thead>
    <th>ID</th>
    <th>Email</th>
    <th>Password</th>
    <th>Option</th>
  </thead>
  <tbody>
    {#each data.users as user}
      <tr>
        <td>{user.id}</td>
        <td>{user.mail_address}</td>
        <td>{user.password}</td>
        <td><button>Delete</button></td>
      </tr>
    {/each}
  </tbody>
</table>

<style lang="scss">
  .notify {
    margin: 0;
    text-align: center;
    font-size: 14px;

    &.error {
      color: red;
    }
  }

  table {
    text-align: center;
    margin-top: 30px;
    border: 1px solid black;
    background-color: white;

    th,
    td {
      padding: 5px 8px;
      border: 1px solid black;
    }
  }
</style>
